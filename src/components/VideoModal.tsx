import { useEffect } from 'react'
import { X } from 'lucide-react'

export function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string
  title: string
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fade"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-lift"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 bg-ink px-4 py-3">
          <p className="truncate text-sm text-cream/80">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="grid size-8 shrink-0 place-items-center rounded-full text-cream/70 transition hover:bg-cream/10 hover:text-cream"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
      </div>
    </div>
  )
}
