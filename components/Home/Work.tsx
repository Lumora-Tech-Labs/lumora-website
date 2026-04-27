export default function Work() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Research',
      text: 'We dive deep into the problem space, collaborating with domain experts to define the technical requirements.',
    },
    {
      num: '02',
      title: 'Custom Architecture',
      text: 'No off-the-shelf wrappers. We build bespoke engines and ML models tailored to your specific scale.',
    },
    {
      num: '03',
      title: 'High-Fidelity Build',
      text: 'Merging performance with minimalist UI/UX to ensure the system is as intuitive as it is powerful.',
    },
  ];

  return (
    <section
      id="work"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-[#E5D9B6]/30"
    >
      <div className="mb-16">
        <h2 className="text-[#B39359] text-sm font-bold tracking-[0.4em] uppercase mb-4">
          Our Process
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
          How we build.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.num} className="group flex flex-col gap-6">
            <span className="text-5xl font-serif text-[#B39359]/20 group-hover:text-[#B39359] transition-colors duration-500">
              {step.num}
            </span>
            <h4 className="text-2xl font-medium text-[#2D2D2D]">
              {step.title}
            </h4>
            <p className="text-[#6B6658] leading-relaxed text-lg">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
