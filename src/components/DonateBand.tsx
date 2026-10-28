import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function DonateBand() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 text-cream sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-96 rounded-full border border-gold/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--color-gold) 0, transparent 45%), radial-gradient(circle at 80% 70%, var(--color-gold) 0, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-soft">Partnership</span>
            <h2 className="mt-5 text-3xl leading-tight text-cream sm:text-4xl">
              It does not matter how much you give — God appreciates any amount.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/65">
              Your giving supports evangelism, the weekly ministry of the Word, and our
              collaboration with SOS Düsseldorf to extend support and hope to communities.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/give" className="btn-light">
              <HeartHandshake className="size-4" /> Give online
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Talk to us <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
