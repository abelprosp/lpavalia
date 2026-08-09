import { Sparkles } from 'lucide-react'
import { SIGN_UP_URL } from '../constants/app'

export function StickyBar() {
  return (
    <div className="sticky-bar" role="complementary" aria-label="Avaliação rápida">
      <div className="sticky-bar__inner">
        <div className="sticky-bar__content">
          <span className="sticky-bar__icon" aria-hidden="true">
            <Sparkles size={18} strokeWidth={2} />
          </span>
          <p className="sticky-bar__text">
            Saiba o valor do imóvel e conecte-se ao{' '}
            <strong>mercado da sua região</strong>
          </p>
        </div>
        <a href={SIGN_UP_URL} className="sticky-bar__btn">
          Começar grátis
        </a>
      </div>
    </div>
  )
}
