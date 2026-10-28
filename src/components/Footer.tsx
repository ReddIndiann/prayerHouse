import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { BrandMark } from './BrandMark'
import { SocialIcon } from './SocialIcon'
import { Container } from './Container'
import { navLinks, resourceLinks, site } from '../data/site'

const YEAR = new Date().getFullYear()

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-[#141110] text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <BrandMark tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">{site.mission}</p>

          <div className="mt-6 flex items-center gap-2">
            {site.socials.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Prayer House Church on ${social.label}`}
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon name={social.label} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
            Explore
          </h3>
          <ul className="mt-3 space-y-0.5 text-sm sm:mt-5 sm:space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-9 items-center text-cream/65 transition hover:text-cream sm:min-h-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
            Resources
          </h3>
          <ul className="mt-3 space-y-0.5 text-sm sm:mt-5 sm:space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-9 items-center text-cream/65 transition hover:text-cream sm:min-h-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
            Visit us
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-cream">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}, {site.address.country}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={site.phoneHref} className="inline-flex min-h-9 items-center hover:text-cream sm:min-h-0">
                {site.phone}
              </a>
            </li>
            <li className="pl-7">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-9 items-center hover:text-cream sm:min-h-0"
              >
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-xs leading-relaxed text-cream/60">
              Sunday service · 11:00 – 13:00
              <br />
              (one service only until December 2026)
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-md">
            {subscribed ? (
              <p className="text-sm text-gold-soft" role="status">
                Thank you — you’re on the list. God bless you.
              </p>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (email.trim()) setSubscribed(true)
                }}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address for church updates
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Get church updates by email"
                  className="h-11 w-full rounded-full border border-cream/15 bg-cream/5 px-5 text-sm text-cream placeholder:text-cream/55 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase transition hover:bg-gold-soft"
                >
                  Subscribe <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>

          <p className="text-xs text-cream/55">
            © {YEAR} {site.name} {site.city}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
