# Screenshots from Katie's own game

Replacing the wiki's art with real captures from Katie's playthrough is the
most useful thing for the site's originality. `SHOT-LIST.md` lists what's
wanted, page by page.

## Sending screenshots

1. **Capture on Switch** with the Capture button (the square below the
   left stick).
2. **Get them to your phone**: Album → pick the shot → Sharing and Editing →
   Send to Smartphone, then scan the QR code and save the images.
3. **Upload**, by either route:
   - **GitHub**: open `_screenshots/inbox/` on github.com, choose *Add file →
     Upload files*, and drop them in. Name each after its ID in the shot
     list (`COOK-1.jpg`) if you can. If you can't, any name is fine.
   - **Chat**: attach them to a message to Claude and say which IDs they are.
4. Ask Claude to "process the screenshots".

## What happens next

`python3 _tools/process-screenshots.py` resizes each file to 1280px, strips
its metadata, files it under `assets/images/`, and ticks it off in
`SHOT-LIST.md`. Claude then looks at each image, writes a caption from what
it shows, and puts it on its page in place of (or beside) wiki art, the same
way the other screenshots on the site are placed.

Keep spoilers out of frame on non-story pages: no unmasked coven members,
and no Year 2 or Ravenwood Hollow characters outside the pages marked for
them.
