import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const faqs = [
  {
    question: 'Preciso ser corretor para usar a plataforma?',
    answer:
      'Não. Proprietários usam a Avalia Imobe de graça, com 3 avaliações por mês e sem cartão de crédito. Depois de avaliar, você decide se quer publicar o imóvel para os corretores que atuam na sua região.',
  },
  {
    question: 'Quanto custa desbloquear um lead de proprietário?',
    answer:
      'Dois créditos por lead. Uma avaliação com IA consome um crédito. É o mesmo saldo para as duas coisas, então você escolhe onde gastar conforme a semana: avaliar mais imóveis ou abrir mais contatos.',
  },
  {
    question: 'Como funcionam os créditos e o pagamento?',
    answer:
      'A assinatura mensal libera um saldo de créditos que você usa em avaliações e leads, e o pagamento pode ser feito por PIX ou cartão. Não há fidelidade — você pode trocar de plano ou cancelar quando quiser.',
  },
  {
    question: 'A avaliação substitui um laudo de avaliação com CRECI?',
    answer:
      'Não. O que geramos é uma ferramenta comercial: serve para precificar, defender o preço com o cliente e negociar com base em comparativos de mercado. Para laudo com validade legal — perícia, inventário, financiamento ou processo judicial —, procure um avaliador credenciado ou engenheiro.',
  },
  {
    question: 'Como a Avalia Imobe calcula o valor do imóvel?',
    answer:
      'Cruzamos comparativos de mercado na região, dados do plano diretor a partir do endereço, as características informadas e a análise das fotos enviadas. O resultado sai como faixa de valor, com os comparáveis que sustentaram o cálculo.',
  },
  {
    question: 'Meus dados e os dos meus clientes estão seguros?',
    answer:
      'Seus dados trafegam criptografados e ficam armazenados de forma segura. Contatos, avaliações e histórico do CRM são seus e não são compartilhados com outros corretores nem vendidos a terceiros.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? <X size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-item__answer-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="faq-item__answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <ScrollReveal className="faq__header">
          <h2 className="faq__title">
            <span>Perguntas</span> frequentes sobre{' '}
            <span>créditos e leads</span>
          </h2>
          <p className="faq__subtitle">
            Como funcionam as avaliações, os leads de proprietários e a cobrança — e o
            que a plataforma não se propõe a fazer.
          </p>
        </ScrollReveal>

        <StaggerContainer className="faq__list">
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
