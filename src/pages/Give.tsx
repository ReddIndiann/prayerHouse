import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  HandCoins,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const funds = [
  {
    icon: HandCoins,
    title: 'Tithes & offerings',
    body: 'Sustain the weekly ministry of the Word, worship and the everyday life of the house.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    body: 'Stand with the church monthly as we reach Düsseldorf through evangelism and fellowship.',
  },
  {
    icon: Building2,
    title: 'Building & missions',
    body: 'Help us maintain a welcoming home and extend the work beyond our walls.',
  },
  {
    icon: Landmark,
    title: 'SOS collaboration',
    body: 'Support our work with SOS, an NGO based in Düsseldorf, bringing hope to communities.',
  },
]

const amounts = [20, 50, 100, 250]

export function Give() {
  usePageMeta(
    'Give — Prayer House Church Düsseldorf',
    'Partner with Prayer House Church through tithes, offerings and partnership. Every gift supports evangelism, ministry and our work with SOS Düsseldorf.',
  )

  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [amount, setAmount] = useState<number | 'custom'>(50)
  const [customAmount, setCustomAmount] = useState('')

  const selectedAmount = amount === 'custom' ? customAmount : String(amount)

  return (
    <>
      <PageHero
        eyebrow="Give"
        title={
          <>
            Generosity builds the{' '}
            <span className="font-script font-normal text-gold-soft">house</span>.
          </>
        }
        description="It does not matter how much you give — God appreciates any amount. Your generosity keeps the doors open and the work of the Gospel moving."
        image="/images/feature-ministry.webp"
        imageAlt="Members serving together"
        compact
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Why we give"
                title="Giving is worship, not a transaction."
                description="We give because God first gave. Every gift — however small — becomes part of a story of grace in someone else’s life."
              />

              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-display text-xl leading-snug text-ink">
                  “Each of you should give what you have decided in your heart to give, not
                  reluctantly or under compulsion, for God loves a cheerful giver.”
                </p>
                <footer className="mt-3 text-[0.72rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  2 Corinthians 9:7
                </footer>
              </blockquote>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {funds.map((fund) => (
                  <div key={fund.title} className="rounded-2xl border border-line bg-white/60 p-5">
                    <span className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand">
                      <fund.icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink">{fund.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{fund.body}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                Prayer House Church is a registered congregation in Düsseldorf. Giving is handled
                through our official, secure giving page.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-brand uppercase">
                      Give online
                    </p>
                    <h2 className="mt-1.5 text-2xl text-ink">Make a gift</h2>
                  </div>
                  <Sparkles className="size-6 text-gold" aria-hidden="true" />
                </div>

                <div className="mt-6">
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
                    Frequency
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 rounded-full bg-sand/70 p-1">
                    {[
                      { value: 'once', label: 'One-time' },
                      { value: 'monthly', label: 'Monthly' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFrequency(option.value as 'once' | 'monthly')}
                        aria-pressed={frequency === option.value}
                        className={`rounded-full py-2.5 text-[0.72rem] font-semibold tracking-wide transition ${
                          frequency === option.value
                            ? 'bg-brand text-cream'
                            : 'text-ink-soft hover:text-brand'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
                    Amount (EUR)
                  </p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {amounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value)}
                        aria-pressed={amount === value}
                        className={`rounded-xl border py-3 text-sm font-semibold tabular-nums transition ${
                          amount === value
                            ? 'border-brand bg-brand/5 text-brand'
                            : 'border-line text-ink-soft hover:border-brand/40'
                        }`}
                      >
                        €{value}
                      </button>
                    ))}
                  </div>

                  <label className="mt-3 block">
                    <span className="sr-only">Custom amount in euros</span>
                    <div className="flex items-center rounded-xl border border-line px-4 focus-within:border-brand">
                      <span className="text-sm text-muted">€</span>
                      <input
                        type="number"
                        min={1}
                        inputMode="numeric"
                        placeholder="Other amount"
                        value={customAmount}
                        onFocus={() => setAmount('custom')}
                        onChange={(event) => {
                          setCustomAmount(event.target.value)
                          setAmount('custom')
                        }}
                        className="h-12 w-full bg-transparent px-2 text-sm text-ink outline-none placeholder:text-muted/70"
                      />
                    </div>
                  </label>
                </div>

                <div className="mt-6 rounded-xl bg-sand/60 p-4 text-sm text-ink-soft">
                  <div className="flex items-center justify-between">
                    <span>Your gift</span>
                    <span className="font-semibold text-brand">
                      {selectedAmount ? `€${selectedAmount}` : '€—'}
                      {frequency === 'monthly' ? ' / month' : ''}
                    </span>
                  </div>
                </div>

                <a
                  href={site.giveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-4 w-full"
                >
                  Continue to secure giving <ArrowUpRight className="size-4" />
                </a>
                <p className="mt-3 text-center text-[0.72rem] leading-relaxed text-muted">
                  You will be redirected to our official giving page to complete the gift securely.
                </p>

                <div className="mt-6 border-t border-line pt-5 text-xs text-muted">
                  <p>
                    Prefer another way? You can give in person at any service, or{' '}
                    <Link to="/contact" className="font-semibold text-brand hover:underline">
                      contact us
                    </Link>{' '}
                    for bank details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-sand/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Evangelism',
                body: 'Taking the Gospel to the streets, homes and neighbourhoods of Düsseldorf.',
              },
              {
                title: 'Weekly ministry',
                body: 'Worship, teaching, discipleship and a warm welcome every single Sunday.',
              },
              {
                title: 'Community care',
                body: 'Working with SOS Düsseldorf to extend practical support and hope.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <p className="font-display text-4xl text-brand/25">0{index + 1}</p>
                <h3 className="mt-3 text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-cream p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-soft">
              Want to give toward a specific need or set up a monthly partnership?
            </p>
            <Link to="/contact" className="link-underline shrink-0 text-brand">
              Speak with us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
