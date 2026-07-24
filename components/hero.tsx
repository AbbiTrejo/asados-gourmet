import { Flame, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-asado.png"
          alt="Cortes premium de carne y chorizo asándose sobre brasas encendidas"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Flame className="h-4 w-4 text-primary" aria-hidden="true" />
            Catering de Asado Premium
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Fuego, Sabor y Encuentros Inolvidables
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/80">
            Desde cortes seleccionados a mano hasta brasas lentas, Asados Gourmet
            crea banquetes al fuego que convierten cualquier ocasión en una
            celebración para recordar.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Solicitar Cotización
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Ver Paquetes
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-white/70">Eventos Realizados</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="font-serif text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-white/70">Años al Fuego</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="flex items-center gap-1">
                <p className="font-serif text-3xl font-bold text-white">4.9</p>
                <Star className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm text-white/70">Calificación de Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
