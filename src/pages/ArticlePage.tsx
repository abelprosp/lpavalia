import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { StickyBar } from '../components/StickyBar'
import { getArticleBySlug } from '../data/articles'
import { APP_URL } from '../constants/app'
import { useSEO } from '../hooks/useSEO'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  useSEO(
    article
      ? {
          title: article.metaTitle,
          description: article.metaDescription,
          keywords: article.keywords,
          canonicalPath: `/artigos/${article.slug}`,
          ogImage: article.image,
          ogType: 'article',
        }
      : {
          title: 'Artigo não encontrado | Avalia Imobe',
          description: 'Conteúdo sobre avaliação de imóveis em Lajeado.',
          canonicalPath: '/',
        },
  )

  if (!article) return <Navigate to="/" replace />

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Avalia Imobe',
      url: typeof window !== 'undefined' ? window.location.origin : '',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Avalia Imobe',
    },
    keywords: article.keywords.join(', '),
    about: {
      '@type': 'Place',
      name: 'Lajeado',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lajeado',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="main-content article-page">
        <article className="article-page__inner container" itemScope itemType="https://schema.org/Article">
          <Link to="/" className="article-page__back">
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>

          <header className="article-page__header">
            <div className="article-page__meta">
              <span>
                <Calendar size={14} />
                <time dateTime={article.date} itemProp="datePublished">
                  {formatDate(article.date)}
                </time>
              </span>
              <span>
                <Clock size={14} />
                {article.readTime} de leitura
              </span>
            </div>
            <h1 className="article-page__title" itemProp="headline">
              {article.title}
            </h1>
            <p className="article-page__lead" itemProp="description">
              {article.metaDescription}
            </p>
          </header>

          <div className="article-page__hero">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="article-page__image"
              itemProp="image"
            />
          </div>

          <div className="article-page__body" itemProp="articleBody">
            {article.sections.map((section) => (
              <section key={section.heading} className="article-page__section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="article-page__cta">
            <h2>Avalie imóveis em Lajeado com IA</h2>
            <p>
              Gere laudos completos com comparativos, plano diretor e análise de fotos
              em minutos. Teste a Avalia Imobe agora.
            </p>
            <a href={APP_URL} className="btn btn--primary">
              Testar gratuitamente
            </a>
          </aside>
        </article>
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
