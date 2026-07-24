import { Check, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const packages = [
  {
    name: 'The Backyard',
    price: '$38',
    unit: 'per guest',
    description: 'Intimate gatherings and family celebrations.',
    features: [
      'Choice of 2 premium cuts',
      'Grilled seasonal vegetables',
      '2 artisan sides & fresh salad',
      'House-made chimichurri',
      'On-site grill master',
    ],
    featured: false,
  },
  {
    name: 'The Signature',
    price: '$62',
    unit: 'per guest',
    description: 'Our most-loved experience for weddings & milestones.',
    features: [
      'Choice of 4 premium cuts',
      'Provoleta & grilled vegetables',
      '4 artisan sides & 2 salads',
      'Chimichurri & salsa bar',
      'Dedicated service staff',
      'Full setup & cleanup',
    ],
    featured: true,
  },
  {
    name: 'The Gran Asado',
    price: '$95',
    unit: 'per guest',
    description: 'A lavish live-fire feast for the finest occasions.',
    features: [
      'Full parrilla spread of 6+ cuts',
      'Whole roasted specialties',
      'Gourmet sides & grazing table',
      'Wine pairing & cocktails',
      'Dessert station',
      'Premium tableware & staff',
    ],
    featured: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Packages
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Choose Your Feast
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Transparent, all-inclusive pricing. Every package can be tailored to
            your menu, dietary needs and guest count.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-start">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300',
                  pkg.featured
                    ? 'border-primary bg-card shadow-2xl lg:-mt-4 lg:pb-12'
                    : 'border-border bg-card hover:-translate-y-1 hover:shadow-xl',
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-lg">
                    <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                    Most Popular
                  </span>
                )}

                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-serif text-5xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{pkg.unit}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105',
                    pkg.featured
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'border border-border bg-background text-foreground hover:border-primary/50',
                  )}
                >
                  Book This Package
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
