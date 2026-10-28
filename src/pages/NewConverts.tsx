import { useState, type ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { usePageMeta } from '../lib/usePageMeta'

const steps = [
  {
    title: 'Get connected',
    body: 'Tell us about your decision below. A leader will personally reach out to pray with you and answer any questions.',
  },
  {
    title: 'Join a service',
    body: 'Come and worship with the family — Sundays at 11:00 in Düsseldorf-Garath. You will not sit alone.',
  },
  {
    title: 'Grow in the Word',
    body: 'Our Tuesday Bible Study at 20:00 is the perfect place to start understanding what you have received.',
  },
  {
    title: 'Find your place',
    body: 'Discover the ministries of the house and begin to serve with the gifts God has given you.',
  },
]

export function NewConverts() {
  usePageMeta(
    'New converts — Prayer House Church Düsseldorf',
    'Welcome to the family of faith. Tell us about your decision and let us walk with you in your new life in Christ.',
  )

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', birthDate: '', message: '' })

  const update = (field: keyof typeof form) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((current) => ({ ...current, [field]: event.target.value }))

  return (
    <>
      <PageHero
        eyebrow="New converts"
        title={
          <>
            Welcome to the{' '}
            <span className="font-script font-normal text-gold-soft">family</span> of faith.
          </>
        }
        description="Congratulations on your decision to follow Jesus. Your journey of faith is a beautiful testament to the power of God’s grace — and you are not walking it alone."
        image="/images/new-converts.webp"
        imageAlt="Celebrating a new decision of faith"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="You belong here"
                title="A new chapter, surrounded by support."
                description="As you embark on this new life, remember that you are surrounded by encouragement, prayer and endless blessings. Together, let’s grow in faith and spread the light of God’s love."
              />

              <blockquote className="mt-8 rounded-2xl border border-gold/40 bg-sand/70 p-6">
                <p className="font-display text-xl leading-snug text-ink">
                  “Therefore, if anyone is in Christ, the new creation has come: the old has gone,
                  the new is here!”
                </p>
                <footer className="mt-3 text-[0.68rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  2 Corinthians 5:17
                </footer>
              </blockquote>

              <ol className="mt-10 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand font-display text-sm text-cream">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/weekly-activities" className="btn-primary">
                  See service times <ArrowRight className="size-4" />
                </Link>
                <Link to="/ministries" className="btn-outline">
                  Explore ministries
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="size-7" />
                    </span>
                    <h3 className="mt-5 text-2xl text-ink">Welcome to the family!</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                      Thank you for sharing your decision, {form.name.split(' ')[0] || 'friend'}. A
                      leader from Prayer House will reach out to pray with you and help you take
                      the next step.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false)
                        setForm({ name: '', email: '', birthDate: '', message: '' })
                      }}
                      className="btn-outline mt-6"
                    >
                      Share another response
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand">
                        <Sparkles className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-brand uppercase">
                          Tell us your story
                        </p>
                        <h2 className="text-xl text-ink">I made a decision today</h2>
                      </div>
                    </div>

                    <form
                      className="mt-6 space-y-5"
                      onSubmit={(event) => {
                        event.preventDefault()
                        setSent(true)
                      }}
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                            Full name
                          </span>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={update('name')}
                            className="mt-2 h-12 w-full rounded-xl border border-line bg-cream/60 px-4 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                          />
                        </label>
                        <label className="block">
                          <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                            Email
                          </span>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={update('email')}
                            className="mt-2 h-12 w-full rounded-xl border border-line bg-cream/60 px-4 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                          Date of birth
                        </span>
                        <input
                          type="date"
                          value={form.birthDate}
                          onChange={update('birthDate')}
                          className="mt-2 h-12 w-full rounded-xl border border-line bg-cream/60 px-4 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                          What would you like us to know?
                        </span>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={update('message')}
                          className="mt-2 w-full resize-none rounded-xl border border-line bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                          placeholder="Share a little about your decision, or ask for prayer…"
                        />
                      </label>

                      <button type="submit" className="btn-primary w-full">
                        Connect with a leader <ArrowRight className="size-4" />
                      </button>
                      <p className="text-center text-[0.68rem] leading-relaxed text-muted">
                        We will only use your details to follow up on your decision. Your
                        information is kept confidential.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
