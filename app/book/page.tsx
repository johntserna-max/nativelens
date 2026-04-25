import Image from "next/image"
import Link from "next/link"

const bookingOptions = [
  {
    title: "Free Consultation",
    description: "Not sure which session is right for you? Let's chat and find the perfect fit.",
    url: "https://nativelensphotography.hbportal.co/schedule/69ea7ac059640b002a51841d",
  },
  {
    title: "Senior Experience Session",
    description: "Cinematic, personality-driven portraits for seniors preparing for their next chapter.",
    url: "https://nativelensphotography.hbportal.co/schedule/69ea7d98841f740028914e8a",
  },
  {
    title: "Elite Athlete Portrait Session",
    description: "Bold sports imagery with dramatic lighting, movement, and storytelling edge.",
    url: "https://nativelensphotography.hbportal.co/schedule/69ea7e392526030041db76b9",
  },
  {
    title: "Family Portrait Session",
    description: "Connection-focused portraits for families who want authentic, lasting images.",
    url: "https://nativelensphotography.hbportal.co/schedule/69ecd68ad92b4100320298b1",
  },
  {
    title: "Branding & Headshots",
    description: "Modern imagery for entrepreneurs, professionals, teams, and small businesses.",
    url: "https://nativelensphotography.hbportal.co/schedule/69ecd731458d0d0039e5fea2",
  },
]

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-[6vw] py-8">
        <Link href="/" className="flex items-center gap-3 text-gold hover:opacity-80 transition-opacity">
          <Image
            src="/native-lens-logo.png"
            alt="Native Lens Photography logo"
            width={46}
            height={46}
            className="w-[46px] h-[46px] object-cover rounded-full"
          />
          <span className="uppercase tracking-[0.24em] text-sm">Native Lens</span>
        </Link>
      </div>

      <section className="px-[6vw] py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Book Your Session
          </h1>
          <p className="text-muted-foreground text-lg">
            Select the session type that best fits your needs, or schedule a free consultation to discuss your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {bookingOptions.map((option) => (
            <a
              key={option.title}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-white/10 rounded-lg hover:border-gold/50 hover:bg-white/[0.02] transition-all group"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2">
                {option.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {option.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="text-gold text-sm uppercase tracking-widest hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
