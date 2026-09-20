/* Quick autocomplete for the site-wide search box in the sidebar.
   Loads the same /search.json index the Search page uses and suggests
   pages as you type; Enter with nothing picked falls through to the
   full Search page, so everything still works without this script. */
(function () {
  "use strict";

  var form = document.querySelector(".nav-search");
  if (!form) return;
  var input = form.querySelector("input[type=search]");
  var list = form.querySelector(".search-suggest");
  if (!input || !list) return;

  var MAX_SUGGESTIONS = 7;
  var index = null;
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(form.dataset.index)
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then(function (pages) {
          index = pages.map(function (p) {
            return {
              page: p,
              titleLC: p.title.toLowerCase(),
              descriptionLC: (p.description || "").toLowerCase(),
              sectionLC: (p.section || "").toLowerCase(),
              contentLC: (p.content || "").toLowerCase()
            };
          });
        });
    }
    return indexPromise;
  }

  function countOccurrences(haystack, needle) {
    var count = 0;
    var pos = haystack.indexOf(needle);
    while (pos !== -1) {
      count += 1;
      pos = haystack.indexOf(needle, pos + needle.length);
    }
    return count;
  }

  /* Same ranking as the Search page, so the top suggestions here match
     the top results there. */
  function scoreEntry(entry, terms) {
    var score = 0;
    for (var i = 0; i < terms.length; i += 1) {
      var term = terms[i];
      var inTitle = entry.titleLC.indexOf(term) !== -1;
      var inDescription = entry.descriptionLC.indexOf(term) !== -1;
      var inSection = entry.sectionLC.indexOf(term) !== -1;
      var contentHits = countOccurrences(entry.contentLC, term);
      if (!inTitle && !inDescription && !inSection && contentHits === 0) {
        return 0; // every term must appear somewhere on the page
      }
      score += (inTitle ? 12 : 0) + (inDescription ? 5 : 0) + (inSection ? 3 : 0) + Math.min(contentHits, 10);
    }
    return score;
  }

  /* Append `text` with each matched term wrapped in <mark>, building DOM
     nodes so page titles are never parsed as HTML. */
  function appendHighlighted(parent, text, terms) {
    var textLC = text.toLowerCase();
    var pos = 0;
    while (pos < text.length) {
      var nextAt = -1;
      var nextLen = 0;
      for (var i = 0; i < terms.length; i += 1) {
        var at = textLC.indexOf(terms[i], pos);
        if (at !== -1 && (nextAt === -1 || at < nextAt)) {
          nextAt = at;
          nextLen = terms[i].length;
        }
      }
      if (nextAt === -1) {
        parent.appendChild(document.createTextNode(text.slice(pos)));
        break;
      }
      if (nextAt > pos) parent.appendChild(document.createTextNode(text.slice(pos, nextAt)));
      var mark = document.createElement("mark");
      mark.textContent = text.slice(nextAt, nextAt + nextLen);
      parent.appendChild(mark);
      pos = nextAt + nextLen;
    }
  }

  var activeIndex = -1;
  var options = [];

  function close() {
    list.hidden = true;
    list.textContent = "";
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeIndex = -1;
    options = [];
  }

  function setActive(i) {
    if (activeIndex >= 0 && options[activeIndex]) {
      options[activeIndex].setAttribute("aria-selected", "false");
    }
    activeIndex = i;
    if (i >= 0 && options[i]) {
      options[i].setAttribute("aria-selected", "true");
      input.setAttribute("aria-activedescendant", options[i].id);
      if (options[i].scrollIntoView) options[i].scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function choose(li) {
    window.location.href = li.dataset.url;
  }

  function addOption(build, url) {
    var li = document.createElement("li");
    li.id = "nav-search-opt-" + options.length;
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", "false");
    li.dataset.url = url;
    build(li);
    // pointerdown covers mouse and touch alike, and fires before the
    // input's blur can close the list out from under the tap
    li.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      choose(li);
    });
    li.addEventListener("click", function (e) {
      e.preventDefault();
      choose(li);
    });
    li.addEventListener("mousemove", function () {
      var i = options.indexOf(li);
      if (i !== activeIndex) setActive(i);
    });
    list.appendChild(li);
    options.push(li);
  }

  function searchPageUrl(query) {
    return form.action + "?q=" + encodeURIComponent(query);
  }

  function render(query) {
    close();
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0 || !index) return;

    var matches = index
      .map(function (entry) { return { entry: entry, score: scoreEntry(entry, terms) }; })
      .filter(function (m) { return m.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, MAX_SUGGESTIONS);

    matches.forEach(function (m) {
      var page = m.entry.page;
      addOption(function (li) {
        if (page.section) {
          var section = document.createElement("span");
          section.className = "suggest-section";
          section.textContent = page.section;
          li.appendChild(section);
        }
        var title = document.createElement("span");
        title.className = "suggest-title";
        appendHighlighted(title, page.title, terms);
        li.appendChild(title);
      }, page.url);
    });

    addOption(function (li) {
      li.className = "suggest-all";
      li.textContent = matches.length === 0
        ? "Nothing pressed under “" + query + "” — open the full search →"
        : "See all results for “" + query + "” →";
    }, searchPageUrl(query));

    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  var debounceTimer = null;
  function onInput() {
    var query = input.value.trim();
    clearTimeout(debounceTimer);
    if (!query) { close(); return; }
    debounceTimer = setTimeout(function () {
      loadIndex().then(
        function () { render(query); },
        function () { close(); } // no index? the form still submits
      );
    }, 100);
  }

  input.addEventListener("input", onInput);
  input.addEventListener("focus", function () { loadIndex(); }); // warm the index
  input.addEventListener("blur", close);

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (list.hidden) { onInput(); return; }
      e.preventDefault();
      var delta = e.key === "ArrowDown" ? 1 : -1;
      var next = activeIndex + delta;
      if (next >= options.length) next = 0;
      if (next < -1) next = options.length - 1;
      setActive(next);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && options[activeIndex]) {
        e.preventDefault();
        choose(options[activeIndex]);
      }
      // no selection: let the form submit to the full Search page
    } else if (e.key === "Escape") {
      close();
    }
  });
})();
