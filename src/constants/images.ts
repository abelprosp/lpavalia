import { pexelsUrl } from '../lib/pexels'

/** Gerado por scripts/fetch-pexels-images.mjs */
export const images = {
  howItWorks: {
    background: pexelsUrl(323705, 1600),
    steps: {
      location: pexelsUrl(259588, 400),
      propertyInfo: pexelsUrl(1571460, 400),
      photos: pexelsUrl(534220, 400),
    },
  },
  articles: {
    iaAvaliacao: pexelsUrl(3775087, 1200),
    planoDirecttor: pexelsUrl(1643383, 1200),
    iaCorretor: pexelsUrl(768833, 1200),
    fotosValorizam: pexelsUrl(259950, 700),
  },
} as const
