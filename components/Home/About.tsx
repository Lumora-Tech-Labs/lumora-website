import MagicBento from '@/components/MagicBento';
import type { BentoCardProps } from '@/components/MagicBento';

const aboutCards: BentoCardProps[] = [
  {
    title: 'The Philosophy',
    description:
      "We bypass the noise of hype-driven development to focus on architectural clarity and long-term scalability. Systems are engineered to outlast the sprint they were born in — correct, maintainable, and built to grow.",
    className:
      'md:col-span-3 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
  },
  {
    title: 'Technical Depth',
    description:
      'Stack Summary: Next.js · FastAPI · PostgreSQL · Supabase · Clerk. We build bespoke infrastructure and train custom ML models — no commodity tooling, no off-the-shelf templates.',
    className:
      'md:col-span-1 bg-[#2D2D2D] text-[#FEFAF3] border-transparent shadow-2xl',
    isDark: true,
  },
  {
    title: 'Research-Led',
    description:
      'Every system we build is validated through domain expertise and research before implementation. We collaborate with specialists to ensure technical decisions serve verified, real-world human needs.',
    className:
      'md:col-span-1 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
  },
  {
    title: 'The Standard',
    description:
      'We hold our output to the standard of production-grade software: typed, tested, documented, and deployable. Rigorous engineering over rapid delivery — every time. The codebase you inherit from us should be one you are proud to extend.',
    className:
      'md:col-span-3 bg-gradient-to-br from-[#F2E7C9] to-[#FAF7EF] border-[#E5D9B6] text-[#3A3A3A]',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#B39359]/5 blur-[120px] -z-10" />

      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-[#B39359] text-sm font-bold tracking-[0.4em] uppercase mb-6">
            About the Lab
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-[#2D2D2D] leading-[1.1] tracking-tight">
            We build systems that <br className="hidden md:block" /> define the
            standard.
          </h3>
        </div>
        <div className="lg:col-span-5 lg:pt-12">
          <p className="text-[#6B6658] text-xl md:text-2xl leading-relaxed font-light">
            Based in Pakistan,{' '}
            <span className="text-[#2D2D2D] font-medium">Lumora Tech Labs</span>{' '}
            operates at the intersection of high-fidelity design and rigorous
            engineering — building for correctness first, speed second.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <MagicBento items={aboutCards} />

      {/* Founders / The Engineers */}
      <div className="mt-24 border-t border-[#E5D9B6]/40 pt-20">
        <h3 className="text-[#B39359] text-sm font-bold tracking-[0.4em] uppercase mb-12">
          The Engineers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Muhammad Abdullah */}
          <div className="bg-[#2D2D2D] rounded-[20px] p-8 text-[#FEFAF3] flex flex-col gap-4">
            <p className="text-[#B39359] text-[10px] font-bold tracking-[0.35em] uppercase">
              Lead Software Engineer
            </p>
            <h4 className="text-2xl md:text-3xl font-serif tracking-tight">
              Muhammad Abdullah
            </h4>
            <div className="w-10 h-px bg-[#B39359]/50" />
            <p className="text-[#9A9080] text-base leading-relaxed font-light">
              Core expertise in full-stack engineering, Python backend
              architecture, and algorithmic optimization. Designs systems built
              for correctness and maintainability — not for the convenience of
              the first sprint.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Python', 'Next.js', 'FastAPI', 'PostgreSQL', 'ML Systems'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#B39359]/30 text-[#B39359]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Waffa Khurram */}
          {/* <div className="bg-[#FAF7EF]/60 backdrop-blur-sm border border-[#E5D9B6] rounded-[20px] p-8 text-[#3A3A3A] flex flex-col gap-4">
            <p className="text-[#B39359] text-[10px] font-bold tracking-[0.35em] uppercase">
              Lead Medical Researcher
            </p>
            <h4 className="text-2xl md:text-3xl font-serif tracking-tight text-[#2D2D2D]">
              Waffa Khurram
            </h4>
            <div className="w-10 h-px bg-[#B39359]/50" />
            <p className="text-[#6B6658] text-base leading-relaxed font-light">
              Specialized domain expertise in medical research — enabling Lumora
              to build software validated against clinical and scientific
              requirements, not assumptions. Our capacity for interdisciplinary
              engineering starts here.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                'Domain Research',
                'Clinical Validation',
                'Data Analysis',
                'Interdisciplinary',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#E5D9B6] text-[#6B6658]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}