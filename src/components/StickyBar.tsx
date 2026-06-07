import { Sparkles } from 'lucide-react'
import { APP_URL } from '../constants/app'

export function StickyBar() {
  return (
    <div className="sticky-bar" role="complementary" aria-label="Avaliação rápida">
      <div className="sticky-bar__inner">
        <div className="sticky-bar__content">
          <span className="sticky-bar__icon" aria-hidden="true">
            <Sparkles size={18} strokeWidth={2} />
          </span>
          <p className="sticky-bar__text">
            Saiba quanto vale seu imóvel com a{' '}
            <strong>Avalia Imobe</strong>
          </p>
        </div>
        <a href={APP_URL} className="sticky-bar__btn">
          Avaliar agora
        </a>
      </div>
    </div>
  )
}
