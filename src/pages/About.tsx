import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HandHeart, Quote, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { DonateBand } from '../components/DonateBand'
import { site, stats } from '../data/site'
import { leaders } from '../data/leaders'
import { usePageMeta } from '../lib/usePageMeta'

const timeline = [
  {
    year: '1997',
    title: 'A church is planted',
    body: 'Rev. and Mrs. Nana Yaw Aikins found Prayer House Church in Düsseldorf, with a vision for a house of prayer for all nations.',
  },
  {
    year: 'The preparation',
    title: 'Learning to serve',
    body: 'Through His divine wisdom, God allowed them to serve under various spiritual leaders — a season of apprenticeship that became a foundation of spiritual growth, discipline and leadership.',
  },
  {
    year: 'The commissioning',
    title: 'Sent to the vineyard',
    body: 'After this period of preparation, God qualified and commissioned them to work faithfully in His vineyard. The journey has not always been easy, but God has remained faithful.',
  },
  {
    year: 'Today',
    title: 'Impacting a city',
    body: 'Prayer House Church continues to impact lives and works in collaboration with SOS, an NGO based in Düsseldorf, extending support and hope to communities.',
  },
]

const statements = {
  en: {
    label: 'English',
    vision:
      'Our vision is to empower people with knowledge through God’s word; to teach them to deploy their God-given talents while positively impacting their generation.',
    mission:
      'Our mission is to bring people to church by working hard through evangelism and to provide an exciting, God-honouring environment for worship.',
  },
  de: {
    label: 'Deutsch',
    vision:
      'Unsere Vision ist es, Menschen durch das Wort Gottes mit Wissen zu stärken; ihnen beizubringen, ihre von Gott gegebenen Talente einzusetzen und gleichzeitig ihre Generation positiv zu prägen.',
    mission:
      'Unsere Mission ist es, Menschen vor allem durch Evangelisation in die Gemeinde zu bringen und eine aufregende, Gott verherrlichende Umgebung für die Anbetung zu schaffen.',
  },
} as const

export function About() {
  usePageMeta(
    'About us — Prayer House Church Düsseldorf',
    'Founded in 1997 by Rev. and Mrs. Nana Yaw Aikins, Prayer House Church is a house of prayer for all nations in Düsseldorf-Garath.',
  )

  const [language, setLanguage] = useState<'en' | 'de'>('en')
  const statement = statements[language]

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A house of prayer.
            <br />
            <span className="font-script font-normal text-gold-soft">A family</span> of faith.
          </>
        }
        description="We are an open and friendly church in Düsseldorf-Garath with balanced spiritual and social activities, equipping the body of Christ for the second coming of our Lord Jesus Christ."
        image="/images/worship.webp"
        imageAlt="Worship at Prayer House Church"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/weekly-activities" className="btn-light">
            Plan a visit <ArrowRight className="size-4" />
          </Link>
          <Link to="/leadership" className="btn-ghost-light">
            Meet the leaders
          </Link>
        </div>
      </PageHero>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Our story"
                title="From a season of preparation to a house for the nations."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  Rev. and Mrs. Nana Yaw Aikins founded Prayer House Church in 1997. Through His
                  divine wisdom, God allowed them to serve under various spiritual leaders,
                  grooming and preparing them for the great task that lay ahead.
                </p>
                <p>
                  After this period of preparation, God qualified and commissioned them to work
                  faithfully in His vineyard. Today the church continues to impact lives and is in
                  collaboration with SOS, an NGO based in Düsseldorf, Germany.
                </p>
              </div>

              <div className="mt-10 space-y-0 border-l border-line">
                {timeline.map((item, index) => (
                  <Reveal
                    key={item.year}
                    delay={index * 70}
                    className="relative pb-8 pl-8 last:pb-0"
                  >
                    <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-brand ring-4 ring-cream" />
                    <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-brand uppercase">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="sticky top-28 space-y-5">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/images/community.webp"
                    alt="The Prayer House Church family gathered together"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-sand p-5">
                    <p className="font-display text-3xl text-brand">SOS</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Collaborating with SOS Düsseldorf to serve our community.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-dark p-5 text-cream">
                    <p className="font-display text-3xl text-gold">Garath</p>
                    <p className="mt-1 text-xs leading-relaxed text-cream/60">
                      Our home in the south of Düsseldorf.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & mission */}
      <section className="bg-sand/70 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Vision & mission"
              title="What we are building."
              description="The same convictions, shared in two languages — because our house is home to many nations."
            />
            <div
              className="inline-flex shrink-0 rounded-full border border-line bg-cream p-1"
              role="tablist"
              aria-label="Choose language"
            >
              {(['en', 'de'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  role="tab"
                  aria-selected={language === code}
                  onClick={() => setLanguage(code)}
                  className={`inline-flex min-h-9 items-center rounded-full px-4 py-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition ${
                    language === code
                      ? 'bg-brand text-cream'
                      : 'text-muted hover:text-brand'
                  }`}
                >
                  {statements[code].label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="card-surface p-8 sm:p-10">
              <span className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl text-ink">Vision</h3>
              <p key={`vision-${language}`} className="mt-3 animate-fade text-base leading-relaxed text-muted">
                {statement.vision}
              </p>
            </Reveal>
            <Reveal delay={100} className="card-surface p-8 sm:p-10">
              <span className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
                <HandHeart className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl text-ink">Mission</h3>
              <p key={`mission-${language}`} className="mt-3 animate-fade text-base leading-relaxed text-muted">
                {statement.mission}
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-brand sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
        <img
          src="/images/feature-order.webp"
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <Container>
          <Reveal className="max-w-3xl">
            <Quote className="size-8 text-gold" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-2xl leading-snug text-cream sm:text-3xl">
              “Pray! And listen to God! You can do this alone, but find somebody to do it with
              you.”
            </blockquote>
            <p className="mt-5 text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
              The heart of Prayer House
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Leaders */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our pastors"
              title="People who carry the house."
              description="We have a strong sense of community with our parishioners — and servant leaders who lead from the front."
            />
            <Link to="/leadership" className="link-underline shrink-0 text-brand">
              Meet the leadership <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 90} className="group">
                <Link to="/leadership" className="block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.18em] text-brand uppercase">
                    {leader.role}
                  </p>
                  <h3 className="mt-1 text-xl text-ink">{leader.name}</h3>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 text-center text-sm text-muted">
            Visit us at {site.address.street}, {site.address.zip} {site.address.city} — we would
            love to meet you.
          </p>
        </Container>
      </section>

      <DonateBand />
    </>
  )
}
