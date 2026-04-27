import DecryptedText from '@/components/DecryptedText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-7xl mx-auto min-h-[90vh] justify-center relative">
      {/* Background light leak effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-linear-to-b from-[#B39359]/5 to-transparent blur-3xl -z-10" />

      <div className="inline-block border border-[#E5D9B6] rounded-full bg-[#FAF7EF] px-5 py-2 mb-10 shadow-sm animate-fade-in">
        <p className="text-[#B39359] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
          Turning Ideas Into Real Systems
        </p>
      </div>

      <h1 className="text-[#2D2D2D] text-5xl sm:text-7xl lg:text-9xl font-serif tracking-tight leading-[1.05] mb-8">
        <DecryptedText
          text="Lumora Tech Labs"
          animateOn="view"
          speed={60}
          maxIterations={15}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          encryptedClassName="opacity-50 text-[#B39359]"
        />
      </h1>

      <p className="text-[#6B6658] text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 font-light">
        Building intelligent, scalable software with precision and clarity.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
        <Button
          asChild
          className="bg-[#2D2D2D] text-[#FAF7EF] hover:bg-[#454545] h-16 px-12 rounded-full text-lg w-full sm:w-auto transition-all duration-300"
        >
          <Link href="/work">View Our Work</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-[#E5D9B6] text-[#2D2D2D] hover:bg-[#E5D9B6]/20 h-16 px-12 rounded-full text-lg w-full sm:w-auto transition-all duration-300"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>

      {/* Decorative Scroll Hint */}
      <div className="mt-24 flex flex-col items-center gap-4">
        <p className="text-[#B39359] text-[10px] uppercase tracking-[0.4em] font-semibold opacity-60">
          What we build
        </p>
        <div className="relative h-20 w-px overflow-hidden bg-[#B39359]/20">
          <div className="absolute inset-0 bg-[#B39359] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
