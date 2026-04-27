import { cn } from '@/lib/utils';

export default function About() {
  const cards = [
    {
      title: 'The Philosophy',
      description:
        "We bypass the noise of 'hype-driven' development to focus on architectural clarity and long-term scalability.",
      className:
        'md:col-span-2 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6]',
    },
    {
      title: 'Technical Depth',
      description:
        'Training custom ML models and building bespoke infrastructure from the ground up.',
      className:
        'md:col-span-1 bg-[#2D2D2D] text-[#FAF7EF] border-transparent shadow-2xl',
      isDark: true,
    },
    {
      title: 'Research-Led',
      description:
        'Collaborating with domain experts to ensure every line of code serves a verified human need.',
      className:
        'md:col-span-1 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6]',
    },
    {
      title: 'The Stack',
      description:
        'Leveraging Next.js, Python, and PostgreSQL to deliver high-performance digital systems.',
      className:
        'md:col-span-2 bg-gradient-to-br from-[#F2E7C9] to-[#FAF7EF] border-[#E5D9B6]',
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Glow - Matches your Hero light leak */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#B39359]/5 blur-[120px] -z-10" />

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
            engineering.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              'group relative p-12 rounded-[3rem] border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
              'hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(179,147,89,0.15)]',
              card.className
            )}
          >
            <div className="relative z-10 flex flex-col h-full justify-between min-h-55">
              <div>
                <h4
                  className={cn(
                    'text-3xl font-medium mb-6 tracking-tight',
                    card.isDark ? 'text-[#B39359]' : 'text-[#2D2D2D]'
                  )}
                >
                  {card.title}
                </h4>
                <p
                  className={cn(
                    'text-lg md:text-xl leading-relaxed opacity-90',
                    card.isDark ? 'text-[#FAF7EF]' : 'text-[#6B6658]'
                  )}
                >
                  {card.description}
                </p>
              </div>

              {/* Minimalist interactive hint */}
              <div
                className={cn(
                  'mt-8 flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-500',
                  'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100',
                  card.isDark ? 'text-[#B39359]' : 'text-[#2D2D2D]'
                )}
              >
                <span>Explore</span>
                <div className="w-8 h-px bg-current" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
