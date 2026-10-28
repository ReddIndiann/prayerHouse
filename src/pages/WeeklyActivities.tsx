import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock, MapPin, TrainFront, Users } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { serviceTimes, site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const firstVisit = [
  {
    icon: Clock,
    title: 'Come a little early',
    body: 'Doors open from 10:30. Grab a seat, meet someone new, and settle in before we begin at 11:00.',
  },
  {
    icon: Users,
    title: 'Come as you are',
    body: 'There is no dress code and no pressure. Families, students, singles and elders — everyone is welcome.',
  },
  {
    icon: TrainFront,
    title: 'Plan for travel',
    body: 'Railway construction is affecting routes to the church until December 2026. Please allow extra time.',
  },
]

export function WeeklyActivities() {
  usePageMeta(
    'Weekly activities — Prayer House Church Düsseldorf',
    'Sunday worship at 11:00, Tuesday Bible Study, Friday Destiny Hour and Saturday choir rehearsal. See the full weekly schedule.',
  )

  return (
    <>
      <PageHero
        eyebrow="Weekly activities"
        title={
          <>
            A rhythm of <span className="font-script font-normal text-gold-soft">grace</span>.
          </>
        }
        description="Four gatherings shape our week — worship, study, destiny and song. Find the moment that fits your season, and come grow with us."
        image="/images/feature-partnership.webp"
        imageAlt="Church members in fellowship"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-col gap-6 rounded-3xl border border-gold/40 bg-sand/80 p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-cream">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl text-ink">Important notice: change in service schedule</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Due to railway construction along the route to the church, we hold{' '}
                <strong className="text-ink">one service only at 11:00</strong> from 30 August
                through December 2026. We look forward to worshipping together as one family.
              </p>
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              Directions <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {serviceTimes.map((service, index) => (
              <Reveal
                key={service.day}
                delay={index * 80}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-lift sm:p-8 ${
                  index === 0
                    ? 'border-brand/25 bg-brand text-cream'
                    : 'border-line bg-white/70'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-[0.62rem] font-semibold tracking-[0.24em] uppercase ${
                        index === 0 ? 'text-gold-soft' : 'text-brand'
                      }`}
                    >
                      {service.day}
                    </p>
                    <h3
                      className={`mt-2 text-2xl ${index === 0 ? 'text-cream' : 'text-ink'}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold tabular-nums ${
                      index === 0 ? 'bg-cream/15 text-cream' : 'bg-sand text-ink-soft'
                    }`}
                  >
                    {service.time}
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    index === 0 ? 'text-cream/70' : 'text-muted'
                  }`}
                >
                  {service.description}
                </p>
                {service.note && (
                  <p
                    className={`mt-5 inline-flex rounded-full px-3 py-1.5 text-[0.65rem] font-semibold tracking-wide ${
                      index === 0 ? 'bg-gold/20 text-gold-soft' : 'bg-brand/10 text-brand'
                    }`}
                  >
                    {service.note}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="First time?"
                title="What to expect on a Sunday."
                description="A warm welcome, heartfelt worship, a practical message from the Word, and time to connect afterwards. No pressure, no performance — just family."
              />

              <div className="mt-8 space-y-6">
                {firstVisit.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cream text-brand shadow-soft">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Ask a question <ArrowRight className="size-4" />
                </Link>
                <Link to="/new-converts" className="btn-outline">
                  I’m new to faith
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-3xl border border-line bg-cream shadow-soft">
                <div className="flex items-start gap-3 p-6">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Prayer House Church</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {site.address.street}
                      <br />
                      {site.address.zip} {site.address.city}
                      <br />
                      {site.address.country}
                    </p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                    >
                      Open in Google Maps <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
                <iframe
                  title="Map showing Prayer House Church Düsseldorf"
                  src={site.mapEmbed}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
