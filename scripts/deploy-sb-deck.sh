#!/usr/bin/env bash
# Copies the Santa Barbara master-deck into public/sb/ for static export.
# Re-run this any time the source deck changes (e.g. T1's video v2, T45's fireside fixes)
# then commit + push to main to redeploy.
set -euo pipefail

SRC="/Users/travisj/AI_HOME/Claude_Ambassador/events-ops/share-sb-2026-07/master-deck"
DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/sb"

if [ ! -d "$SRC" ]; then
  echo "Source deck not found at $SRC" >&2
  exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"

cp -R "$SRC/css" "$DEST/css"
cp -R "$SRC/js" "$DEST/js"
cp -R "$SRC/sections" "$DEST/sections"
# Drop presenter-only speaker notes — sections/ ships as HTML staging previews only.
find "$DEST/sections" -name '*.md' -delete
cp "$SRC/index.html" "$DEST/index.html"

# Assets, but only the video files actually referenced by index.html —
# the source dir accumulates in-progress video takes (v1/v2/v3/etc) that
# would otherwise bloat the deploy with unused multi-hundred-MB files.
mkdir -p "$DEST/assets"
cp -R "$SRC/assets/fonts" "$DEST/assets/fonts"
cp -R "$SRC/assets/img" "$DEST/assets/img"
mkdir -p "$DEST/assets/video"
grep -oE 'assets/video/[A-Za-z0-9_.-]+\.mp4' "$SRC/index.html" | sort -u | while read -r rel; do
  fname="$(basename "$rel")"
  cp "$SRC/assets/video/$fname" "$DEST/assets/video/$fname"
  echo "Included referenced video: $fname"
done

# Clean URLs on Vercel need an explicit base so the deck's relative
# ./assets, ./css, ./js paths resolve under /sb/ instead of site root.
# Same pattern as public/claude-for-leaders/index.html.
if ! grep -q '<base href="/sb/">' "$DEST/index.html"; then
  perl -0pi -e 's{(<meta name="viewport"[^>]*>\n)}{$1<base href="/sb/">\n}' "$DEST/index.html"
fi

echo "Copied deck to $DEST"
grep -o '<base[^>]*>' "$DEST/index.html" || echo "WARNING: base tag not inserted"
