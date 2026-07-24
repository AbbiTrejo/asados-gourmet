'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday',
  'Private Dinner',
  'Anniversary',
  'Other',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Plan Your Asado
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
              Tell us about your event and we&apos;ll craft a custom proposal
              within 24 hours. No obligations, just great fire and flavor.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-muted-foreground">(555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-muted-foreground">hello@asadosgourmet.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">Service Area</p>
                  <p className="text-muted-foreground">Greater metro area &amp; beyond</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-bold text-card-foreground">
                    Request Received!
                  </h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will be in touch within
                    24 hours to start planning your unforgettable asado.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-primary hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Event Date" htmlFor="date">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Number of Guests" htmlFor="guests">
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        required
                        placeholder="e.g. 80"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Type of Event" htmlFor="eventType">
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        defaultValue=""
                        className="form-input"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your event, menu preferences, or any questions..."
                      className="form-input resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    Request Your Quote
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
