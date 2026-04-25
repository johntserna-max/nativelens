import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Booking } from "@/components/booking"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
