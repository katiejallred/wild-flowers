/* Client-side search for the Fairhaven Field Guide.
   Loads /search.json (built by Jekyll from every guide page) and ranks
   pages as you type. No dependencies. */
(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var resultsEl = document.getElementById("search-results");
  var metaEl = document.getElementById("search-meta");
  if (!input || !resultsEl || !metaEl) return;

  var SNIPPET_RADIUS = 90; // characters of context on each side of a match
  var index = null;
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(window.FFG_SEARCH_INDEX_URL)
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then(function (pages) {
          index = pages.map(function (p) {
            return {
              page: p,
              titleLC: p.title.toLowerCase(),
              descriptionLC: p.description.toLowerCase(),
              sectionLC: p.section.toLowerCase(),
              contentLC: p.content.toLowerCase()
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

  /* Pick a window of content around the first matched term, snapped to
     word boundaries. */
  function makeSnippet(entry, terms) {
    var text = entry.page.content || entry.page.description;
    var textLC = text.toLowerCase();
    var at = -1;
    for (var i = 0; i < terms.length && at === -1; i += 1) {
      at = textLC.indexOf(terms[i]);
    }
    if (at === -1) return { text: text.slice(0, SNIPPET_RADIUS * 2), leading: false, trailing: text.length > SNIPPET_RADIUS * 2 };

    var start = Math.max(0, at - SNIPPET_RADIUS);
    var end = Math.min(text.length, at + SNIPPET_RADIUS);
    if (start > 0) {
      var firstSpace = text.indexOf(" ", start);
      if (firstSpace !== -1 && firstSpace < at) start = firstSpace + 1;
    }
    if (end < text.length) {
      var lastSpace = text.lastIndexOf(" ", end);
      if (lastSpace > at) end = lastSpace;
    }
    return { text: text.slice(start, end), leading: start > 0, trailing: end < text.length };
  }

  /* Append `text` to `parent` with each term wrapped in <mark>, building
     DOM nodes so page content is never parsed as HTML. */
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

  function render(query) {
    resultsEl.textContent = "";
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) {
      metaEl.textContent = "";
      return;
    }

    var matches = index
      .map(function (entry) { return { entry: entry, score: scoreEntry(entry, terms) }; })
      .filter(function (m) { return m.score > 0; })
      .sort(function (a, b) { return b.score - a.score; });

    if (matches.length === 0) {
      metaEl.textContent = "Nothing pressed under “" + query + "” — try another word?";
      return;
    }
    metaEl.textContent = matches.length + (matches.length === 1 ? " leaf found" : " leaves found");

    matches.forEach(function (m) {
      var page = m.entry.page;
      var li = document.createElement("li");
      li.className = "search-result";

      var link = document.createElement("a");
      link.href = page.url;

      if (page.section) {
        var section = document.createElement("span");
        section.className = "result-section";
        section.textContent = page.section;
        link.appendChild(section);
      }
      var title = document.createElement("span");
      title.className = "result-title";
      appendHighlighted(title, page.title, terms);
      link.appendChild(title);
      li.appendChild(link);

      var snippet = makeSnippet(m.entry, terms);
      if (snippet.text) {
        var p = document.createElement("p");
        p.className = "result-snippet";
        if (snippet.leading) p.appendChild(document.createTextNode("… "));
        appendHighlighted(p, snippet.text, terms);
        if (snippet.trailing) p.appendChild(document.createTextNode(" …"));
        li.appendChild(p);
      }
      resultsEl.appendChild(li);
    });
  }

  var debounceTimer = null;
  function onInput() {
    var query = input.value.trim();
    var params = new URLSearchParams(window.location.search);
    if (query) params.set("q", query); else params.delete("q");
    var qs = params.toString();
    window.history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      loadIndex().then(
        function () { render(query); },
        function () { metaEl.textContent = "The search index wouldn't open — please reload and try again."; }
      );
    }, 120);
  }

  input.addEventListener("input", onInput);

  var initial = new URLSearchParams(window.location.search).get("q");
  if (initial) {
    input.value = initial;
    onInput();
  } else {
    loadIndex(); // warm the index while the visitor types
  }
})();
