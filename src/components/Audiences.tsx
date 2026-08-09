import { Building2, Check, Home } from 'lucide-react'
import { SIGN_UP_URL } from '../constants/app'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const audiences = [
  {
    id: 'corretor',
    icon: Building2,
    eyebrow: 'Para corretores e imobiliárias',
    title: 'Capte com IA e feche no CRM',
    bullets: [
      'Avaliações com comparáveis da região — 1 crédito cada',
      'Leads de proprietários que acabaram de avaliar — 2 créditos',
      'CRM com funil, scoring de interesse e follow-up',
      'Mapa com plano diretor e assistente FoxAi',
    ],
    price: 'A partir de R$ 97/mês',
    cta: 'Começar como corretor',
    featured: true,
  },
  {
    id: 'proprietario',
    icon: Home,
    eyebrow: 'Para proprietários',
    title: 'Saiba o valor e chegue ao mercado',
    bullets: [
      '3 avaliações grátis por mês, sem cartão',
      'Estimativa com comparáveis e plano diretor do endereço',
      'Publique o imóvel para os corretores que atuam na região',
      'Plus com mais avaliações por mês quando precisar',
    ],
    price: 'Grátis · Plus por R$ 39/mês',
    cta: 'Avaliar meu imóvel',
    featured: false,
  },
]

export function Audiences() {
  return (
    <section className="audiences" id="para-quem">
      <div className="container audiences__inner">
        <ScrollReveal className="audiences__header">
          <span className="section-label">Para quem</span>
          <h2 className="section-title">Dois lados do mesmo mercado</h2>
          <p className="section-subtitle audiences__subtitle">
            Proprietários descobrem quanto vale o imóvel e publicam. Corretores avaliam,
            desbloqueiam esses contatos e conduzem a negociação até o fechamento.
          </p>
        </ScrollReveal>

        <StaggerContainer className="audiences__grid" staggerDelay={0.12}>
          {audiences.map((audience) => {
            const Icon = audience.icon
            return (
              <StaggerItem key={audience.id}>
                <article
                  className={`audience-card${
                    audience.featured ? ' audience-card--featured' : ''
                  }`}
                >
                  <span className="audience-card__icon">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="audience-card__eyebrow">{audience.eyebrow}</span>
                  <h3 className="audience-card__title">{audience.title}</h3>

                  <ul className="audience-card__list">
                    {audience.bullets.map((bullet) => (
                      <li key={bullet} className="audience-card__item">
                        <Check size={16} strokeWidth={2.5} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <p className="audience-card__price">{audience.price}</p>
                  <a
                    href={SIGN_UP_URL}
                    className={`btn ${
                      audience.featured ? 'btn--primary' : 'btn--outline'
                    } audience-card__cta`}
                  >
                    {audience.cta}
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
