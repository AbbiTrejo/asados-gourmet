import { Flame, Globe, Send, Share2 } from 'lucide-react'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Follow us online', href: '#', icon: Globe },
  { label: 'Message us', href: '#', icon: Send },
  { label: 'Share', href: '#', icon: Share2 },
]

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-serif text-xl font-bold text-white">
              <Flame className="h-6 w-6 text-primary" aria-hidden="true" />
              Asados Gourmet
            </a>
            <p className="mt-4 max-w-xs leading-relaxed">
              Premium live-fire barbecue catering, crafting unforgettable feasts
              for life&apos;s finest gatherings.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-serif text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-serif text-lg font-semibold text-white">Follow the Fire</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm">hello@asadosgourmet.com</p>
            <p className="text-sm">(555) 012-3456</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Asados Gourmet. All rights reserved.</p>
          <p>Crafted with fire &amp; passion.</p>
        </div>
      </div>
    </footer>
  )
}
