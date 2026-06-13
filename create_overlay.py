from PIL import Image, ImageDraw, ImageFont
import os
import sys

def draw_instagram_icon(draw, x, y, size):
    box = [x, y, x+size, y+size]
    draw.rounded_rectangle(box, radius=size//4, outline="white", width=max(1, size//10))
    cx, cy = x + size//2, y + size//2
    r = size // 3
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline="white", width=max(1, size//10))
    dot_r = size // 10
    dx, dy = x + int(size*0.75), y + int(size*0.25)
    draw.ellipse([dx-dot_r, dy-dot_r, dx+dot_r, dy+dot_r], fill="white")

def process_image(img_path, out_path, title_text, sub_text, price_text, footer_text):
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
        
    img = Image.open(img_path).convert("RGBA")
    
    # Crop to square for Instagram
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) / 2
    top = (h - min_dim) / 2
    right = (w + min_dim) / 2
    bottom = (h + min_dim) / 2
    img = img.crop((left, top, right, bottom))
    w, h = img.size
    
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Removed the light blue stripe (poly1)
    
    # Main dark blue box only
    poly2 = [(0, int(h*0.64)), (int(w*0.7), int(h*0.64)), (int(w*0.9), h), (0, h)]
    draw.polygon(poly2, fill=(26, 53, 74, 250))
    
    try:
        font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(h*0.08))
        font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", int(h*0.045))
        font_price = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(h*0.045))
        font_footer = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", int(h*0.035))
    except:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_price = ImageFont.load_default()
        font_footer = ImageFont.load_default()
        
    text_x = int(w * 0.05)
    start_y = int(h * 0.66)
    
    draw.text((text_x, start_y), title_text, font=font_title, fill="white")
    
    sub_y = start_y + int(h * 0.09)
    draw.text((text_x, sub_y), sub_text, font=font_sub, fill="white")
    
    price_y = sub_y + int(h * 0.07)
    draw.text((text_x, price_y), price_text, font=font_price, fill="white")
    
    footer_y = price_y + int(h * 0.08)
    draw.text((text_x, footer_y), footer_text, font=font_footer, fill="white")
    
    text_bbox = draw.textbbox((text_x, footer_y), footer_text, font=font_footer)
    icon_x = text_bbox[2] + int(w * 0.01)
    icon_size = int(h * 0.035)
    draw_instagram_icon(draw, icon_x, footer_y + int(h * 0.005), icon_size)
    
    out = Image.alpha_composite(img, overlay)
    out.convert("RGB").save(out_path)
    print(f"Saved {out_path}")

tasks = [
    ("public/images/event_volleyball.png", "Marketing Bilder/Volleyball Insta.png", "VOLLEYBALL EVENT", "Join the ultimate beach fun!", "Free Entry / 0\u20ac", "Register now with the link in the BIO "),
    ("public/images/event_waterpolo.png", "Marketing Bilder/Wasserball Insta.png", "WATER POLO", "Competitive fun in the water!", "Free Entry / 0\u20ac", "Register now with the link in the BIO "),
    ("public/images/sup.png", "Marketing Bilder/SUP Insta.png", "SUP RENTAL", "Explore the sea at your own pace!", "\u20ac8 / 60 Min.", "Book now with the link in the BIO "),
    ("public/images/event_captureflag.png", "Marketing Bilder/Capture the Flag Insta.png", "CAPTURE THE FLAG", "Team up and conquer the park!", "Free Entry / 0\u20ac", "Register now with the link in the BIO "),
]

for img_p, out_p, t1, t2, t3, t4 in tasks:
    process_image(img_p, out_p, t1, t2, t3, t4)

