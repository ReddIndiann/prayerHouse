import { useState, type ChangeEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const subjects = [
  'General enquiry',
  'Planning a visit',
  'Prayer request',
  'Joining a ministry',
  'Giving & partnership',
]

export function Contact() {
  usePageMeta(
    'Contact us — Prayer House Church Düsseldorf',
    'Visit Prayer House Church at Carl-Severing-Straße 4, 40595 Düsseldorf. Call +49 172 2632526 or send us a message.',
  )

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  })

  const update = (field: keyof typeof form) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((current) => ({ ...current, [field]: event.target.value }))

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            We would love to{' '}
            <span className="font-script font-normal text-gold-soft">meet</span> you.
          </>
        }
        description="A question, a prayer request or a first visit — reach out and someone from the church family will get back to you."
        image="/images/church.webp"
        imageAlt="Prayer House Church building"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                label: 'Our location',
                value: `${site.address.street}, ${site.address.zip} ${site.address.city}`,
                href: site.mapsUrl,
                external: true,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: site.phone,
                href: site.phoneHref,
              },
              {
                icon: Mail,
                label: 'Email',
                value: site.email,
                href: `mailto:${site.email}`,
              },
              {
                icon: Clock,
                label: 'Service hours',
                value: 'Sunday 11:00 – 13:00',
              },
            ].map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 70}
                className="rounded-2xl border border-line bg-white/60 p-5"
              >
                <span className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand">
                  <item.icon className="size-4" aria-hidden="true" />
                </span>
                <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="mt-1 flex min-h-9 items-center text-sm font-medium text-ink transition hover:text-brand"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Send a message"
                title="How can we pray for you?"
                description="Fill in the form and we will be in touch. Prayer requests are treated with care and confidence."
              />

              <div className="mt-8 overflow-hidden rounded-3xl border border-line">
                <iframe
                  title="Map showing Prayer House Church Düsseldorf"
                  src={site.mapEmbed}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex items-start gap-3 bg-cream p-5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <div className="text-sm">
                    <p className="font-semibold text-ink">{site.name}</p>
                    <p className="mt-1 text-muted">
                      {site.address.street}, {site.address.zip} {site.address.city}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Railway construction may affect routes until December 2026 — please allow
                      extra travel time.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="size-7" />
                    </span>
                    <h3 className="mt-5 text-2xl text-ink">Message received</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                      Thank you for reaching out, {form.name.split(' ')[0] || 'friend'}. Someone
                      from Prayer House will be in touch soon. God bless you.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false)
                        setForm({ name: '', email: '', subject: subjects[0], message: '' })
                      }}
                      className="btn-outline mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(event) => {
                      event.preventDefault()
                      setSent(true)
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                          Your name
                        </span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={update('name')}
                          className="mt-2 h-12 w-full rounded-xl border border-line bg-cream/60 px-4 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                          placeholder="Jane Doe"
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
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                        Subject
                      </span>
                      <select
                        value={form.subject}
                        onChange={update('subject')}
                        className="mt-2 h-12 w-full rounded-xl border border-line bg-cream/60 px-4 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
                        Message
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        className="mt-2 w-full resize-none rounded-xl border border-line bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                        placeholder="Tell us a little about how we can help…"
                      />
                    </label>

                    <button type="submit" className="btn-primary w-full">
                      Send message <Send className="size-4" />
                    </button>
                    <p className="text-center text-[0.72rem] leading-relaxed text-muted">
                      By sending this message you agree that we may contact you about your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
