"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Investment" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Contact" },
]



export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 px-[6vw] py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.08]">
      <Link 
        href="#home" 
        className="flex items-center gap-3 text-gold uppercase tracking-[0.24em] text-sm"
        aria-label="Native Lens home"
      >
        <Image
          src="/native-lens-logo.png"
          alt="Native Lens Photography logo"
          width={46}
          height={46}
          className="w-[46px] h-[46px] object-cover rounded-full"
        />
        <span className="hidden sm:inline">Native Lens</span>
      </Link>

      <nav className="hidden md:flex gap-7 text-xs font-bold tracking-[0.16em] uppercase" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className="opacity-80 hover:text-gold hover:opacity-100 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button 
        asChild
        variant="outline"
        className="border-gold text-white bg-black/25 hover:bg-gold hover:text-black text-xs font-extrabold tracking-[0.18em] uppercase px-6 py-5 transition-transform hover:-translate-y-0.5"
      >
        <Link href="/book">
          Book Now
        </Link>
      </Button>
    </header>
  )
}
