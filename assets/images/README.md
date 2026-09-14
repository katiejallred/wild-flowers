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

So far the collection covers the archive's **parts 1–2 (items A–R)**; later
parts slot into the same folders. Every file is indexed in
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

`og-image-alt.jpg` (default `og:image` / Twitter card), `twitter-card.jpg` (2:1),
and `social-square.jpg` (1:1) are cropped from the press kit's **Alt Key Art** —
the illustrated broomstick-over-the-farm artwork. `og-image.jpg` is the earlier
16:9 key art, kept as a fallback. All © Studio Drydock Pty Ltd.

## Per-page share cards

`card-crops.jpg` is a purpose-built 1200×630 share card for the Crop Guide:
a press-kit harvest scene under an elderberry scrim, titled in the site's own
Cormorant Garamond / Caveat fonts. Wired to that page via its `image:` front
matter. Background © Studio Drydock Pty Ltd.

The final three section cards complete the set: `card-getting-started.jpg`
(island arrival), `card-crafting.jpg` (the loom & sewing machine), and
`card-reference.jpg` (the mine). Every one of the eight guide sections now has
a dedicated share card; all other pages use the alt-art default. Backgrounds ©
Studio Drydock Pty Ltd.
