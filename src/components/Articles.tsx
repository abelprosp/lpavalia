import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../constants/images'
import { featuredArticles } from '../data/articles'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const staggerClass = ['', '', 'articles__card--lower', 'articles__card--higher']

const fourthArticle = {
  slug: null as string | null,
  title: 'Fotos que valorizam o imóvel',
  excerpt: 'O que a IA analisa nas imagens do imóvel.',
  image: images.articles.fotosValorizam,
}

const allArticles = [...featuredArticles, fourthArticle]

export function Articles() {
  return (
    <section className="articles" id="artigos">
      <div className="container">
        <ScrollReveal className="articles__header">
          <h2 className="articles__title">
            Acompanhe todos os artigos da{' '}
            <span>Avalia Imobe</span>
          </h2>
          <p className="articles__subtitle">
            Conteúdo exclusivo para corretores e avaliadores que querem resultados
            precisos no mercado imobiliário de Lajeado e região.
          </p>
        </ScrollReveal>

        <div className="articles__mosaic">
          <StaggerContainer className="articles__cards">
            {allArticles.map((article, i) => (
              <StaggerItem
                key={article.title}
                className={`articles__card ${staggerClass[i] ?? ''}`}
              >
                {article.slug ? (
                  <Link to={`/artigos/${article.slug}`} className="article-card">
                    <ArticleCardContent article={article} />
                  </Link>
                ) : (
                  <div className="article-card">
                    <ArticleCardContent article={article} />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="articles__aside" delay={0.15}>
            <Sparkles size={20} className="articles__aside-icon" strokeWidth={1.75} />
            <p className="articles__aside-text">
              Insights sobre mercado imobiliário, tecnologia e avaliações — escritos
              para quem precisa de precisão na hora de fechar negócio em Lajeado.
            </p>
            <Link to="/artigos/ia-avaliacao-imoveis-lajeado" className="articles__aside-link">
              Ler artigos
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ArticleCardContent({
  article,
}: {
  article: { title: string; excerpt: string; image: string }
}) {
  return (
    <>
      <div className="article-card__image-wrapper">
        <img src={article.image} alt={article.title} className="article-card__image" />
      </div>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
    </>
  )
}
