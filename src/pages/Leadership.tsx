import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Quote } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { leaders } from '../data/leaders'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export function Leadership() {
  usePageMeta(
    'Leadership — Prayer House Church Düsseldorf',
    'Meet the leadership of Prayer House Church: Rev. Nana Yaw Aikins, Pastor Charles Mensah and Maddy Aikins.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our leadership"
        title={
          <>
            Servants first.{' '}
            <span className="font-script font-normal text-gold-soft">Leaders</span> always.
          </>
        }
        description="The people who carry the vision of Prayer House Church — shepherding, praying and serving the family in Düsseldorf."
        image="/images/pastor-nana.webp"
        imageAlt="Rev. Nana Yaw Aikins ministering"
        compact
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Meet the team"
            title="Called, prepared and sent."
            description="A leadership team shaped by a season of apprenticeship, a love for the Word and a heart for people."
            align="center"
          />

          <div className="mt-16 space-y-16 lg:space-y-24">
            {leaders.map((leader, index) => {
              const reversed = index % 2 === 1
              return (
                <Reveal
                  key={leader.name}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="overflow-hidden rounded-[2rem]">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="aspect-[4/3] w-full object-cover object-top sm:aspect-[5/4]"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-5 rounded-2xl bg-cream px-5 py-3 shadow-soft ${
                        reversed ? 'right-5' : 'left-5'
                      }`}
                    >
                      <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand uppercase">
                        {leader.role}
                      </p>
                      <p className="font-display text-lg text-ink">{leader.name}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand uppercase">
                      {leader.role}
                    </p>
                    <h3 className="mt-2 text-3xl text-ink sm:text-4xl">{leader.name}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                      {leader.fullBio.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Message for ${leader.name}`,
                      )}`}
                      className="link-underline mt-6 text-brand"
                    >
                      <Mail className="size-4" /> Get in touch
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-dark py-20 text-cream sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto size-9 text-gold" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-2xl leading-snug text-cream sm:text-4xl">
              “Talent may open doors, but character sustains them.”
            </blockquote>
            <p className="mt-5 text-[0.65rem] font-semibold tracking-[0.24em] text-gold-soft uppercase">
              Rev. Nana Yaw Aikins
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/ministries" className="btn-light">
              Serve with us <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Contact the church
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
