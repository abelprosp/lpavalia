import { ArrowUpRight } from 'lucide-react'
import { PRICING_URL, SIGN_UP_URL } from '../constants/app'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const plans = [
  {
    name: 'Starter',
    price: '97',
    description: 'Para o corretor autônomo que está começando a captar com IA.',
    featured: false,
  },
  {
    name: 'Pro',
    price: '197',
    description: 'Para quem avalia e desbloqueia leads toda semana.',
    featured: true,
  },
  {
    name: 'Imobiliária',
    price: '497',
    description: 'Para equipes que precisam de vários corretores no mesmo painel.',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="pricing" id="precos">
      <div className="container pricing__inner">
        <ScrollReveal className="pricing__header">
          <span className="section-label">Preços</span>
          <h2 className="section-title">Planos para quem vive de comissão</h2>
          <p className="section-subtitle pricing__subtitle">
            Todo plano usa o mesmo saldo de créditos: 1 crédito por avaliação, 2 créditos
            para desbloquear um lead. Sem fidelidade, com pagamento via PIX ou cartão.
          </p>
        </ScrollReveal>

        <StaggerContainer className="pricing__grid" staggerDelay={0.1}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <article
                className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              >
                {plan.featured && (
                  <span className="pricing-card__badge">Mais escolhido</span>
                )}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__price">
                  <span className="pricing-card__currency">R$</span>
                  {plan.price}
                  <span className="pricing-card__period">/mês</span>
                </p>
                <p className="pricing-card__description">{plan.description}</p>
                <a href={SIGN_UP_URL} className="pricing-card__cta">
                  Começar agora
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="pricing__footnote" delay={0.15}>
          <p className="pricing__owner">
            <strong>É proprietário?</strong> São 3 avaliações grátis por mês. O plano Plus
            custa R$ 39/mês para quem precisa avaliar mais imóveis.
          </p>
          <a href={PRICING_URL} className="pricing__link">
            Ver todos os preços
            <ArrowUpRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
