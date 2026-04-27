import MagicBento from '../MagicBento';

export default function Projects() {
  const projects = [
    {
      title: 'RoadSight',
      description:
        'An open-source AI system for automated road damage detection and public safety infrastructure. (Computer Vision / AI)',
      className: 'md:col-span-2 bg-[#2D2D2D] text-[#FEFAF3]',
      isDark: true,
    },
    {
      title: 'Grade Clutch',
      description:
        'A comprehensive revision resource platform designed specifically for A-Level students. (EdTech / Full-Stack)',
      className:
        'md:col-span-2 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
    },
    {
      title: 'Lumora Lumina',
      description:
        'A high-fidelity, minimalist UI framework optimized for dark mode and accessibility. (Design System)',
      className:
        'md:col-span-2 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
    },
    {
      title: 'ValidateIt',
      description:
        'Smart data validation engines for high-stress financial environments. (SaaS / Fintech)',
      className: 'md:col-span-2 bg-[#FAF7EF] border-[#E5D9B6] text-[#3A3A3A]',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-[#B39359] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
            The Lab Output.
          </h3>
        </div>
        <span className="text-[#6B6658]/50 font-medium italic">
          Case studies in development
        </span>
      </div>

      <MagicBento
        items={projects}
        textAutoHide={false}
        enableStars={false}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        clickEffect={false}
        enableMagnetism={true}
      />
    </section>
  );
}
