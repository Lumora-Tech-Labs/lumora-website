import { cn } from '@/lib/utils';

export default function Projects() {
  const projects = [
    {
      title: 'RoadSight',
      tag: 'Computer Vision / AI',
      description:
        'An open-source AI system for automated road damage detection and public safety infrastructure.',
      className: 'md:col-span-2 bg-[#2D2D2D] text-[#FAF7EF]',
      isDark: true,
    },
    {
      title: 'Grade Clutch',
      tag: 'EdTech / Full-Stack',
      description:
        'A comprehensive revision resource platform designed specifically for A-Level students.',
      className: 'md:col-span-1 bg-[#FAF7EF] border-[#E5D9B6]',
    },
    {
      title: 'Lumora Lumina',
      tag: 'Design System',
      description:
        'A high-fidelity, minimalist UI framework optimized for dark mode and accessibility.',
      className: 'md:col-span-1 bg-[#F2E7C9] border-[#E5D9B6]',
    },
    {
      title: 'ValidateIt',
      tag: 'SaaS / Fintech',
      description:
        'Smart data validation engines for high-stress financial environments.',
      className: 'md:col-span-2 bg-[#FAF7EF] border-[#E5D9B6]',
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={cn(
              'group relative p-10 rounded-[3rem] border flex flex-col justify-between min-h-100 overflow-hidden cursor-default',
              project.className
            )}
          >
            {/* "Coming Soon" Overlay */}
            <div className="absolute inset-0 bg-[#FAF7EF]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
              <span className="bg-[#2D2D2D] text-[#FAF7EF] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl">
                Coming Soon
              </span>
            </div>

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-[#B39359]">
                {project.tag}
              </span>
              <h4
                className={cn(
                  'text-3xl font-medium mb-4 tracking-tight',
                  project.isDark ? 'text-white' : 'text-[#2D2D2D]'
                )}
              >
                {project.title}
              </h4>
              <p
                className={cn(
                  'text-lg opacity-80 leading-relaxed max-w-xs',
                  project.isDark ? 'text-[#FAF7EF]' : 'text-[#6B6658]'
                )}
              >
                {project.description}
              </p>
            </div>

            <div className="flex justify-end relative z-10">
              <div
                className={cn(
                  'w-12 h-12 rounded-full border flex items-center justify-center opacity-20',
                  project.isDark
                    ? 'border-[#FAF7EF] text-[#FAF7EF]'
                    : 'border-[#2D2D2D] text-[#2D2D2D]'
                )}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
