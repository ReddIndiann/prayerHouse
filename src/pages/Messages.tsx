import { useMemo, useState } from 'react'
import { ArrowUpRight, Headphones, Play } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AudioPlayer } from '../components/AudioPlayer'
import { SocialIcon } from '../components/SocialIcon'
import { VideoModal } from '../components/VideoModal'
import {
  sermons,
  youtubeThumb,
  youtubeWatch,
  type Sermon,
} from '../data/sermons'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const categories = ['All', 'Sunday Service', 'Destiny Hour', 'Thanksgiving'] as const

export function Messages() {
  usePageMeta(
    'Messages & podcast — Prayer House Church Düsseldorf',
    'Watch recent Sunday services and Destiny Hour messages, and stream the Prayer House Church podcast with Rev. Nana Yaw Aikins.',
  )

  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null)
  const [category, setCategory] = useState<(typeof categories)[number]>('All')

  const featured = sermons[0]
  const filtered = useMemo(
    () =>
      category === 'All'
        ? sermons.filter((sermon) => !sermon.featured)
        : sermons.filter((sermon) => sermon.category === category && !sermon.featured),
    [category],
  )

  return (
    <>
      <PageHero
        eyebrow="Messages"
        title={
          <>
            Faith comes by <span className="font-script font-normal text-gold-soft">hearing</span>.
          </>
        }
        description="Catch up on Sunday services and Destiny Hour messages, or take a classic sermon with you on the go. The Word is always within reach."
        image="/images/feature-order.webp"
        imageAlt="Congregation listening to the Word"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal>
              <button
                type="button"
                onClick={() => setActiveVideo(featured)}
                className="group relative block w-full overflow-hidden rounded-[2rem] text-left"
              >
                <img
                  src={youtubeThumb(featured.videoId)}
                  alt=""
                  className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-brand px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                  Latest
                </span>
                <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream/95 text-brand transition group-hover:scale-110">
                  <Play className="ml-1 size-6 fill-current" />
                </span>
                <span className="absolute inset-x-0 bottom-0 block p-6 sm:p-8">
                  <span className="block font-display text-2xl leading-snug text-cream sm:text-3xl">
                    {featured.title}
                  </span>
                  <span className="mt-2 block text-sm text-cream/60">
                    {featured.speaker} · {featured.category}
                  </span>
                </span>
              </button>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                eyebrow="Watch & listen"
                title="The Word, wherever you are."
                description="New messages are uploaded to YouTube every week. Prefer audio? The podcast collects classic teachings from the house."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.socials.find((social) => social.label === 'YouTube')?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <SocialIcon name="YouTube" className="size-4" /> YouTube channel
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a href="#podcast" className="btn-outline">
                  <Headphones className="size-4" /> Go to podcast
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Message library"
              title="Recent services."
              description="Browse messages by gathering. Click any card to watch on this page."
            />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter messages">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`inline-flex min-h-9 items-center rounded-full border px-4 py-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition ${
                    category === item
                      ? 'border-brand bg-brand text-cream'
                      : 'border-line bg-cream text-ink-soft hover:border-brand/40 hover:text-brand'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sermon, index) => (
              <Reveal key={sermon.id} delay={(index % 3) * 70}>
                <button
                  type="button"
                  onClick={() => setActiveVideo(sermon)}
                  className="group block w-full overflow-hidden rounded-2xl border border-line bg-white/70 text-left transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={youtubeThumb(sermon.videoId)}
                      alt=""
                      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-ink/25 text-cream opacity-0 transition group-hover:opacity-100">
                      <span className="grid size-12 place-items-center rounded-full bg-cream text-brand">
                        <Play className="ml-0.5 size-5 fill-current" />
                      </span>
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-brand uppercase">
                      {sermon.category}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-lg leading-snug text-ink">
                      {sermon.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">{sermon.speaker}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-muted">
              No messages in this category yet — check the YouTube channel for the latest.
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <a
              href={youtubeWatch(featured.videoId)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-brand"
            >
              Watch the latest on YouTube <ArrowUpRight className="size-4" />
            </a>
            <span className="text-muted">More messages are added weekly.</span>
          </div>
        </Container>
      </section>

      <section id="podcast" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="The podcast"
                title="Classic messages, ready to stream."
                description="A growing archive of teachings from Rev. Nana Yaw Aikins — on purpose, character, faith and flourishing. Press play and let the Word work."
              />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  Sovereign over every season, purposeful in every word — these messages have
                  travelled with our members through commutes, kitchens and quiet mornings.
                </p>
                <p className="font-script text-2xl text-brand">Listen. Reflect. Grow.</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <AudioPlayer />
            </Reveal>
          </div>
        </Container>
      </section>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.videoId}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  )
}
