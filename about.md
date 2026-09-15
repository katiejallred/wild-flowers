---
title: "🗺️ About the Guide"
description: "What The Fairhaven Field Guide is, who it's for, and a complete directory of every page pressed between its covers."
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
Drydock. Some game data is drawn from the
[Wylde Flowers Wiki](https://wylde-flowers.fandom.com) under
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), and those
portions of the Guide carry the same license.

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
- [Privacy Policy]({{ '/privacy.html' | relative_url }}) and [Terms of Service]({{ '/terms.html' | relative_url }}) — the small print, pressed flat.
- [sitemap.xml]({{ '/sitemap.xml' | relative_url }}) — a machine-readable index of every page, for search engines and other diligent bees.

---

## Colophon

The Guide is a static site built with [Jekyll](https://jekyllrb.com) and hosted
on GitHub Pages at [fairhavenfieldguide.com](https://fairhavenfieldguide.com).
It collects no personal information itself — see the
[Privacy Policy]({{ '/privacy.html' | relative_url }}) for the full story.

*Happy farming, and clear skies for your night flights.* 🌙
