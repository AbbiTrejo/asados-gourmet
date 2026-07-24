import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const images = [
  { src: '/images/gallery-1.png', alt: 'Bife de chorizo a la parrilla con romero sobre una tabla de madera', span: 'lg:row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Parrillero atendiendo una gran parrilla en un evento', span: '' },
  { src: '/images/gallery-4.png', alt: 'Chorizos asándose sobre las llamas', span: '' },
  { src: '/images/gallery-3.png', alt: 'Elegante mesa de cena al aire libre para un asado', span: 'lg:col-span-2' },
  { src: '/images/gallery-5.png', alt: 'Provoleta y verduras a la parrilla en una sartén de hierro', span: '' },
  { src: '/images/gallery-6.png', alt: 'Invitados disfrutando de una fiesta de asado al atardecer', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Galería
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Directo de las Brasas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Un vistazo al sabor, el fuego y los momentos que llevamos a cada mesa.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 70}
              className={cn('group overflow-hidden rounded-2xl', image.span)}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
