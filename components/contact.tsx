import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-[6vw] border-t border-line">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-3">
          Ready to connect?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
          Let&apos;s create something powerful together.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Add your email, phone number, Instagram, Facebook, and TikTok here.
        </p>

        <Button 
          asChild
          className="bg-gradient-to-br from-gold to-gold-light text-[#111] font-extrabold text-xs tracking-[0.18em] uppercase px-8 py-5 hover:-translate-y-0.5 transition-transform"
        >
          <Link href="/book">
            Start Booking
          </Link>
        </Button>
      </div>
    </section>
  )
}
