import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Asados Gourmet turned our wedding into a feast our guests still talk about. The grill master was pure showmanship and the flavors were unreal.',
    name: 'Sofia & Mateo',
    role: 'Wedding, 180 guests',
  },
  {
    quote:
      'The most professional catering team we have hired. From setup to the final bite, everything was flawless. The ribeye was cooked to perfection.',
    name: 'Daniel Reyes',
    role: 'Corporate Gala',
  },
  {
    quote:
      'Our backyard birthday felt like a five-star restaurant. Fresh chimichurri, incredible cuts, and zero cleanup for us. Absolutely worth it.',
    name: 'Carla Mendez',
    role: 'Private Celebration',
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
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
            Loved by Our Guests
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-white/70">
            Real words from the hosts who trusted us with their most important
            gatherings.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-label="Rated 5 out of 5 stars">
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
