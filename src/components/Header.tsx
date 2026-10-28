import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Container } from './Container'
import { navLinks, resourceLinks, site } from '../data/site'

function navClass({ isActive }: { isActive: boolean }) {
  return `relative py-3 text-[0.82rem] font-medium tracking-wide whitespace-nowrap transition-colors ${
    isActive ? 'text-brand' : 'text-ink-soft hover:text-brand'
  }`
}

function navUnderline({ isActive }: { isActive: boolean }) {
  return isActive ? 'scale-x-100' : 'scale-x-0'
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setOpen(false)
    window.addEventListener('popstate', closeMenu)
    return () => window.removeEventListener('popstate', closeMenu)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="bg-brand-dark text-cream/80">
        <Container className="flex h-10 items-center justify-between gap-6 text-[0.72rem] tracking-wide">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-gold" aria-hidden="true" />
              Sundays at 11:00
            </span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-1.5 transition hover:text-gold-soft sm:inline-flex"
            >
              <MapPin className="size-3.5 text-gold" aria-hidden="true" />
              {site.address.street}, {site.address.city}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="hidden h-10 items-center gap-1.5 transition hover:text-gold-soft md:inline-flex"
            >
              <Phone className="size-3.5 text-gold" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-10 items-center gap-1.5 transition hover:text-gold-soft"
            >
              <Mail className="size-3.5 text-gold" aria-hidden="true" />
              <span className="hidden sm:inline">{site.email}</span>
              <span className="sm:hidden">Email us</span>
            </a>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur-md transition-shadow ${
          scrolled ? 'border-line shadow-soft' : 'border-transparent'
        }`}
      >
        <Container className="flex h-20 items-center justify-between gap-3 sm:gap-6">
          <Link to="/" className="shrink-0">
            <BrandMark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-4 lg:flex xl:gap-7">
            {navLinks.slice(0, 5).map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${navUnderline(
                        { isActive },
                      )}`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 py-3 text-[0.82rem] font-medium tracking-wide whitespace-nowrap text-ink-soft transition-colors group-hover:text-brand group-focus-within:text-brand"
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-line bg-cream p-2 shadow-lift">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-ink-soft transition hover:bg-sand hover:text-brand"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5 opacity-50" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/give" className="btn-primary hidden sm:inline-flex">
              Give
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-line text-ink transition hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-line px-5">
            <BrandMark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-line text-ink transition hover:border-brand hover:text-brand"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-8">
            <nav aria-label="Mobile" className="flex flex-col divide-y divide-line/70">
              {[...navLinks, ...resourceLinks].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 font-display text-2xl transition ${
                      isActive ? 'text-brand' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight className="size-5 text-muted" />
                </NavLink>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <Link to="/give" onClick={() => setOpen(false)} className="btn-primary w-full">
                Give online
              </Link>
              <a href={site.phoneHref} className="btn-outline w-full">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-sand/70 p-5 text-sm text-ink-soft">
              <p className="font-semibold text-ink">Join us this Sunday</p>
              <p className="mt-1">11:00 – 13:00 · {site.address.street}</p>
              <p>
                {site.address.zip} {site.address.city}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand"
              >
                Get directions <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
