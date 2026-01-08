/**
 * Preloads an array of image URLs.
 * Gracefully handles missing images without throwing errors.
 * @param imageUrls - An array of image paths to preload.
 * @param silent - If true, suppresses warnings for missing images (default: false in dev, true in prod)
 * @returns A promise that resolves when all images have been processed (loaded or failed).
 */
export const preloadImages = (imageUrls: string[], silent: boolean = !import.meta.env.DEV): Promise<void[]> => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          // Silently resolve on error - image is optional
          // Only log in development mode if not silent
          if (import.meta.env.DEV && !silent) {
            console.warn(`Image preload failed (non-critical): ${url}`);
          }
          resolve();
        };
        img.src = url;
      });
    })
  );
};
