import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonicalPath?: string
  ogImage?: string
  ogType?: string
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSEO({
  title,
  description,
  keywords = [],
  canonicalPath = '/',
  ogImage,
  ogType = 'website',
}: SEOProps) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    if (keywords.length) setMeta('keywords', keywords.join(', '))

    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', ogType, true)
    if (ogImage) setMeta('og:image', ogImage, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    if (ogImage) setMeta('twitter:image', ogImage)

    const origin = window.location.origin
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${origin}${canonicalPath}`)

    return () => {
      document.title = 'Avalia Imobe — Avaliação de imóveis com IA'
    }
  }, [title, description, keywords, canonicalPath, ogImage, ogType])
}
