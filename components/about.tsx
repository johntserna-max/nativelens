import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Authentic",
    description: "Real moments. Real stories.",
  },
  {
    title: "Culture",
    description: "Rooted in heritage. Focused on legacy.",
  },
  {
    title: "Purpose",
    description: "More than photos. It's about meaning.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-[6vw] bg-ink">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src="/photographer.jpg"
            alt="John Serna, Native Lens Photographer"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-1">
          <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-3">
            About Native Lens
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
            Built around identity, purpose, and story.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Native Lens is a photography brand rooted in intentional imagery, real connection, and meaningful storytelling. Every session is designed to feel personal, elevated, and clear from first inquiry to final delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Use this space for your personal story: your faith, your heritage, your creative eye, and why you created Native Lens.
          </p>
          <Button 
            asChild
            variant="outline"
            className="border-gold text-white bg-black/25 hover:bg-gold hover:text-black text-xs font-extrabold tracking-[0.18em] uppercase px-6 py-5 transition-transform hover:-translate-y-0.5"
          >
            <Link href="#contact">Learn More About Me</Link>
          </Button>
        </div>

        {/* Values Card */}
        <div className="bg-black/50 border border-line rounded-lg p-6 space-y-6">
          {values.map((value) => (
            <div key={value.title} className="border-l-2 border-gold pl-4">
              <strong className="text-white block mb-1">{value.title}</strong>
              <span className="text-muted-foreground text-sm">{value.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
