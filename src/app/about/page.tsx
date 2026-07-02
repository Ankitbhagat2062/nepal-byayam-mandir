import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import {
  Award,
  CalendarClock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { RevealRoot } from "@/components/about/about";
import ProgramFeatures from "@/components/about/programFeatures";
import { programFeatures } from "@/lib/constants";
import FAQAccordion from "@/components/shared/FAQAccordion";

function SocialGlyph({ kind }: { kind: "facebook" | "instagram" }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex w-4 h-4 items-center justify-center rounded-sm text-[#C5A059] border border-[#C5A059] text-[10px] font-bold"
    >
      {kind === "facebook" ? "f" : "⌁"}
    </span>
  );
}

function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RevealRoot>{children}</RevealRoot>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Nepal Byayam Mandir | Pioneer Gym & Dharma Shree Legacy",
    description:
      "Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in 2010 B.S. (1953 A.D.). Home of the Dharma Shree National Open Bodybuilding Championship.",
    alternates: {
      canonical: "https://www.nepalbyayammandir.com.np/about",
    },
    openGraph: {
      title: "About Nepal Byayam Mandir",
      description:
        "Established in 1953 A.D. (2010 B.S.). Explore our championship lineage and WHO-aligned movement philosophy.",
      url: "https://www.nepalbyayammandir.com.np/about",
      siteName: "Nepal Byayam Mandir",
      images: [{ url: "/og-premium-banner.jpg", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
  };
}

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nepalbyayammandir.com.np/about/#localbusiness",
  name: "Nepal Byayam Mandir",
  description:
    "Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in 2010 B.S. (1953 A.D.).",
  url: "https://www.nepalbyayammandir.com.np/about",
  foundingDate: "1953-01-01",
  sameAs: [
    "https://www.facebook.com/nbmnepal/",
    "https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en",
  ],
  additionalType: "https://schema.org/HealthClub",
  descriptionUrlMapping: {
    "facebook": "https://www.facebook.com/nbmnepal/",
    "instagram": "https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en",
  },
};

export default function page() {
  return (
    <ScrollReveal>
      <Script
        id="about-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section
        id="about"
        aria-label="About Nepal Byayam Mandir"
        className="relative py-24 bg-[#FDFCF9]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#C5A059]" />

        <div className="max-w-7xl mx-auto px-6">
          {/* 1. HERO ARCHITECTURE & PIONEER STATEMENT */}
          <header data-reveal="true" className="reveal-base mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-[#111111]">
              Nepal Byayam Mandir — Official Pioneer Gymnasium of Bodybuilding Sports in Nepal
            </h1>

            <p className="mt-5 text-[#111111]/75 text-sm sm:text-base leading-relaxed max-w-3xl">
              Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in 2010 B.S. (1953 A.D.). It has continuously produced world-class national and international athletes since its inception.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Historical Weight • Structured Excellence
              </div>
              <div className="text-xs text-[#111111]/60">
                Light-filled luxury UI for senior stakeholder clarity.
              </div>
            </div>
          </header>

          {/* 2. THE DHARMA SHREE CHAMPIONSHIP LEGACY */}
          <section aria-label="Dharma Shree Championship Legacy" className="mb-14">
            <div
              data-reveal="true"
              className="reveal-base rounded-3xl border border-[#C5A059]/35 bg-[#F9F6F0]/80 overflow-hidden"
            >
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
                  The Dharma Shree Championship Legacy
                </h2>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-[#C5A059]/25 bg-[#FDFCF9]/70 p-6 h-full">
                      <h3 className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                          <CalendarClock className="w-5 h-5 text-[#C5A059]" />
                        </span>
                        <span className="font-bold text-sm uppercase tracking-widest text-[#C5A059]">
                          Championship Metric
                        </span>
                      </h3>

                      <div className="mt-5">
                        <div className="text-6xl sm:text-7xl font-black tracking-tight text-[#C5A059] leading-none">
                          2042
                        </div>
                        <div className="mt-2 text-lg font-bold text-[#111111]">
                          B.S. / 1985 A.D.
                        </div>
                      </div>

                      <div className="mt-6 h-px bg-[#C5A059]" />
                      <p className="mt-5 text-sm text-[#111111]/70 leading-relaxed">
                        Gold-toned prestige marker for the national open lineage.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="h-full rounded-2xl border border-[#C5A059]/25 bg-[#FDFCF9]/50 p-6">
                      <p className="text-[#111111] text-base sm:text-lg leading-relaxed tracking-[0.01em]">
                        Since 2042 B.S. (1985 A.D.), Nepal Byayam Mandir has exclusively organized and conducted the 'DHARMA SHREE' National Open Bodybuilding Championship. This remains the country's most prestigious and highest cash-prize bodybuilding tournament, held in solemn honor of the immortal national martyr, Dharma Bhakta Mathema.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-2 rounded-full border border-[#C5A059]/30 bg-[#F9F6F0]/70 text-xs font-semibold text-[#111111]">
                          <Award className="w-4 h-4 mr-2 text-[#C5A059]" />
                          National Open Prestige
                        </span>
                        <span className="inline-flex items-center px-3 py-2 rounded-full border border-[#C5A059]/30 bg-[#F9F6F0]/70 text-xs font-semibold text-[#111111]">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-[#C5A059]" />
                          Highest Cash-Prize Standard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. MISSION PHILOSOPHY BANNER */}
          <section aria-label="WHO MOVE FOR HEALTH banner" className="mb-14">
            <div
              data-reveal="true"
              className="reveal-base w-full rounded-3xl border border-[#C5A059]/35 bg-[#F9F6F0]"
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
                      MOVE FOR HEALTH
                    </h2>
                    <h3 className="mt-2 text-xs uppercase tracking-[0.35em] font-bold text-[#C5A059]">
                      World Health Organization
                    </h3>
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-[#111111]/75 text-sm sm:text-base leading-relaxed">
                      Our facility is a major health-restoring movement explicitly engineered to combat physical inactivity, high blood pressure, diabetes, and stress—harmonizing exceptional mental health with an immaculate physical physique.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {["Physical Inactivity", "High Blood Pressure", "Diabetes", "Stress"].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[#C5A059]/25 bg-[#FDFCF9]/70 px-4 py-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#C5A059]" />
                      <p className="mt-3 text-[#111111] font-semibold">{label}</p>
                      <p className="mt-1 text-xs text-[#111111]/70">engineered for movement recovery</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. CORE PROGRAM FEATURES GRID (WITH BACKLINKS TO SERVICES) */}
          <section aria-label="Core Program Features" className="mb-14">
            <h2 data-reveal="true" className="reveal-base text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Core Program Features
            </h2>
            <p data-reveal="true" className="reveal-base mt-3 text-[#111111]/75 max-w-3xl leading-relaxed">
              Six minimalist, high-contrast training pathways—each card routes you directly to our specialized programs.
            </p>

            <div
              data-reveal="true"
              className="reveal-base mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {programFeatures.map((f) => {
                
                return (
                  <ProgramFeatures key={f.title} f={f} />
                );
              })}
            </div>
          </section>

          {/* 5. THE TRUST & COMPLIANCE FAQ SELECTION */}
          <section aria-label="Trust & Compliance FAQ" className="mb-14">
            <h2 data-reveal="true" className="reveal-base text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Trust & Compliance FAQ
            </h2>
            <p data-reveal="true" className="reveal-base mt-3 text-[#111111]/75 max-w-3xl leading-relaxed">
              Clear answers for seniors and first-time members—built for readable accessibility.
            </p>

            <div data-reveal="true" className="reveal-base mt-8">
              <FAQAccordion page="about" />
            </div>
          </section>

          {/* 6. PLATFORM FOOTER AUTHORITY LINKS */}
          <footer
            aria-label="Platform Authority links"
            data-reveal="true"
            className="reveal-base rounded-3xl border border-[#C5A059]/35 bg-[#F9F6F0]/70"
          >
            <div className="p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#111111]">Platform Authority</h2>
                  <h3 className="mt-2 text-sm font-bold uppercase tracking-widest text-[#C5A059]">
                    Verified Social Identities
                  </h3>
                  <p className="mt-3 text-[#111111]/75 leading-relaxed max-w-xl">
                    Premium minimalist anchors linking directly to our verified social profiles.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.facebook.com/nbmnepal/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#C5A059]/35 bg-[#FDFCF9]/70 px-5 py-3 text-sm font-semibold text-[#111111] hover:text-[#C5A059] transition-colors duration-300"
                  >
                    <SocialGlyph kind="facebook" />
                    Facebook Registry Link
                  </a>

                  <a
                    href="https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#C5A059]/35 bg-[#FDFCF9]/70 px-5 py-3 text-sm font-semibold text-[#111111] hover:text-[#C5A059] transition-colors duration-300"
                  >
                    <SocialGlyph kind="instagram" />
                    Instagram Discovery Hub
                  </a>
                </div>
              </div>

              <div className="mt-8 h-px bg-[#C5A059]" />
              <div className="mt-6 text-xs text-[#111111]/70">
                © {new Date().getFullYear()} Nepal Byayam Mandir. Light-luxury accessibility-first interface.
              </div>
            </div>
          </footer>
        </div>
      </section>
    </ScrollReveal>
  );
}

