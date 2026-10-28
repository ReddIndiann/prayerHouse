import { Link } from 'react-router-dom'
import { ArrowRight, Check, Mail } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { DonateBand } from '../components/DonateBand'
import { ministries } from '../data/ministries'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export function Ministries() {
  usePageMeta(
    'Ministries — Prayer House Church Düsseldorf',
    'Youth, service, ushering and music — find your place in the house at Prayer House Church Düsseldorf.',
  )

  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title={
          <>
            Every gift has a{' '}
            <span className="font-script font-normal text-gold-soft">place</span> here.
          </>
        }
        description="The church is a body, and every part matters. Discover the teams that serve the house — and the people who make ministry happen week after week."
        image="/images/ministry-youth.webp"
        imageAlt="Members of Prayer House Church serving together"
        compact
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Serve the house"
            title="Four teams. One purpose."
            description="Whether you love people, order, music or quiet service behind the scenes, there is a place for you to grow and give."
            align="center"
          />

          <div className="mt-16 space-y-14">
            {ministries.map((ministry, index) => {
              const reversed = index % 2 === 1
              return (
                <Reveal
                  key={ministry.slug}
                  className={`grid items-center gap-8 rounded-[2rem] border border-line bg-white/60 p-5 sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-8 ${
                    reversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div className={reversed ? 'lg:pr-4' : 'lg:pl-4'}>
                    <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-brand uppercase">
                      {ministry.tagline}
                    </p>
                    <h2 className="mt-2 text-3xl text-ink">{ministry.name}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{ministry.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {ministry.focus.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1.5 text-[0.72rem] font-medium text-ink-soft"
                        >
                          <Check className="size-3 text-brand" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `I'd like to join the ${ministry.name}`,
                      )}`}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:bg-brand-dark"
                    >
                      <Mail className="size-3.5" /> Get involved
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-sand/70 py-16 sm:py-20">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow text-brand">Not sure where to start?</p>
              <h2 className="mt-4 text-2xl text-ink sm:text-3xl">
                Tell us what you love doing — we will help you find the fit.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Talk to us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <DonateBand />
    </>
  )
}
