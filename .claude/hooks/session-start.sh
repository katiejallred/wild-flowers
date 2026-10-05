#!/bin/bash
# Installs the Jekyll gems so web sessions can preview and build the site
# (`bundle exec jekyll build` / `serve`). Runs only in Claude Code on the web.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Gem executables (jekyll) live in Ruby's gem bindir, which isn't on PATH
# in this container, so `bundle exec jekyll` can't find them otherwise.
# The container also has no UTF-8 locale, and without one Jekyll's Sass
# converter rejects the stylesheets' non-ASCII characters (em dashes).
GEM_BINDIR="$(ruby -e 'print Gem.bindir')"
export PATH="$GEM_BINDIR:$PATH"
export LANG=C.UTF-8 LC_ALL=C.UTF-8
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export PATH=\"$GEM_BINDIR:\$PATH\"" >> "$CLAUDE_ENV_FILE"
  echo "export LANG=C.UTF-8 LC_ALL=C.UTF-8" >> "$CLAUDE_ENV_FILE"
fi

# `bundle install` is idempotent: a cached container skips straight through.
# Retry once in case the first network fetch is cut off.
bundle install --quiet || bundle install --quiet
