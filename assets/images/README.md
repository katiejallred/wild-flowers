# 📷 Screenshots & Images

Game screenshots live here, organized by guide section:

```
assets/images/
  story/        e.g. hazel-farewell.jpg
  farming/      e.g. greenhouse-interior.jpg
  witchcraft/   e.g. cauldron-first-brew.jpg
  characters/   e.g. coven-unmasked.jpg
  island/       e.g. summer-festival.jpg
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
