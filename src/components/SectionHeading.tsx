import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <span className={`eyebrow ${isLight ? 'text-gold-soft' : 'text-brand'}`}>{eyebrow}</span>
      <h2
        className={`mt-5 text-[2rem] leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed ${isLight ? 'text-cream/70' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
