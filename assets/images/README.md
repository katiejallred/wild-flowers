# 📷 Screenshots & Images

Game screenshots live here, organized by guide section:

```
assets/images/
  story/        e.g. hazel-farewell.jpg
  farming/      e.g. greenhouse-interior.jpg
  witchcraft/   e.g. cauldron-first-brew.jpg
  characters/   e.g. coven-unmasked.jpg
  island/       e.g. summer-festival.jpg
  wiki/         item art from the wiki archive — see below
```

## The wiki art collection (`wiki/`)

`wiki/` holds item icons, portraits, and artwork from the Wylde Flowers wiki
archive (`_wiki-archive/`), organized by category with kebab-case filenames:

```
assets/images/wiki/
  animals/     barn & coop art, buy screens
  characters/  resident portraits (…-pt.png are transparent busts)
  clothing/    outfit mannequin icons (.png) + in-game shots (…-in-game.jpg)
  crafting/    ingredients, cloth, dyes, minerals
  crops/       crops, seeds, produce
  fish/        the fishing compendium paintings
  food/        cooked dish icons
  forage/      wild finds
  hair/        hairstyle busts (…-all.png shows every color variant)
  island/      scenery shots
  magic/       potions, essences, spells, incantations, wands
  quests/      side-quest artwork
  stations/    crafting stations & tools
  ui/          in-game interface icons
```

The collection now covers the archive's **parts 1–3 — the full A–Z**; all
three uploads are filed into the same folders. Every file is indexed in
`_data/wiki_images.yml` (item title → filename per category), so pages can
look art up by name.

To embed an icon grid, use the `specimen-grid` classes from `journal.css`
(`parchment` for item icons, `portraits` for round-framed faces, `tall`
for outfit mannequins):

```html
<div class="specimen-grid parchment">
  <figure>
    <img src="{{ '/assets/images/wiki/fish/carp.png' | relative_url }}"
         alt="Carp, as painted in the fishing compendium" loading="lazy">
    <figcaption>Carp</figcaption>
  </figure>
</div>
```

## How to add a screenshot

For captures from your own game, use the shot list and inbox in
[`_screenshots/`](../../_screenshots/README.md), which resizes and files them for you.
The manual steps below still work for one-off images.

1. **Capture on Switch** (Capture button), then share it to your phone
   (Album → Share → Smart Device) or upload from Steam's screenshot library.
2. **Upload here**: on GitHub, open this folder and use *Add file → Upload files*
   (drag & drop works). Use short kebab-case names: `hazel-farewell.jpg`.
3. **Keep them lean**: `.jpg` at ~1280px wide is plenty for the journal layout.

## How to embed one in a page

Paste this into any guide page (it renders as a photograph taped into the journal,
washi tape included):

```html
<figure class="snapshot">
  <img src="{{ '/assets/images/story/hazel-farewell.jpg' | relative_url }}"
       alt="Tara says goodbye to Hazel at the farmhouse">
  <figcaption>pressed memory: the last morning of spring 🌙</figcaption>
</figure>
```

Two photos side by side:

```html
<div class="snapshot-row">
  <figure class="snapshot">…</figure>
  <figure class="snapshot">…</figure>
</div>
```

Always write a real `alt` description, and keep captions in the journal's
handwritten voice.

## A note on rights

Screenshots of Wylde Flowers are © Studio Drydock. Prefer your own captures or
assets from the official press kit (wyldeflowersgame.com), keep them in context
with commentary (as a fan guide does), and keep the site's attribution footer
intact.

## Current image credits

The screenshots currently in these folders come from Studio Drydock's official
Wylde Flowers press kit (linked from wyldeflowersgame.com/press.html), resized
to 1280px JPEGs for the web. © Studio Drydock Pty Ltd.

## Social-share images

`og-image-alt.jpg` (default `og:image` / Twitter card), `og-image.jpg` (identical
fallback), `twitter-card.jpg` (2:1), and `social-square.jpg` (1:1) match the
homepage cover: the AI-generated "supper & spellwork" witch's-kitchen fan art
(`fan-art-witchs-kitchen.jpg`, made with Ideogram) behind the Guide's title
plate, typeset in the site's Lora / Nunito / Caveat.

## Per-page share cards

The ten `card-*.jpg` files are 1200×630 share cards wired to individual guide
pages via their `image:` front matter. Each one matches the social-share set:
AI-generated storybook gouache art (made with Ideogram) behind the Guide's
title plate, typeset in Lora / Nunito / Caveat. `card-getting-started.jpg`
and `card-witchcraft.jpg` reuse the farm-at-golden-hour and night-flight
fan-art pieces; the other eight have art of their own (an open journal, the
vegetable garden, the fishing pier, the festival square, a gift basket on a
doorstep, a cliff-top picnic, the baking counter, and a coin-counting desk).

## In-page fan art

Six more storybook illustrations made with Ideogram sit inside guide pages,
each captioned as fan art: `fan-art-first-week.jpg` (Your First Week),
`fan-art-four-seasons.jpg` (Energy, Time & Seasons), `fan-art-orchard-hives.jpg`
(Beekeeping & Orchards), `fan-art-mine-entrance.jpg` (The Mine),
`fan-art-village-square.jpg` (Shops & Services), and `fan-art-weather-witch.jpg`
(Weather Magic). All are 1024×682 JPEGs.

The Story pages carry six more in the same style: `fan-art-ferry-arrival.jpg`
(Overview), `fan-art-overgrown-farmhouse.jpg` (Chapter 1),
`fan-art-masked-coven.jpg` (Chapter 2), `fan-art-cellar-cauldron.jpg`
(Chapter 3), `fan-art-summer-festival.jpg` (Chapters 4–6), and
`fan-art-winter-wraiths.jpg` (Chapters 7–9). None of them shows an unmasking
or a story reveal, so a glance at the picture spoils nothing.

The Characters section has three more: `fan-art-village-dusk.jpg`
(Character Directory), `fan-art-neighbors-fence.jpg` (Friendship), and
`fan-art-gift-basket.jpg` (Gift Preferences). None depicts a named resident.

## Reference-page fan art

Added one per day, all made with Ideogram:

- `fan-art-cotton-farm.jpg` (Recommended Farm Plans)
- `fan-art-market-counter.jpg` (Money-Making Guide)
