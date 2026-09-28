#!/usr/bin/env python3
"""Stamp each page's `last_modified_at` front matter from git history.

GitHub Pages can't run a last-modified plugin, so the date lives in front
matter, where the layout prints it ("Last updated …") and jekyll-seo-tag and
jekyll-sitemap pick it up for dateModified and <lastmod>.

A page with uncommitted changes gets today's date; any other page gets the
date of the last commit that touched it. Run from the repo root before
committing:  python3 _tools/stamp-last-modified.py
"""
import datetime
import re
import subprocess
from pathlib import Path

SKIP_DIRS = ("_", ".", "vendor", "assets")
SKIP_FILES = {"README.md", "search.json"}


def git(*args):
    return subprocess.run(["git", *args], capture_output=True, text=True, check=True).stdout


def pages():
    for line in git("ls-files", "--cached", "--others", "--exclude-standard").splitlines():
        path = Path(line)
        if path.suffix not in (".md", ".html") or path.name in SKIP_FILES:
            continue
        if path.parts[0].startswith(SKIP_DIRS):
            continue
        yield path


def only_stamp_changed(diff):
    """True when every added/removed line in a diff is a last_modified_at line."""
    edits = [line for line in diff.splitlines()
             if line[:1] in "+-" and not line.startswith(("+++", "---"))]
    return bool(edits) and all("last_modified_at:" in line for line in edits)


def page_date(path, changed):
    if str(path) in changed:
        return datetime.date.today().isoformat()
    # The newest commit that changed the page itself, skipping commits that
    # only stamped its date (otherwise a stamping commit would re-date it).
    for line in git("log", "--format=%H %cs", "--", str(path)).splitlines():
        sha, date = line.split()
        if not only_stamp_changed(git("show", "--format=", sha, "--", str(path))):
            return date
    return datetime.date.today().isoformat()


def main():
    changed = {line[3:] for line in git("status", "--porcelain").splitlines()}
    for path in pages():
        text = path.read_text()
        match = re.match(r"---\n(.*?)\n---\n", text, re.S)
        if not match:
            continue
        # A page whose only pending change is its own stamp keeps its old date.
        if str(path) in changed and only_stamp_changed(git("diff", "HEAD", "--", str(path))):
            changed.discard(str(path))
        date = page_date(path, changed)
        front = match.group(1)
        if re.search(r"^last_modified_at:", front, re.M):
            front = re.sub(r"^last_modified_at:.*$", f"last_modified_at: {date}", front, flags=re.M)
        else:
            front += f"\nlast_modified_at: {date}"
        new = f"---\n{front}\n---\n" + text[match.end():]
        if new != text:
            path.write_text(new)
            print(f"{date}  {path}")


if __name__ == "__main__":
    main()
