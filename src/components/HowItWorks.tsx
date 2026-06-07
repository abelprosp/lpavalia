import { images } from '../constants/images'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const steps = [
  {
    image: images.howItWorks.steps.location,
    title: 'Coloque a localização',
    detail: 'Plano diretor + região',
  },
  {
    image: images.howItWorks.steps.propertyInfo,
    title: 'Preencha as informações do imóvel',
    detail: 'Metragem, quartos e vagas',
  },
  {
    image: images.howItWorks.steps.photos,
    title: 'Suba as fotos do imóvel',
    detail: 'Análise automática por IA',
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
              <h2 className="how-it-works__title">Simples e rápido</h2>
              <p className="how-it-works__subtitle">
                Em três passos você tem um laudo completo de avaliação pronto para
                apresentar ao seu cliente.
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
