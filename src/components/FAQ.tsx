import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const faqs = [
  {
    question: 'Como a Avalia Imobe calcula o valor do imóvel?',
    answer:
      'Nossa IA analisa comparativos de mercado na região, dados do plano diretor, características do imóvel e as fotos enviadas para gerar uma estimativa precisa com margem de confiança.',
  },
  {
    question: 'Preciso ser corretor para usar a plataforma?',
    answer:
      'A Avalia Imobe foi desenvolvida para corretores de imóveis, mas avaliadores, construtoras e investidores também podem se beneficiar das ferramentas de avaliação com IA.',
  },
  {
    question: 'Posso usar pelo WhatsApp?',
    answer:
      'Sim! Você pode iniciar uma avaliação diretamente pelo WhatsApp, enviando o endereço, informações e fotos do imóvel. O laudo completo é gerado e enviado na conversa.',
  },
  {
    question: 'Os laudos têm validade jurídica?',
    answer:
      'Os laudos gerados servem como base técnica para negociações e apresentações. Para fins jurídicos formais, recomendamos complementar com laudo de engenheiro ou avaliador credenciado.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Seus dados e laudos são armazenados de forma segura e nunca compartilhados com terceiros.',
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
            <span>avaliações</span>
          </h2>
          <p className="faq__subtitle">
            Tudo o que você precisa saber sobre a plataforma, laudos gerados por IA
            e segurança dos seus dados.
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
