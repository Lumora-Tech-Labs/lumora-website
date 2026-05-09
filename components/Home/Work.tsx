'use client';
import Stepper, { Step } from '../Stepper';

export default function Work() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Technical Specification',
      text: 'We conduct deep technical discovery: mapping system constraints, defining data models, and producing an unambiguous specification document. Not a single line of production code is written before this is complete.',
    },
    {
      num: '02',
      title: 'Architecture & Prototyping',
      text: 'No off-the-shelf wrappers. We architect bespoke systems — from API schema and database design to ML pipeline structures — and validate every core assumption with a working prototype before full build.',
    },
    {
      num: '03',
      title: 'Deployment & Scale',
      text: 'We ship to production environments with CI/CD pipelines, performance benchmarks, and load-tested infrastructure. Systems are designed to scale from day one, not retrofitted six months later under pressure.',
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

      <div className="w-full max-w-4xl mx-auto mt-8">
        <Stepper
          initialStep={1}
          backButtonText="Previous"
          nextButtonText="Next"
          stepCircleContainerClassName="bg-[#FAF7EF] p-2 sm:p-6"
          contentClassName="pt-10 pb-4"
          footerClassName="pt-4"
          backButtonProps={{
            className:
              'duration-350 rounded px-5 py-2.5 transition text-[#6B6658] hover:text-[#2D2D2D] hover:bg-[#E5D9B6]/40 font-medium',
          }}
          nextButtonProps={{
            className:
              'duration-350 flex items-center justify-center rounded-full bg-[#2D2D2D] py-2.5 px-6 font-medium tracking-tight text-[#FAF7EF] transition hover:bg-[#454545] active:bg-[#1a1a1a]',
          }}
        >
          {steps.map((step) => (
            <Step key={step.num}>
              <div className="group flex flex-col gap-6">
                <span className="text-5xl font-serif text-[#B39359]">
                  {step.num}
                </span>
                <h4 className="text-3xl font-medium text-[#2D2D2D]">
                  {step.title}
                </h4>
                <p className="text-[#6B6658] leading-relaxed text-xl">
                  {step.text}
                </p>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
    </section>
  );
}