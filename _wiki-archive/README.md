# Wylde Flowers — Wiki Archive

A complete offline copy of the [Wylde Flowers Fandom wiki](https://wylde-flowers.fandom.com), converted to Markdown.

**Archived:** September 14, 2026
**Articles:** 1305
**Images:** 1598 (63 MB)
**Categories:** 76

## What's in here

| Folder | Contents |
|---|---|
| `INDEX.md` | Start here — every category and an A–Z list of all pages |
| `pages/` | One `.md` file per wiki article, tables and infoboxes preserved |
| `categories/` | One `.md` per category, listing its member pages |
| `images/` | Every image file on the wiki, at original resolution |
| `data/` | Raw JSON metadata (page list, categories, image source URLs) |

## How it's structured

Pages are kept **flat** in `pages/` so that internal links between articles are simple relative
links (`[Potato](Potato.md)`) that work in any Markdown editor — Obsidian, VS Code, GitHub, or
anything that reads a folder of `.md` files. Grouping is handled by `categories/` and `INDEX.md`
instead of nested folders, so nothing breaks.

Images are referenced as `../images/Filename.png` from inside `pages/`, so previews render
correctly wherever you open the files.

Each page starts with its title, its wiki categories, and a link back to the live source article.

## Notable content

- **Farming** — crop tables with seed prices, seasons, growth times, sell prices and profitability
- **Characters** — 33 character pages plus separate dialogue, schedule and event pages
- **Recipes / Food** — ~196 cooking pages with ingredients and effects
- **Magic** — spells, incantations, rituals, coven material
- **Quests** — 138 quest walkthroughs
- **Fish, Forage, Produce, Seeds** — item pages with sources and values
- **Outfits & Hair Styles** — ~200 cosmetic pages with in-game images

## Attribution and reuse

Content is from the Wylde Flowers Fandom wiki, a community wiki licensed under
[CC BY-SA 3.0](https://www.fandom.com/licensing). It is republished here under that same
license, with credit to the wiki — see [`LICENSE.md`](LICENSE.md). If you reuse any of it,
credit the wiki and keep the same license. Game assets and screenshots remain the property
of Studio Drydock, the game's developer; this archive is text-only and contains none.

Some pages on the wiki are marked "Needs info" by its editors and are incomplete at the source —
that's a gap in the wiki, not in this copy.

### Known gaps (from the wiki itself)

31 internal links point to articles that have never been written on the wiki — red links such as
`Coin`, `Cream Cheese`, `Banana Cake` and `Samosas`. They're preserved as links so you can see
where the wiki references something it doesn't document. Redirect pages are kept and resolved to
their targets.
