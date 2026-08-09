import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const initialKey = useRef(key)
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const isInitialLocation = key === initialKey.current
    const samePage = previousPathname.current === pathname
    previousPathname.current = pathname

    const behavior: ScrollBehavior = samePage && !isInitialLocation ? 'smooth' : 'instant'

    if (!hash) {
      if (!isInitialLocation) window.scrollTo({ top: 0, behavior })
      return
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!target) return

    const scrollToTarget = () => target.scrollIntoView({ behavior, block: 'start' })
    const frame = requestAnimationFrame(scrollToTarget)

    // Imagens ainda carregando deslocam o layout depois do scroll inicial
    const correctAfterLoad = isInitialLocation && document.readyState !== 'complete'
    if (correctAfterLoad) window.addEventListener('load', scrollToTarget, { once: true })

    return () => {
      cancelAnimationFrame(frame)
      if (correctAfterLoad) window.removeEventListener('load', scrollToTarget)
    }
  }, [pathname, hash, key])

  return null
}
