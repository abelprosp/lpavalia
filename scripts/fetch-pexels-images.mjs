/**
 * Busca imagens no Pexels e gera src/constants/images.ts
 * Uso: PEXELS_API_KEY=sua_chave npm run images:fetch
 */

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '../src/constants/images.ts')

const IMAGE_SLOTS = [
  { path: 'howItWorks.background', query: 'modern house exterior', width: 1600, fallbackId: 323705 },
  { path: 'howItWorks.steps.location', query: 'city aerial view', width: 400, fallbackId: 259588 },
  { path: 'howItWorks.steps.propertyInfo', query: 'apartment interior living room', width: 400, fallbackId: 1571460 },
  { path: 'howItWorks.steps.photos', query: 'real estate house photography', width: 400, fallbackId: 534220 },
  { path: 'articles.iaAvaliacao', query: 'real estate technology laptop', width: 1200, fallbackId: 3775087 },
  { path: 'articles.planoDirecttor', query: 'urban city buildings planning', width: 1200, fallbackId: 1643383 },
  { path: 'articles.iaCorretor', query: 'real estate agent business', width: 1200, fallbackId: 768833 },
  { path: 'articles.fotosValorizam', query: 'luxury home interior', width: 700, fallbackId: 259950 },
]

async function searchPhoto(query, apiKey) {
  const url = new URL('https://api.pexels.com/v1/search')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', '1')
  url.searchParams.set('orientation', 'landscape')

  const res = await fetch(url, {
    headers: { Authorization: apiKey },
  })

  if (!res.ok) {
    throw new Error(`Pexels API ${res.status}: ${await res.text()}`)
  }

  const data = await res.json()
  const photo = data.photos?.[0]
  if (!photo) throw new Error(`Nenhuma foto para: ${query}`)
  return photo.id
}

function setNested(obj, path, value) {
  const keys = path.split('.')
  let current = obj
  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] ??= {}
    current = current[keys[i]]
  }
  current[keys.at(-1)] = value
}

function renderFile(resolved) {
  const fmt = (id, width) =>
    `pexelsUrl(${id}, ${width})`

  return `import { pexelsUrl } from '../lib/pexels'

/** Gerado por scripts/fetch-pexels-images.mjs */
export const images = {
  howItWorks: {
    background: ${fmt(resolved.howItWorks.background.id, resolved.howItWorks.background.width)},
    steps: {
      location: ${fmt(resolved.howItWorks.steps.location.id, resolved.howItWorks.steps.location.width)},
      propertyInfo: ${fmt(resolved.howItWorks.steps.propertyInfo.id, resolved.howItWorks.steps.propertyInfo.width)},
      photos: ${fmt(resolved.howItWorks.steps.photos.id, resolved.howItWorks.steps.photos.width)},
    },
  },
  articles: {
    iaAvaliacao: ${fmt(resolved.articles.iaAvaliacao.id, resolved.articles.iaAvaliacao.width)},
    planoDirecttor: ${fmt(resolved.articles.planoDirecttor.id, resolved.articles.planoDirecttor.width)},
    iaCorretor: ${fmt(resolved.articles.iaCorretor.id, resolved.articles.iaCorretor.width)},
    fotosValorizam: ${fmt(resolved.articles.fotosValorizam.id, resolved.articles.fotosValorizam.width)},
  },
} as const
`
}

async function main() {
  const apiKey = process.env.PEXELS_API_KEY
  const resolved = {}

  if (apiKey) {
    console.log('Buscando imagens na API do Pexels…')
    for (const slot of IMAGE_SLOTS) {
      const id = await searchPhoto(slot.query, apiKey)
      setNested(resolved, slot.path, { id, width: slot.width })
      console.log(`  ✓ ${slot.path} → ${id}`)
    }
  } else {
    console.warn('PEXELS_API_KEY não definida — usando IDs de fallback.')
    for (const slot of IMAGE_SLOTS) {
      setNested(resolved, slot.path, { id: slot.fallbackId, width: slot.width })
    }
  }

  writeFileSync(OUT, renderFile(resolved))
  console.log(`\nArquivo gerado: ${OUT}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
