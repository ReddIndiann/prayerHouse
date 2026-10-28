import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import { notice } from '../data/site'
import { Container } from './Container'

const STORAGE_KEY = 'phc-service-notice-dismissed'

function readDismissed() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function NoticeBanner() {
  const [visible, setVisible] = useState(() => !readDismissed())

  if (!visible) return null

  return (
    <div className="border-b border-gold/30 bg-sand/80">
      <Container className="flex items-start gap-4 py-3.5 sm:items-center">
        <span className="mt-0.5 inline-flex shrink-0 items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-brand uppercase sm:mt-0">
          Notice
        </span>
        <p className="flex-1 text-[0.82rem] leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">{notice.title}:</span> {notice.body}
        </p>
        <Link
          to={notice.to}
          className="hidden shrink-0 items-center gap-1.5 text-[0.75rem] font-semibold text-brand transition hover:text-brand-dark sm:inline-flex"
        >
          {notice.cta} <ArrowRight className="size-3.5" />
        </Link>
        <button
          type="button"
          onClick={() => {
            setVisible(false)
            try {
              window.localStorage.setItem(STORAGE_KEY, '1')
            } catch {
              /* ignore */
            }
          }}
          aria-label="Dismiss notice"
          className="shrink-0 rounded-full p-1.5 text-muted transition hover:bg-brand/10 hover:text-brand"
        >
          <X className="size-4" />
        </button>
      </Container>
    </div>
  )
}
