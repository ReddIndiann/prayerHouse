import type { ReactNode } from 'react'
import { Container } from './Container'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  image: string
  imageAlt?: string
  children?: ReactNode
  compact?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 to-transparent" />

      <Container className={compact ? 'py-16 sm:py-20' : 'py-20 sm:py-28'}>
        <div className="max-w-3xl animate-rise">
          <span className="eyebrow text-gold-soft">{eyebrow}</span>
          <h1 className="mt-5 text-[2.4rem] leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  )
}
