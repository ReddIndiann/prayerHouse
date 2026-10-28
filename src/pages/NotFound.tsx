import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/Container'
import { usePageMeta } from '../lib/usePageMeta'

export function NotFound() {
  usePageMeta(
    'Page not found — Prayer House Church Düsseldorf',
    'The page you are looking for could not be found.',
  )

  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <p className="font-script text-6xl text-brand">Oops</p>
        <h1 className="mt-4 text-4xl text-ink sm:text-5xl">This page is not in the house.</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The link may have moved or the page no longer exists. Let us guide you back to a place
          that feels like home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="size-4" /> Back home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  )
}
