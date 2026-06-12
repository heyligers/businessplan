from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

for path in ['c:/Users/J/Python/Business_Plan/public/images/logo_wide.jpg', 'c:/Users/J/Python/Business_Plan/public/images/logo_round.jpg']:
    try:
        im = Image.open(path)
        trimmed_im = trim(im)
        trimmed_im.save(path)
        print(f"Trimmed {path}")
    except Exception as e:
        print(f"Error trimming {path}: {e}")
