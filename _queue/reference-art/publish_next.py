#!/usr/bin/env python3
"""Publish the next queued reference-page illustration (see README.md)."""
import json
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
QUEUE = HERE / "queue.json"

queue = json.loads(QUEUE.read_text())
if not queue:
    print("queue empty")
    sys.exit(0)

item = queue[0]
page = ROOT / item["page"]
text = page.read_text()
if item["before"] not in text:
    sys.exit(f"heading not found in {item['page']}: {item['before']}")

figure = (
    '<figure class="snapshot">\n'
    f"  <img src=\"{{{{ '/assets/images/{item['image']}' | relative_url }}}}\" "
    f"alt=\"{item['alt']}\" width=\"1024\" height=\"682\" loading=\"lazy\">\n"
    f"  <figcaption>{item['caption']}</figcaption>\n"
    "</figure>\n\n"
)
# Insert above the heading, or above the `---` rule that directly precedes it.
i = text.index(item["before"])
j = text.rfind("---\n", 0, i)
pos = j if j != -1 and text[j:i].strip() == "---" else i
page.write_text(text[:pos] + figure + text[pos:])

shutil.move(str(HERE / item["image"]), str(ROOT / "assets" / "images" / item["image"]))

credits = ROOT / "assets" / "images" / "README.md"
heading = "\n## Reference-page fan art\n"
body = credits.read_text()
if heading not in body:
    body = body.rstrip("\n") + "\n" + heading + "\nAdded one per day, all made with Ideogram:\n\n"
credits.write_text(body + f"- `{item['image']}` ({item['readme_label']})\n")

QUEUE.write_text(json.dumps(queue[1:], indent=2, ensure_ascii=False) + "\n")
print(f"published {item['image']} on {item['page']}; {len(queue) - 1} left")
