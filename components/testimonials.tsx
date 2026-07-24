import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Asados Gourmet convirtió nuestra boda en un banquete del que los invitados aún hablan. El parrillero fue puro espectáculo y los sabores, increíbles.',
    name: 'Sofía y Mateo',
    role: 'Boda, 180 invitados',
  },
  {
    quote:
      'El equipo de catering más profesional que hemos contratado. Desde el montaje hasta el último bocado, todo fue impecable. El bife quedó perfecto.',
    name: 'Daniel Reyes',
    role: 'Gala Corporativa',
  },
  {
    quote:
      'Nuestro cumpleaños en el jardín se sintió como un restaurante de cinco estrellas. Chimichurri fresco, cortes increíbles y cero limpieza para nosotros. Totalmente vale la pena.',
    name: 'Carla Méndez',
    role: 'Celebración Privada',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-neutral-950 py-24 lg:py-32">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/services-fire.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
            Amado por Nuestros Invitados
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-white/70">
            Palabras reales de los anfitriones que confiaron en nosotros para
            sus reuniones más importantes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-label="Calificado 5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-pretty text-white/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-serif text-lg font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
