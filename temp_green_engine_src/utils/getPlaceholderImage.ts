/**
 * Get family-specific color for microgreen placeholders
 */
export const getFamilyColor = (family: string): string => {
  const colors: Record<string, string> = {
    'Brassicaceae': '#059669', // green-600
    'Amaranthaceae': '#dc2626', // red-600
    'Apiaceae': '#f59e0b', // amber-500
    'Amaryllidaceae': '#a855f7', // purple-500
    'Asteraceae': '#3b82f6', // blue-500
    'Cucurbitaceae': '#facc15', // yellow-400
  };
  return colors[family] || '#6b7280'; // gray-500 default
};

/**
 * Generate SVG placeholder image for a microgreen
 * @param family - Plant family name
 * @param name - Microgreen name
 * @param width - Image width (default: 400)
 * @param height - Image height (default: 300)
 * @returns Data URL for the SVG image
 */
export const getPlaceholderSvg = (
  family: string,
  name: string,
  width: number = 400,
  height: number = 300
): string => {
  const color = getFamilyColor(family);
  const initial = name.charAt(0).toUpperCase();
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
      <text x="50%" y="50%" font-size="${Math.min(width, height) * 0.3}" fill="white" text-anchor="middle" dy=".3em" font-family="sans-serif" font-weight="bold">
        ${initial}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
};

/**
 * Get placeholder image URL for a microgreen
 * Falls back to SVG placeholder if imageUrl is not provided
 */
export const getPlaceholderImage = (
  imageUrl: string | undefined,
  family: string,
  name: string
): string => {
  if (imageUrl) {
    return imageUrl;
  }
  return getPlaceholderSvg(family, name);
};

