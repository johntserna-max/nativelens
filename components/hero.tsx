import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"



export function Hero() {
  return (
    <section 
      className="relative min-h-[760px] flex items-center p-[7vw]"
      style={{
        background: `linear-gradient(90deg, #000 0%, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.2) 100%), url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=80') center/cover`
      }}
    >
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(201,151,84,0.18), transparent 28%)'
        }}
      />

      <div className="relative max-w-[660px]">
        <Image
          src="/native-lens-logo.png"
          alt="Native Lens Photography logo"
          width={360}
          height={360}
          className="w-[min(360px,78vw)] mb-6"
          priority
        />

        <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-4">
          Intentional. Original. Purposeful.
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 text-balance">
          Stories worth remembering.
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[540px] mb-8">
          Cinematic photography that captures who you are, where you&apos;re from, and where you&apos;re going. Rooted in culture. Driven by purpose.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button 
            asChild
            className="bg-gradient-to-br from-gold to-gold-light text-[#111] font-extrabold text-xs tracking-[0.18em] uppercase px-6 py-5 hover:-translate-y-0.5 transition-transform"
          >
            <Link href="#portfolio">View Portfolio</Link>
          </Button>

          <Button 
            asChild
            variant="outline"
            className="border-gold text-white bg-black/25 hover:bg-gold hover:text-black text-xs font-extrabold tracking-[0.18em] uppercase px-6 py-5 transition-transform hover:-translate-y-0.5"
          >
            <Link href="/book">
              Book Your Session
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
