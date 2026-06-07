/** Monta URL otimizada do CDN do Pexels. */
export function pexelsUrl(photoId: number, width: number): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}
