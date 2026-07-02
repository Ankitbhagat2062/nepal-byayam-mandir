import type { Metadata } from "next";
import{ Suspense } from "react";

import {
  Award,
  Dumbbell,
  CalendarDays,
  Sparkles,
  Zap,
  Coffee,
  ShieldCheck,
} from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import LegacyAndAwards from "@/components/home/LegacyAndAwards";
import { DepthLayer, ServiceMatrix, ValueCard } from "@/components/home/HomeMissingSections";


export const metadata: Metadata = {
  title: "Nepal Byayam Mandir | Official Pioneer Bodybuilding Gym (Est. 1953 A.D.)",
  description:
    "Official site of Nepal Byayam Mandir, the pioneer bodybuilding sports gym in Kathmandu, Nepal. Home of the prestigious Dharma Shree Championship and the WHO 'MOVE FOR HEALTH' philosophy.",
};

const jsonLd = {

  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://www.nepalbyayammandir.com/#gym-home",
  name: "Nepal Byayam Mandir",
  description:
    "Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in 1953 A.D. (2010 B.S.) in Kathmandu.",
  url: "https://www.nepalbyayammandir.com/",
  image: "https://www.nepalbyayammandir.com/og-premium-banner.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Martyr Dharma Bhakta Mathema Marg, Kamaladi",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/nbmnepal/",
    "https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en",
  ],
};


export default function Home() {
  return (
      <main className="flex-1 w-full relative">
        {/* JSON-LD inside main container as requested */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section id="top"
          className="relative overflow-hidden pt-24 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.55]">
            <div className="absolute -top-28 -left-24 w-130 h-130 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 w-130 h-130 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Pioneer Gymnasium of Nepal
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.06] font-sans text-foreground">
                  Build Exceptional Strength.
                  <br />
                  <span className="gold-text-gradient">Legacy Since 1953.</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Established in <strong className="text-foreground">2010 B.S. (1953 A.D.)</strong>, Nepal Byayam Mandir
                  is Kathmandu’s official birth-site of bodybuilding sports. Elite coaching, disciplined training
                  culture, and the WHO spirit of <strong className="text-foreground">MOVE FOR HEALTH</strong>—made
                  local.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-primary/70 bg-transparent text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all shadow-[0_18px_60px_rgba(197,160,89,0.12)]"
                  >
                    <Dumbbell className="w-4 h-4" />
                    View Memberships
                  </a>

                  <a
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-primary/40 bg-primary/5 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:-translate-y-0.5 transition-all"
                  >
                    <Award className="w-4 h-4 text-primary" />
                    Explore Programs
                  </a>
                </div>

                {/* Minimal heritage stats */}
                <div className="mt-10 grid grid-cols-2 gap-4 max-w-md border-t border-b border-border/50 py-6">
                  <div>
                    <p className="text-3xl font-extrabold gold-text-gradient">70+ Yrs</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">Forging Champions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold gold-text-gradient">DHARMA SHREE</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">National Open Arena</p>
                  </div>
                </div>
              </div>

              {/* Depth panel column */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 rounded-3xl bg-card/60 border border-border/60 shadow-[0_40px_120px_rgba(0,0,0,0.08)]" />
                <div className="relative z-10 p-5 sm:p-7 rounded-3xl bg-card/65 backdrop-blur">
                  {/* Decorative suspended layer */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <Suspense fallback={<div className="w-full h-full" />}>
                      <DepthLayer />
                    </Suspense>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-border/50 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                          <CalendarDays className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-bold text-sm">Award Feature</h2>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                            DHARMA SHREE National Open
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full border border-primary/30 text-primary/95 bg-primary/5">
                        Highest Prestige
                      </span>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-2xl font-black tracking-tight font-sans">
                        The <span className="gold-text-gradient">DHARMA SHREE</span> Arena
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Organizing since <strong className="text-foreground">2042 B.S. (1985 A.D.)</strong>, honoring the
                        national martyr <strong className="text-foreground">Dharma Bhakta Mathema</strong>. Our championship
                        represents Nepal’s most respected, highest cash-prize bodybuilding tournament.
                      </p>

                      <div className="mt-5 p-4 rounded-2xl bg-background/60 border border-border/40 grid grid-cols-3 gap-3">
                        <div className="text-[10px]">
                          <div className="uppercase tracking-widest text-muted-foreground font-semibold">Martyr</div>
                          <div className="font-bold text-foreground mt-1">Dharma Bhakta</div>
                        </div>
                        <div className="text-[10px]">
                          <div className="uppercase tracking-widest text-muted-foreground font-semibold">Inception</div>
                          <div className="font-bold text-foreground mt-1">1985 A.D.</div>
                        </div>
                        <div className="text-[10px]">
                          <div className="uppercase tracking-widest text-muted-foreground font-semibold">Cash Tier</div>
                          <div className="font-bold text-primary mt-1">National Peak</div>
                        </div>
                      </div>

                      <a
                        href="/about"
                        className="mt-10 block w-full text-center text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        Read Heritage Story
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------- VALUE CARDS --------------- */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                WHY NEPAL BYAYAM MANDIR
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Premium Infrastructure, Elite Training Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard
                icon={<Dumbbell className="w-5 h-5 text-primary" />}
                title="3,500 Sq. Ft Main Floor"
                lines={[
                  "Spaciously parqueted floor plan packed with",
                  "the nation’s premier state-of-the-art strength lines.",
                ]}
                badge="PIONEER DECK"
              />
              <ValueCard
                icon={<Zap className="w-5 h-5 text-primary" />}
                title="Specialized Training Multi-Tracks"
                lines={[
                  "Dedicated spaces for Yoga Sanctuaries,",
                  "High-Octane Zumba, and heavy Kickboxing bags.",
                ]}
                badge="MULTI-TRACKS"
              />
              <ValueCard
                icon={<Coffee className="w-5 h-5 text-primary" />}
                title="Elite Lifestyle Facilities"
                lines={[
                  "In-house Cafeteria Corner for clean nutritional recovery items,",
                  "plus a fully stocked Health Shoppe supplement marketplace.",
                ]}
                badge="LIFESTYLE"
              />
            </div>
          </div>
        </section>

        {/* --------------- DIRECT LINK MATRICES --------------- */}
        <section id="services" className="py-24 bg-card border-y border-border/40 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Service Paths
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Fast Access to Core Programs
              </h2>
            </div>

            <ServiceMatrix />
          </div>
        </section>

        <section>
          <LegacyAndAwards />
        </section>

        {/* --------------- FAQ --------------- */}
        <section id="faq" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Premium Readability, Clear Answers
              </h2>
            </div>

            <FAQAccordion page="home" />
          </div>
        </section>


      </main>
  );
}

