import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages } from '../data/gallery'
import { usePageMeta } from '../lib/usePageMeta'

export function Gallery() {
  usePageMeta(
    'Gallery — Prayer House Church Düsseldorf',
    'Moments from the life of Prayer House Church: worship, fellowship, ministries and community in Düsseldorf.',
  )

  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((current) => (current === null ? null : (current + 1) % galleryImages.length)),
    [],
  )
  const previous = useCallback(
    () =>
      setIndex((current) =>
        current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
      ),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') previous()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, next, previous])

  const active = index === null ? null : galleryImages[index]

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Moments from the{' '}
            <span className="font-script font-normal text-gold-soft">house</span>.
          </>
        }
        description="Worship, fellowship, service and celebration — a glimpse of the life we share as a church family in Düsseldorf."
        image="/images/community.webp"
        imageAlt="The Prayer House Church family"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our life together"
            title="Every picture tells a story of grace."
            description="Tap any photo to view it larger. These are the ordinary Sundays and extraordinary moments that make up our life together."
          />

          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[220px] md:grid-cols-3">
            {galleryImages.map((image, imageIndex) => (
              <Reveal
                key={image.src + image.caption}
                delay={(imageIndex % 3) * 60}
                className={`${
                  image.span === 'tall' ? 'row-span-2' : ''
                } ${image.span === 'wide' ? 'col-span-2' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setIndex(imageIndex)}
                  className="group relative block size-full overflow-hidden rounded-2xl"
                  aria-label={`View photo: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-medium text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    {image.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {active && index !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm animate-fade"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <div className="flex items-center justify-between p-4 text-cream">
            <p className="text-sm text-cream/70">
              {index + 1} / {galleryImages.length} · {active.caption}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-10">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous photo"
              className="absolute left-3 z-10 grid size-11 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition hover:bg-cream/20 sm:left-8"
            >
              <ChevronLeft className="size-5" />
            </button>

            <img
              src={active.src}
              alt={active.alt}
              className="max-h-full max-w-full rounded-xl object-contain shadow-lift"
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 z-10 grid size-11 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition hover:bg-cream/20 sm:right-8"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
