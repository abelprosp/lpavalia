import { ArrowRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { APP_URL } from '../constants/app'
import { ScrollReveal } from './ScrollReveal'

const examples = [
  'Rua Benjamin Constant, 890 — Lajeado',
  'Av. Senador Alberto Pasqualini, 500 — Lajeado',
  'Rua Oswaldo Aranha, 120 — Lajeado',
]

export function AddressSearch() {
  const [address, setAddress] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (address.trim()) {
      window.location.href = `${APP_URL}?endereco=${encodeURIComponent(address.trim())}`
    }
  }

  const fillExample = (example: string) => {
    setAddress(example)
  }

  return (
    <section className="address-search">
      <div className="container address-search__inner">
        <ScrollReveal>
          <p className="address-search__eyebrow">Teste agora</p>
          <h2 className="address-search__title">Onde fica o imóvel?</h2>

          <form className="address-search__bar" onSubmit={handleSearch}>
            <MapPin size={20} className="address-search__icon" strokeWidth={1.75} />
            <input
              type="text"
              placeholder="Digite o endereço..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="address-search__input"
              aria-label="Endereço do imóvel"
            />
            <button type="submit" className="address-search__submit">
              Avaliar
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="address-search__examples">
            <span className="address-search__examples-label">Exemplos:</span>
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                className="address-search__example"
                onClick={() => fillExample(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
