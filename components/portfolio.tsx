import Link from "next/link"

const portfolioItems = [
  {
    title: "Senior Portraits",
    description: "Celebrate this season with timeless portraits.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Athlete Portraits",
    description: "Built for athletes. Captured with edge.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Portraits",
    description: "Your people. Your story. Beautifully captured.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Branding & Headshots",
    description: "Stand out. Show up. Be remembered.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-[6vw]">
      <div className="text-center mb-12">
        <p className="text-gold font-extrabold uppercase tracking-[0.28em] text-xs mb-3">
          Explore the experience
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Portfolio categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {portfolioItems.map((item) => (
          <article 
            key={item.title}
            className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
              <Link 
                href="#booking" 
                className="text-gold text-sm font-semibold hover:underline"
              >
                View packages &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
