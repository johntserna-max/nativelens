import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const CONSULTATION_URL = "https://nativelensphotography.hbportal.co/schedule/69ea7ac059640b002a51841d"

const features = [
  {
    title: "Real-time availability",
    description: "See open dates instantly.",
  },
  {
    title: "Secure your date",
    description: "Pay your retainer online.",
  },
  {
    title: "Instant confirmation",
    description: "HoneyBook handles the flow.",
  },
]

const bookingFeatures = [
  "Live availability",
  "Instant booking",
  "Secure online payment",
  "Automatic confirmation",
]

export function Booking() {
  return (
    <section id="booking" className="py-20 px-[6vw] bg-gradient-to-br from-ink via-black to-ink">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-3">
            Secure your session
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
            Choose your session and lock in your date in seconds.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Only a limited number of sessions are available each month. A retainer is required to secure your date.
          </p>

          <div className="space-y-6 mb-8">
            {features.map((feature) => (
              <div key={feature.title} className="border-l-2 border-gold pl-4">
                <strong className="text-white block mb-1">{feature.title}</strong>
                <span className="text-muted-foreground text-sm">{feature.description}</span>
              </div>
            ))}
          </div>

          <Button 
            asChild
            className="w-full bg-gradient-to-br from-gold to-gold-light text-[#111] font-extrabold text-xs tracking-[0.18em] uppercase px-6 py-5 hover:-translate-y-0.5 transition-transform"
          >
            <a href={CONSULTATION_URL} target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
          </Button>
        </div>

        {/* Booking card */}
        <div className="bg-ink border border-line rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Book directly with Native Lens
          </h3>
          <p className="text-muted-foreground text-sm mb-6">Powered by HoneyBook</p>

          <ul className="space-y-3 mb-8">
            {bookingFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            asChild
            variant="outline"
            className="w-full border-gold text-white bg-black/25 hover:bg-gold hover:text-black text-xs font-extrabold tracking-[0.18em] uppercase px-6 py-5 transition-transform hover:-translate-y-0.5"
          >
            <a href={CONSULTATION_URL} target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
