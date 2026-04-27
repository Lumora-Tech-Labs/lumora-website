import MagicBento from '@/components/MagicBento';

export default function About() {
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
      <MagicBento />
    </section>
  );
}
