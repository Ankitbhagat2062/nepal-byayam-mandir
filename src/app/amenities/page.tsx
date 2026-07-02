import Amenities from '@/components/shared/Amenities'
import FAQAccordion from '@/components/shared/FAQAccordion'
import Pricing from '@/components/shared/Pricing'
import { Suspense } from 'react'


const page = () => {
  return (
    <div className="bg-[#FDFCF9] text-[#111111]">
      {/* 1) Premium Header Meta & Brand Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#C5A059]/15 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#C5A059]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-14 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#F9F6F0]/70 px-4 py-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#111111]">
              Premium Multi-Track Health Spaces
            </p>
          </div>

          <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            A Luxurious Training & Recovery Destination
          </h1>
          <p className="mt-5 max-w-3xl text-sm sm:text-base text-[#111111]/80 leading-relaxed">
            Nepal Byayam Mandir supports the World Health Organization’s (WHO) “MOVE FOR HEALTH” initiative through
            premium multi-track spaces engineered for conditioning, mindful recovery, and sustainable movement.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-[#C5A059]/25 bg-[#F9F6F0]/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#111111]">WHO MOVE FOR HEALTH</p>
              <p className="mt-1 text-xs text-[#111111]/75">Structured movement for real wellness outcomes</p>
            </div>
            <div className="rounded-2xl border border-[#C5A059]/25 bg-[#F9F6F0]/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#111111]">Senior-Comfort Accessibility</p>
              <p className="mt-1 text-xs text-[#111111]/75">High-contrast layouts and readable typography</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2) Premium Facilities Showcase (Amenities) */}
      <main id="amenities" aria-label="Amenities" className="scroll-mt-24">
        <Suspense fallback={null}>
          <div className="bg-[#FDFCF9]">
            <Amenities />
          </div>
        </Suspense>

        {/* 3) Interactive Pricing Tiers & Plans (Pricing) */}
        <Suspense fallback={null}>
          <div className="bg-[#FDFCF9]">
            <Pricing />
          </div>
        </Suspense>

        {/* 4) FAQ System Integration Layer */}
        <section className="py-24 bg-[#F9F6F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between gap-8 mb-10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#111111]">Quick Answers</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Amenities & Plans FAQs <span className="text-[#C5A059]">—</span>
                </h2>
              </div>
              <div className="hidden md:block text-right text-xs text-[#111111]/70 max-w-md">
                Gold rules, crisp alignment, and high-contrast typography for maximum readability.
              </div>
            </div>

            <FAQAccordion page="amenities" />
          </div>
        </section>
      </main>

      {/* Luxury footer spacing */}
      <div className="h-20 bg-[#FDFCF9]" />
    </div>
  )
}

export default page
