import { Beef, Flame, Users, UtensilsCrossed, Truck, Wine } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Flame,
    title: 'Asado en Vivo',
    description:
      'Nuestros parrilleros cocinan en el lugar sobre fuego y brasas, llenando tu evento con el aroma y el espectáculo del asado auténtico.',
  },
  {
    icon: Beef,
    title: 'Cortes Premium',
    description:
      'Carne, cordero, cerdo y chorizo seleccionados a mano y de origen responsable, madurados y sazonados para lograr un sabor profundo y ahumado.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menús Completos',
    description:
      'Menús cuidados con verduras a la parrilla, guarniciones artesanales, ensaladas frescas y chimichurri hecho a diario.',
  },
  {
    icon: Users,
    title: 'Eventos de Todo Tamaño',
    description:
      'Desde cenas íntimas en el jardín hasta bodas y galas corporativas de más de 500 invitados, adaptamos el fuego a la ocasión.',
  },
  {
    icon: Truck,
    title: 'Montaje y Limpieza',
    description:
      'Nos encargamos del equipo, el personal, el servicio y la limpieza para que disfrutes tu celebración sin preocupaciones.',
  },
  {
    icon: Wine,
    title: 'Maridajes y Extras',
    description:
      'Maridajes de vino opcionales, estaciones de postres y cócteles de autor para completar una experiencia verdaderamente gourmet.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Qué Hacemos
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Creado en Torno al Fuego
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Cada detalle de tu evento se construye sobre décadas de maestría
            en la parrilla y una pasión por la hospitalidad.
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
