import { Beef, Flame, Users, UtensilsCrossed, Truck, Wine } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Flame,
    title: 'Live-Fire Grilling',
    description:
      'Our grill masters cook on-site over open flame and embers, filling your event with the aroma and theater of authentic asado.',
  },
  {
    icon: Beef,
    title: 'Premium Cuts',
    description:
      'Hand-selected, ethically sourced beef, lamb, pork and chorizo, aged and seasoned to bring out deep, smoky flavor.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Full-Service Menus',
    description:
      'Curated menus with grilled vegetables, artisan sides, fresh salads and chimichurri made from scratch daily.',
  },
  {
    icon: Users,
    title: 'Events of Any Size',
    description:
      'From intimate backyard dinners to weddings and corporate galas of 500+ guests, we scale the fire to fit the occasion.',
  },
  {
    icon: Truck,
    title: 'Full Setup & Cleanup',
    description:
      'We handle equipment, staffing, service and cleanup so you can relax and enjoy your celebration stress-free.',
  },
  {
    icon: Wine,
    title: 'Pairings & Extras',
    description:
      'Optional wine pairings, dessert stations and signature cocktails to complete a truly gourmet experience.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Crafted Around the Flame
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Every detail of your event is built on decades of grilling mastery
            and a passion for hospitality.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
