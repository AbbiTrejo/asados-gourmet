import { Flame, Globe, Send, Share2 } from 'lucide-react'

const nav = [
  { label: 'Servicios', href: '#services' },
  { label: 'Paquetes', href: '#packages' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Reseñas', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

const socials = [
  { label: 'Síguenos en línea', href: '#', icon: Globe },
  { label: 'Escríbenos', href: '#', icon: Send },
  { label: 'Compartir', href: '#', icon: Share2 },
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
              Catering de asado premium al fuego, creando banquetes inolvidables
              para las mejores reuniones de la vida.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-serif text-lg font-semibold text-white">Explorar</h3>
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
            <h3 className="font-serif text-lg font-semibold text-white">Sigue el Fuego</h3>
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
            <p className="mt-6 text-sm">hola@asadosgourmet.com</p>
            <p className="text-sm">(555) 012-3456</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Asados Gourmet. Todos los derechos reservados.</p>
          <p>Hecho con fuego y pasión.</p>
        </div>
      </div>
    </footer>
  )
}
