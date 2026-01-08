# Raw Images Directory

Place your raw (unoptimized) images here before running the optimization script.

## Image Requirements

### Hero Background
- **File name:** `hero-background.jpg` or `hero-background.png`
- **Recommended size:** 1920x1080px or larger
- **Format:** JPEG or PNG
- **Will be optimized to:** 1920x1080px WebP + JPEG

### Product Images
- **File names:**
  - `sprout-kit.png` (or .jpg)
  - `garden-system.png` (or .jpg)
  - `pro-system.png` (or .jpg)
  - `commercial-pro.png` (or .jpg)
- **Recommended size:** 800x800px or larger (square)
- **Format:** PNG (transparent background preferred) or JPEG
- **Will be optimized to:** 400x400px WebP + JPEG

### Microgreen Images (Optional)
- **File names:** Use microgreen IDs (e.g., `broccoli.jpg`, `radish.jpg`)
- **Recommended size:** 800x600px or larger
- **Format:** JPEG or PNG
- **Will be optimized to:** 400x300px WebP + JPEG

## How to Use

1. **Add your raw images** to this directory
2. **Run the optimization script:**
   ```bash
   npm run optimize-images
   ```
3. **Optimized images** will be created in `public/images/`
4. **WebP and JPEG** versions will be generated automatically

## Tips

- Use high-quality source images for best results
- Product images work best with transparent or white backgrounds
- Hero images should have good contrast for text readability
- All images will be automatically compressed and optimized

## AI Image Generation

See `AI_IMAGE_PROMPTS.md` in the project root for detailed prompts to generate images using DALL-E, Midjourney, or Stable Diffusion.

