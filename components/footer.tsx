import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-[6vw] border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <Image
          src="/native-lens-logo.png"
          alt="Native Lens Photography logo"
          width={64}
          height={64}
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <strong className="text-gold block text-lg">Native Lens Photography</strong>
          <p className="text-muted-foreground text-sm">Intentional. Original. Purposeful.</p>
          <p className="text-muted-foreground text-xs mt-2">
            &copy; {new Date().getFullYear()} Native Lens Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
