const services = [
  {
    price: "Starting at $395",
    title: "Senior Experience Session",
    description: "Cinematic, personality-driven portraits for seniors preparing for their next chapter.",
  },
  {
    price: "Starting at $495",
    title: "Elite Athlete Portrait Session",
    description: "Bold sports imagery with dramatic lighting, movement, and storytelling edge.",
  },
  {
    price: "Starting at $350",
    title: "Family Portrait Session",
    description: "Connection-focused portraits for families who want authentic, lasting images.",
  },
  {
    price: "Starting at $250",
    title: "Branding & Headshots",
    description: "Modern imagery for entrepreneurs, professionals, teams, and small businesses.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-[6vw]">
      <div className="text-center mb-12">
        <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-3">
          Investment
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Session options
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <article 
            key={service.title}
            className="bg-ink border border-line rounded-lg p-6 hover:border-gold/50 transition-colors"
          >
            <p className="text-gold font-semibold text-sm mb-2">{service.price}</p>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
