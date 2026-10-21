# Queued reference-page art

Six Ideogram illustrations waiting to go onto the Reference pages, one per
day. Jekyll skips folders that start with an underscore, so nothing here is
on the live site until it is published.

To publish the next one, run from the repo root:

    python3 _queue/reference-art/publish_next.py

It moves the next image into `assets/images/`, inserts its figure into its
page above the heading listed in `queue.json`, adds it to the credits in
`assets/images/README.md`, and removes it from the queue. Then run
`python3 _tools/stamp-last-modified.py`, build, commit, and merge. When the
queue is empty the script says so and changes nothing.
