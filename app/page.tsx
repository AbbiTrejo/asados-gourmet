import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Packages } from '@/components/packages'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
