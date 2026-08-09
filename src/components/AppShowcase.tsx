import { Coins } from 'lucide-react'
import { SIGN_UP_URL } from '../constants/app'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import { SecurityWordAnimation } from './SecurityWordAnimation'

const stats = [
  { value: '1 crédito', label: 'por avaliação' },
  { value: '2 créditos', label: 'por lead desbloqueado' },
  { value: 'R$ 97', label: 'plano inicial por mês' },
]

const features = [
  { title: 'Avaliações', accent: 'por IA', visual: 'report' },
  { title: 'Leads', accent: 'de proprietários da região', visual: 'leads' },
  { title: 'CRM', accent: 'com scoring de interesse', visual: 'crm' },
  { title: 'Mapa + FoxAi', accent: 'plano diretor automático', visual: 'map' },
  { title: 'WhatsApp', accent: 'integrado', visual: 'whatsapp' },
  { title: 'Dados', accent: 'protegidos', visual: 'security' },
]

export function AppShowcase() {
  return (
    <section className="platform" id="plataforma">
      <div className="container platform__inner">
        <ScrollReveal className="platform__header">
          <h2 className="platform__heading">
            Avaliar, captar e fechar no <span>mesmo lugar</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="platform-bento" staggerDelay={0.08}>
          <div className="platform-bento__row platform-bento__row--top">
            <StaggerItem>
              <div className="bento-card bento-card--compact">
                <p className="bento-card__lead">
                  Créditos <span>transparentes</span>
                </p>
                <Coins size={28} className="bento-card__icon-floating" strokeWidth={1.5} />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bento-card bento-card--stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="bento-stat">
                    <span className="bento-stat__value">{stat.value}</span>
                    <span className="bento-stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>

          <div className="platform-bento__row platform-bento__row--bottom">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className={`bento-card bento-card--feature bento-card--${feature.visual}`}>
                  <div className="bento-card__visual" aria-hidden="true" />
                  <p className="bento-card__feature-text">
                    {feature.title}
                    <br />
                    <span>{feature.accent}</span>
                  </p>
                  {feature.visual === 'security' && (
                    <div className="bento-card__security">
                      <SecurityWordAnimation />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <ScrollReveal className="platform__cta" delay={0.2}>
          <a href={SIGN_UP_URL} className="btn btn--primary btn--lg">
            Criar conta grátis
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
