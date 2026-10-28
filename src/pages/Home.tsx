import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Compass,
  HeartHandshake,
  MapPin,
  Mic,
  Play,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'
import { Container } from '../components/Container'
import { NoticeBanner } from '../components/NoticeBanner'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { VideoModal } from '../components/VideoModal'
import { DonateBand } from '../components/DonateBand'
import { site, stats, values } from '../data/site'
import { sermons, youtubeThumb, type Sermon } from '../data/sermons'
import { ministries, testimonials } from '../data/ministries'
import { usePageMeta } from '../lib/usePageMeta'

const valueIcons = {
  community: Users,
  vision: Compass,
  mission: HeartHandshake,
} as const

export function Home() {
  usePageMeta(
    'Prayer House Church — Düsseldorf',
    'A house of prayer for all nations in Düsseldorf. Join us Sundays at 11:00 for worship, the Word and fellowship.',
  )

  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null)
  const featured = sermons[0]
  const recent = sermons.slice(1, 4)

  return (
    <>
      <NoticeBanner />

      {/* Hero */}
      <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink text-cream">
        <img
          src="/images/worship.webp"
          alt="Congregation worshipping at Prayer House Church Düsseldorf"
          className="absolute inset-0 -z-20 size-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-transparent to-ink/20" />

        <Container className="relative pt-24 pb-12 sm:pt-32 lg:pb-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="animate-rise" style={{ animationDelay: '80ms' }}>
              <span className="eyebrow text-gold-soft">
                Prayer House Church · Düsseldorf
              </span>
              <h1 className="mt-6 max-w-3xl text-[2.9rem] leading-[0.98] text-cream sm:text-6xl lg:text-[4.6rem]">
                Grace, love and{' '}
                <span className="font-script font-normal text-gold-soft">forgiveness</span> for all.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                Experience the life-changing power of grace, love and forgiveness. Discover the
                freedom, healing and restoration that come from embracing these transformative
                principles.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/weekly-activities" className="btn-light">
                  Plan your visit <ArrowRight className="size-4" />
                </Link>
                <Link to="/messages" className="btn-ghost-light">
                  <Play className="size-4" /> Watch messages
                </Link>
              </div>
            </div>

            <div
              className="animate-rise rounded-3xl border border-cream/15 bg-cream/10 p-6 backdrop-blur-md sm:p-7"
              style={{ animationDelay: '220ms' }}
            >
              <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-gold-soft uppercase">
                Join us this Sunday
              </p>
              <p className="mt-3 font-display text-5xl text-cream">11:00</p>
              <p className="mt-1 text-sm text-cream/60">One service · ends at 13:00</p>
              <div className="mt-5 space-y-3 border-t border-cream/15 pt-5 text-sm text-cream/70">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>Word Ministration · all are welcome</span>
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition hover:text-cream"
              >
                Get directions <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Welcome / story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/church.webp"
                  alt="The Prayer House Church building in Düsseldorf-Garath"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-[6px] border-cream shadow-lift sm:block lg:-right-10">
                <img
                  src="/images/community.webp"
                  alt="Members of the church family together"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-5 -left-4 rounded-2xl bg-brand px-5 py-4 text-cream shadow-lift sm:-left-6">
                <p className="text-[0.6rem] font-semibold tracking-[0.22em] text-gold-soft uppercase">
                  Since
                </p>
                <p className="font-display text-3xl">1997</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                eyebrow="Welcome home"
                title={
                  <>
                    More than a service — <span className="font-script font-normal text-brand">a family</span>{' '}
                    of faith.
                  </>
                }
                description="Prayer House Church is open and friendly, with balanced spiritual and social activities. We are a house of prayer for all nations, right here in Düsseldorf-Garath."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  Founded in 1997 by Rev. and Mrs. Nana Yaw Aikins, the church began with a season
                  of apprenticeship under various spiritual leaders — a foundation of spiritual
                  growth, discipline and leadership development.
                </p>
                <p>
                  Today we continue to impact lives and work alongside SOS, an NGO based in
                  Düsseldorf, extending support and hope to our community.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link to="/about" className="link-underline text-brand">
                  Read our story <ArrowRight className="size-4" />
                </Link>
                <div>
                  <p className="font-script text-3xl text-ink">Nana Yaw & Maddy Aikins</p>
                  <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted uppercase">
                    Founders
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} className="text-center sm:text-left">
                <p className="font-display text-4xl text-brand sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision / mission / community */}
      <section className="bg-sand/70 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Who we are"
              title="Rooted in the Word. Open to everyone."
              description="Three things shape the life of our house — the people we welcome, the vision we carry and the mission we serve."
            />
            <Link to="/about" className="link-underline shrink-0 text-brand">
              About the church <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons]
              return (
                <Reveal
                  key={value.title}
                  delay={index * 100}
                  className="card-surface group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl text-ink">{value.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{value.body}</p>
                  <Link
                    to={value.to}
                    className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold text-brand"
                  >
                    {value.link}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Service times */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Gather with us"
                title={
                  <>
                    There is a place for you at{' '}
                    <span className="font-script font-normal text-brand">the table</span>.
                  </>
                }
                description="One Sunday gathering, and three midweek moments to grow. Come as you are — you will find a warm welcome, honest worship and the undiluted Word of God."
              />
              <div className="mt-8 rounded-3xl bg-brand-dark p-6 text-cream sm:p-8">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-gold" aria-hidden="true" />
                  <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-gold-soft uppercase">
                    Temporary schedule
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  Due to railway construction, we hold <strong className="text-cream">one service only</strong>{' '}
                  from 30 August through December 2026. Please plan a little extra travel time.
                </p>
                <Link to="/weekly-activities" className="btn-light mt-6">
                  Full weekly rhythm <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                { day: 'Sunday', title: 'Word Ministration', time: '11:00 – 13:00', primary: true },
                { day: 'Tuesday', title: 'Bible Study', time: '20:00 – 21:00' },
                { day: 'Friday', title: 'Destiny Hour', time: '19:30 – 21:00' },
                { day: 'Saturday', title: 'Choir Rehearsal', time: '13:00 – 15:00' },
              ].map((item, index) => (
                <Reveal
                  key={item.day}
                  delay={index * 70}
                  className={`flex items-center justify-between gap-6 rounded-2xl border px-6 py-5 transition ${
                    item.primary
                      ? 'border-brand/25 bg-brand/5'
                      : 'border-line bg-white/60 hover:border-brand/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold tracking-[0.12em] uppercase ${
                        item.primary ? 'bg-brand text-cream' : 'bg-sand text-ink-soft'
                      }`}
                    >
                      {item.day.slice(0, 3)}
                    </span>
                    <div>
                      <p className="font-medium text-ink">{item.title}</p>
                      <p className="text-xs text-muted">{item.day}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold tabular-nums text-brand">{item.time}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Messages */}
      <section className="bg-[#17130f] py-20 text-cream sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Latest messages"
              tone="light"
              title="Feed your spirit. Any day of the week."
              description="Watch recent services and Destiny Hour messages, or listen to the podcast while you commute, cook or rest."
            />
            <Link to="/messages" className="btn-ghost-light shrink-0">
              All messages <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <Reveal>
              <button
                type="button"
                onClick={() => setActiveVideo(featured)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] text-left"
              >
                <img
                  src={youtubeThumb(featured.videoId)}
                  alt=""
                  className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-brand px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.16em] uppercase">
                  {featured.category}
                </span>
                <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream/95 text-brand transition group-hover:scale-110">
                  <Play className="ml-1 size-6 fill-current" />
                </span>
                <span className="absolute inset-x-0 bottom-0 block p-6 sm:p-8">
                  <span className="block font-display text-2xl leading-snug text-cream sm:text-3xl">
                    {featured.title}
                  </span>
                  <span className="mt-2 flex items-center gap-2 text-sm text-cream/65">
                    <Mic className="size-4 text-gold" /> {featured.speaker}
                  </span>
                </span>
              </button>
            </Reveal>

            <div className="flex flex-col gap-3">
              {recent.map((sermon, index) => (
                <Reveal key={sermon.id} delay={index * 80}>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(sermon)}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 text-left transition hover:border-gold/40 hover:bg-cream/10"
                  >
                    <span className="relative shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={youtubeThumb(sermon.videoId)}
                        alt=""
                        className="h-20 w-28 object-cover"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 grid place-items-center bg-ink/30 text-cream opacity-0 transition group-hover:opacity-100">
                        <Play className="size-5" />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.6rem] font-semibold tracking-[0.16em] text-gold uppercase">
                        {sermon.category}
                      </span>
                      <span className="mt-1 block line-clamp-2 text-sm font-medium text-cream">
                        {sermon.title}
                      </span>
                      <span className="mt-1 block text-xs text-cream/50">{sermon.speaker}</span>
                    </span>
                  </button>
                </Reveal>
              ))}

              <Reveal delay={240} className="mt-2 rounded-2xl border border-gold/25 bg-gold/5 p-5">
                <p className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.2em] text-gold uppercase">
                  <Sparkles className="size-3.5" /> Podcast
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  16 classic messages from Rev. Nana Yaw Aikins, ready to stream.
                </p>
                <Link
                  to="/messages"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-cream"
                >
                  Listen now <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Verse */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-cream sm:py-32">
        <img
          src="/images/feature-word.webp"
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <Container>
          <Reveal className="max-w-3xl">
            <Quote className="size-9 text-gold" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-2xl leading-snug text-cream sm:text-4xl">
              “Is it not written, ‘My house shall be called a house of prayer for all nations’?”
            </blockquote>
            <p className="mt-5 text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
              Mark 11:17
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Ministries */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Get involved"
              title="Find your place in the house."
              description="Every member has a gift. These are the teams that make room for ministry to happen — and there is space for you."
            />
            <Link to="/ministries" className="link-underline shrink-0 text-brand">
              Explore ministries <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((ministry, index) => (
              <Reveal key={ministry.slug} delay={index * 80}>
                <Link
                  to="/ministries"
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <img
                    src={ministry.image}
                    alt=""
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-gold uppercase">
                      Ministry
                    </p>
                    <h3 className="mt-1.5 text-xl text-cream">{ministry.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-cream/60">{ministry.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-cream opacity-0 transition group-hover:opacity-100">
                      Learn more <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-sand/70 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What people say"
            title="A strong sense of community."
            description="We are grateful for the people who call this house home. Here is what a few of them have shared."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 100}
                className="card-surface relative flex flex-col p-8"
              >
                <span className="font-display text-6xl leading-none text-brand/20" aria-hidden="true">
                  “
                </span>
                <blockquote className="-mt-4 text-base leading-relaxed text-ink-soft">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line/70 pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-brand text-sm font-semibold text-cream">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{testimonial.name}</span>
                    <span className="block text-xs text-muted">{testimonial.role}</span>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <DonateBand />

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
