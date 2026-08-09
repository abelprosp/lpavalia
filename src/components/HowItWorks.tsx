import { images } from '../constants/images'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const steps = [
  {
    image: images.howItWorks.steps.location,
    title: 'Avalie o imóvel com IA',
    detail: 'Comparáveis da região + análise das fotos · 1 crédito',
  },
  {
    image: images.howItWorks.steps.propertyInfo,
    title: 'Publique ou desbloqueie o lead',
    detail: 'Proprietário publica · corretor desbloqueia por 2 créditos',
  },
  {
    image: images.howItWorks.steps.photos,
    title: 'Negocie no CRM',
    detail: 'Funil, scoring de interesse e follow-up no WhatsApp',
  },
]

export function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container">
        <div className="how-it-works__panel">
          <img
            src={images.howItWorks.background}
            alt="Corretor avaliando imóvel"
            className="how-it-works__bg"
          />
          <div className="how-it-works__overlay" />

          <div className="how-it-works__body">
            <ScrollReveal className="how-it-works__header">
              <span className="how-it-works__badge">Como funciona</span>
              <h2 className="how-it-works__title">Da avaliação ao fechamento</h2>
              <p className="how-it-works__subtitle">
                Três passos que ligam o proprietário que quer saber o valor ao corretor
                que quer captar — tudo no mesmo saldo de créditos.
              </p>
            </ScrollReveal>

            <StaggerContainer className="how-it-works__cards">
              {steps.map((step) => (
                <StaggerItem key={step.title}>
                  <article className="how-it-works__card">
                    <div className="how-it-works__card-thumb">
                      <img src={step.image} alt="" />
                    </div>
                    <div className="how-it-works__card-text">
                      <h3 className="how-it-works__card-title">{step.title}</h3>
                      <p className="how-it-works__card-detail">{step.detail}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
