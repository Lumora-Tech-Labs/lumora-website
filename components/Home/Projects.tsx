import MagicBento from '../MagicBento';

export default function Projects() {
  const projects = [
    {
      title: 'RoadSight',
      description:
        'Open-source AI system utilizing ResNet18 architecture for real-time computer vision in road safety infrastructure. Designed for automated road damage detection and public safety monitoring at scale. (Computer Vision / Python)',
      className: 'md:col-span-2 bg-[#2D2D2D] text-[#FEFAF3]',
      isDark: true,
      comingSoon: true,
    },
    {
      title: 'Grade Clutch',
      description:
        'A full-stack revision platform utilizing Next.js, TypeScript, and Supabase to serve high-traffic educational needs. Built for performance at scale with a distraction-free, exam-focused UX. (EdTech / Full-Stack)',
      className:
        'md:col-span-2 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
      link: 'https://grade-clutch-dev.vercel.app/',
    },
    {
      title: 'Lockr',
      description:
        'The ultimate vault for your identity. Securely store your passport, ID cards, and confidential documents in a single, heavily encrypted digital locker. Accessible only by you, exactly when you need it.',
      className:
        'md:col-span-2 bg-[#FAF7EF]/60 backdrop-blur-sm border-[#E5D9B6] text-[#3A3A3A]',
      link: 'https://lockr-app.vercel.app/',
    },
    {
      title: 'Netto',
      description:
        'A financial engineering tool for automated invoice management and tax-metric calculation. Built on FastAPI with a rigorous backend architecture for high-accuracy financial data processing and reporting. (Fintech / Backend)',
      className: 'md:col-span-2 bg-[#FAF7EF] border-[#E5D9B6] text-[#3A3A3A]',
      comingSoon: true,
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