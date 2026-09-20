# 🌸 The Fairhaven Field Guide

A fan-made wiki and walkthrough for **Wylde Flowers** (Nintendo Switch), styled as a
pressed-flower botanical journal. 🌿

> Join Tara Wylde as she moves to Fairhaven Island to help her grandmother Hazel on
> the family farm… and discovers the family secret. 🧙‍♀️🐈‍⬛

## 🗺️ How this repo works

- **The site** is built with [Jekyll](https://jekyllrb.com/), which GitHub Pages runs
  automatically — no build step, no toolchain. Enable it under
  **Settings → Pages → Deploy from a branch**.
- **Local preview:** with Ruby installed, run `bundle install` once, then
  `bundle exec jekyll serve` and open <http://localhost:4000>. The
  [`Gemfile`](Gemfile) uses the `github-pages` gem, so the preview matches
  exactly what GitHub Pages will publish.
- **[`index.html`](index.html)** — the journal cover & table of contents.
- **[`guide/`](guide/)** — all content pages, written in plain Markdown, organized into
  eight sections: getting started, story, farming, witchcraft, crafting, characters,
  island life, and reference.
- **[`_wiki-archive/`](_wiki-archive/)** — an offline Markdown copy of the
  [Wylde Flowers Wiki](https://wylde-flowers.fandom.com), the Guide's primary source.
  The leading underscore keeps Jekyll from building it into the site. Its text is
  CC BY-SA 3.0 — see [`_wiki-archive/LICENSE.md`](_wiki-archive/LICENSE.md) before
  reusing anything from it.
- **[`_layouts/journal.html`](_layouts/journal.html)** and
  **[`assets/css/journal.css`](assets/css/journal.css)** — the botanical journal design:
  aged paper, specimen sheets, washi tape, and pressed-flower illustrations.

## ✨ House style

- **What the Guide is for** (test every page and edit against this sentence):
  *the fastest way to get an answer mid-game, without getting spoiled.*
  - **Fastest** — a player with a Switch in one hand should reach the answer in
    seconds: lead with tables and charts, keep preamble short, and give long
    lookup pages an "In a hurry?" jump box to their tables.
  - **An answer** — pages exist to settle questions ("what does Kai like?",
    "what grows in winter?"), not to narrate. Prose is seasoning around the fact.
  - **Without getting spoiled** — story pages are clearly marked; everything
    else stays spoiler-light.
- **Curation over collection:** the Guide is the walls, `_wiki-archive/` is the
  collection in the drawers. A page earns its place by serving the sentence
  above — never bulk-import archive material just because it exists.
- **Voice:** warm, whimsical, a little witchy — like marginalia in a field journal.
- **Polish the core before adding sections:** the pages players consult
  mid-game every day (crops, gifts, fishing, recipes) deserve improvement
  effort before any new section does.

*This is an unofficial fan guide. Wylde Flowers is created by Studio Drydock.*
