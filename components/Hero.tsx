import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12 md:py-24 max-w-7xl mx-auto min-h-[80vh] justify-center">
      {/* Badge: Scaled down text for mobile */}
      <div className="inline-block border border-[#E5D9B6] rounded-full bg-[#FAF7EF] px-4 py-1.5 mb-8 shadow-sm">
        <p className="text-[#B39359] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          Turning Ideas Into Real Systems
        </p>
      </div>

      {/* Brand Name: Fluid typography is key here */}
      <h1 className="text-[#2D2D2D] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1]">
        Lumora Tech Labs
      </h1>

      {/* Subtext: max-w-md ensures it doesn't get too wide on desktop */}
      <p className="text-[#6B6658] mt-6 text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl leading-relaxed">
        Building intelligent, scalable software with precision and clarity.
      </p>

      {/* Buttons: "flex-col" for mobile, "sm:flex-row" for desktop */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
        <Link href="/#projects" className="w-full sm:w-auto">
          <Button className="bg-[#2D2D2D] text-[#FAF7EF] hover:bg-[#454545] h-14 sm:h-16 px-10 rounded-full text-base md:text-lg transition-all w-full">
            View Our Work
          </Button>
        </Link>

        <Link href="/contact" className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="border-[#E5D9B6] text-[#2D2D2D] hover:bg-[#E5D9B6]/10 h-14 sm:h-16 px-10 rounded-full text-base md:text-lg transition-all w-full"
          >
            Get in Touch
          </Button>
        </Link>
      </div>

      {/* Decorative Scroll Hint */}
      <div className="mt-20 flex flex-col items-center gap-3 animate-pulse">
        <p className="text-[#6B6658] text-[10px] uppercase tracking-[0.4em] font-semibold">
          What we build
        </p>
        <div className="relative h-16 w-[1.5px] overflow-hidden">
          <div className="absolute inset-0 bg-[#B39359]/20" />
          <div className="absolute inset-0 bg-[#B39359] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}