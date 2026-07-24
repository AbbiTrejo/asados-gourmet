import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const images = [
  { src: '/images/gallery-1.png', alt: 'Grilled ribeye steak with rosemary on a wooden board', span: 'lg:row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Grill master tending a large parrilla at an event', span: '' },
  { src: '/images/gallery-4.png', alt: 'Chorizo sausages grilling over flames', span: '' },
  { src: '/images/gallery-3.png', alt: 'Elegant outdoor barbecue dinner table setting', span: 'lg:col-span-2' },
  { src: '/images/gallery-5.png', alt: 'Grilled provoleta cheese and vegetables in a skillet', span: '' },
  { src: '/images/gallery-6.png', alt: 'Guests enjoying an upscale outdoor barbecue party at dusk', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Straight From the Coals
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            A glimpse of the flavor, fire and moments we bring to every table.
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
