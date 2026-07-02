'use client';
import React from 'react'
import FAQAccordion from '../shared/FAQAccordion';
import { Intensity } from '@/lib/constants';
import IntensityFilter from './IntensityFilter';
import ProgramsGrid from './ProgramsGrid';


export default function ProgramsSectionClient() {
  const [active, setActive] = React.useState<Intensity>("All");
  return (
    <section
      id="programs"
      aria-label="Programs"
      className="py-24"
      style={{ background: "#FDFCF9" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Fitness Programs for Disciplined Transformation
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[rgba(17,17,17,.76)]">
            Specialized workout disciplines engineered for measurable outcomes—fat reduction, muscle density, strength capability, athletic performance, and executive-ready flexibility.
          </p>
        </header>

        <div className="rounded-3xl border border-[rgba(197,160,89,.22)] bg-[#F9F6F0] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111]">
                Dynamic Intensity Explorer
              </h2>
              <p className="mt-2 text-sm text-[rgba(17,17,17,.72)]">
                Filter the programs by intensity tier for a sharper training match.
              </p>
            </div>

            <div className="lg:min-w-130">
              <IntensityFilter active={active} onChange={setActive} />
            </div>
          </div>

          <div className="mt-8">
            <ProgramsGrid active={active} />
          </div>

          <p className="mt-6 text-xs sm:text-sm text-[rgba(17,17,17,.65)]">
            Tip: Use “All” to view the complete premium gallery. Each program panel is optimized for readability, accessible contrast, and smooth motion.
          </p>
        </div>

        <div className="mt-16" aria-label="Programs FAQs">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">FAQs</h2>
            <p className="mt-2 text-sm text-[rgba(17,17,17,.72)]">
              Transparent operational and program details.
            </p>
          </div>
          {/* FAQAccordion expects a page prop; it defaults to AboutFaqs for non-home pages */}
          <FAQAccordion page="programs" />
        </div>
      </div>
    </section>
  );
}
