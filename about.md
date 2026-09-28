---
title: "🗺️ About the Guide"
description: "What The Fairhaven Field Guide is, who it's for, and a complete directory of every page pressed between its covers."
last_modified_at: 2026-09-28
---
# 🗺️ About the Guide

**The Fairhaven Field Guide** is a fan-made walkthrough and almanac for
***Wylde Flowers***, the cozy life-and-farming sim by Studio Drydock, in which
you tend the family farm by day and practice witchcraft with a masked coven by
night. The Guide is written in the style of a pressed-flower field journal —
every section a specimen, every page a leaf — and covers the whole of Fairhaven
Island: the story chapters, farming and fishing, the craft, the residents, and
all the reference tables a completionist could want.

It is an unofficial labor of love, not affiliated with or endorsed by Studio
Drydock. Game data is cross-checked against the
[Wylde Flowers Wiki](https://wylde-flowers.fandom.com)
([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)); any
portions adapted from it are shared under the same license.

---

## A note from the author {#author}

Hi, I'm **Katie Allred**, and I made this guide.

You probably know the moment. It's the middle of a season, your Switch is in
one hand, and you need to know what Kai likes *before* the day runs out. So you
search, and you land on a wall of text, two story spoilers, and a table that
won't fit on your phone. By the time you find the answer, Tara has gone to bed.

That's the problem this guide exists to solve. Every page is tested against
one sentence: **the fastest way to get an answer mid-game, without getting
spoiled.** Tables and charts come first. Story pages are clearly marked.
Everything else stays spoiler-light.

I've been building things for online communities since I was nine, when I
started a Harry Potter fan forum and made real friends there — on purpose and
by accident. Today I write and teach about communication for a living, and the
lesson has never changed: when information is clear and easy to find, everyone
wins. This guide is me putting that lesson to work for a game I love.

### How I play

I started playing *Wylde Flowers* last spring, and I'm a cozy player at
heart. Once I find a season I love, I stay in it. Fairhaven lets you do that,
because the seasons only change when the coven casts the ritual, and I take
full advantage. There's no rush on this island, and this guide won't rush you
either.

If you play the same way, start with the
[Orchard & Apiary plan]({{ '/guide/reference/farm-plans.html' | relative_url }}#orchard-apiary).
It keeps earning in the background while you spend your days on the story and
the people.

### How the Guide is kept

- **Checked, then re-checked.** Numbers are cross-checked against the
  community wiki, and pages are corrected whenever players report a difference.
- **Written, not copied.** The tables share the community's data, but the
  explanations, strategy notes, and [recommended farm plans]({{ '/guide/reference/farm-plans.html' | relative_url }})
  are the Guide's own.
- **Always growing.** Every page shows the date it was last updated. Found
  something wrong, or a secret we missed?
  [Send a note through the contact page]({{ '/contact.html' | relative_url }}) —
  corrections from players are the best thing that happens to this journal.

---

## How the Guide is arranged

The journal is pressed into eight sections. **Getting Started** is
spoiler-light and safe for brand-new players; the **Story** section walks
chapter by chapter and is marked accordingly; everything else you can dip into
whenever the need sprouts.

{% for section in site.data.nav %}
### [{{ section.title }}]({{ section.pages.first.url | relative_url }})

{% for page in section.pages -%}
- [{{ page.title }}]({{ page.url | relative_url }})
{% endfor %}
{% endfor %}

---

## A few pages that don't fit in a section

- [The cover of the journal]({{ '/' | relative_url }}) — the front page, with every specimen laid out.
- [Search the Guide]({{ '/search.html' | relative_url }}) — full-text search across every page.
- [Contact]({{ '/contact.html' | relative_url }}) — corrections, tips, and hellos.
- [Privacy Policy]({{ '/privacy.html' | relative_url }}) and [Terms of Service]({{ '/terms.html' | relative_url }}) — the small print, pressed flat.
- [sitemap.xml]({{ '/sitemap.xml' | relative_url }}) — a machine-readable index of every page, for search engines and other diligent bees.

---

## Colophon

The Guide is a static site built with [Jekyll](https://jekyllrb.com) and hosted
on GitHub Pages at [fairhavenfieldguide.com](https://fairhavenfieldguide.com).
It collects no personal information itself — see the
[Privacy Policy]({{ '/privacy.html' | relative_url }}) for the full story.

*Happy farming, and clear skies for your night flights.* 🌙
