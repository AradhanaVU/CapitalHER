import json
import sys
from PIL import Image, ImageOps

try:
    from pillow_heif import register_heif_opener

    register_heif_opener()
except ImportError:
    pass

items = json.loads(sys.argv[1])
for item in items:
    src, dest = item["src"], item["dest"]
    img = ImageOps.exif_transpose(Image.open(src))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGBA")
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        img = bg
    elif img.mode != "RGB":
        img = img.convert("RGB")
    max_side = 1200
    w, h = img.size
    if max(w, h) > max_side:
        scale = max_side / max(w, h)
        img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    img.save(dest, "JPEG", quality=88, optimize=True)
    print(f"OK {dest} ({item.get('name', '')})")
