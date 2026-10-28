export function BrandMark({
  tone = 'dark',
  compact = false,
}: {
  tone?: 'dark' | 'light'
  compact?: boolean
}) {
  const isLight = tone === 'light'

  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-full border ${
          isLight ? 'border-gold/50 text-gold' : 'border-brand/25 text-brand'
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" fill="none" className="size-7">
          <path
            d="M7 33V18.5a13 13 0 0 1 26 0V33"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M20 28.5c3.8-2.7 4.9-6.6 2.2-10.2-.9 2-2.4 3.2-4.3 4.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 28.5c-3.6-1.6-4.8-5-3.3-8.3 1.1 1.3 2.4 2.2 3.9 2.8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="22.5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.22rem] tracking-tight sm:text-[1.35rem] ${isLight ? 'text-cream' : 'text-ink'}`}
        >
          Prayer House
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[0.62rem] font-semibold tracking-[0.24em] whitespace-nowrap uppercase sm:text-[0.66rem] sm:tracking-[0.26em] ${
              isLight ? 'text-cream/55' : 'text-muted'
            }`}
          >
            Church · Düsseldorf
          </span>
        )}
      </span>
    </span>
  )
}
