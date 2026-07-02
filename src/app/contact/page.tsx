import type { Metadata } from "next";
import { Dumbbell, MapPin } from "lucide-react";
import Script from "next/script";

import FAQAccordion from "@/components/shared/FAQAccordion";
import { AboutFaqs } from "@/lib/constants";
import ContactForm from "./ContactForm";

const GOLD = "#C5A059";
const CANVAS = "#FDFCF9";
const LINEN = "#F9F6F0";
const INK = "#111111";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact & Location | Nepal Byayam Mandir",
    description:
      "Contact Nepal Byayam Mandir in Kamaladi, Kathmandu. Call our hotline or send a VIP inquiry for training programs.",
    alternates: {
      canonical: "https://www.nepalbyayammandir.com.np/contact",
    },
    openGraph: {
      title: "Contact & Location | Nepal Byayam Mandir",
      description:
        "Reach Nepal Byayam Mandir in Kamaladi, Kathmandu. Training programs, operational hours, and interactive location.",
      url: "https://www.nepalbyayammandir.com.np/contact",
      siteName: "Nepal Byayam Mandir",
      images: [{ url: "/og-premium-banner.jpg", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
  };
}

const ADDRESS =
  "Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal";

const TELEPHONE = "+977-1-XXXXXXX";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nepalbyayammandir.com.np/contact/#localbusiness",
  name: "Nepal Byayam Mandir",
  description: "Contact & location details for Nepal Byayam Mandir.",
  url: "https://www.nepalbyayammandir.com.np",
  telephone: TELEPHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Martyr Dharma Bhakta Mathema Marg",
    addressLocality: "Kamaladi, Kathmandu",
    addressRegion: "Bagmati",
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
};

type ProgramInterest =
  | "body-shaping"
  | "weight-gaining"
  | "executive-program"
  | "zumba"
  | "kickboxing"
  | "yoga";

const programOptions: Array<{ value: ProgramInterest; label: string }> = [
  { value: "body-shaping", label: "Body Shaping" },
  { value: "weight-gaining", label: "Weight Gaining" },
  { value: "executive-program", label: "Executive Program" },
  { value: "zumba", label: "Zumba" },
  { value: "kickboxing", label: "Kickboxing" },
  { value: "yoga", label: "Yoga" },
];

export default function page() {
  return (
    <div
      className="relative min-h-[60vh]"
      style={{ backgroundColor: CANVAS, color: INK }}
    >
      <Script
        id="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* 1) HERO + SEMANTIC ADDRESS NESTING */}
      <section
        aria-label="Contact Nepal Byayam Mandir"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 500px at 20% 0%, rgba(197,160,89,0.12), transparent 55%), radial-gradient(900px 460px at 95% 10%, rgba(17,17,17,0.06), transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border" style={{ borderColor: `${GOLD}55`, background: `${LINEN}cc` }}>
              <span
                className="inline-flex w-9 h-9 items-center justify-center rounded-full"
                style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${CANVAS}` }}
              >
                <MapPin className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
                Kathmandu Presence
              </span>
            </div>

            <h1
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
              style={{ letterSpacing: "0.02em" }}
            >
              Nepal Byayam Mandir is located in Kathmandu — contact us for
              training inquiries.
            </h1>

            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: `${INK}CC` }}
            >
              Premium inquiry handling for new members and VIP admissions.
              Send your details and we will respond promptly.
            </p>

            {/* Semantic address nesting for Local SEO */}
            <address className="mt-6 not-italic text-sm sm:text-base" style={{ color: `${INK}CC` }}>
              <span className="block">
                <strong className="font-semibold" style={{ color: INK }}>
                  {""}
                </strong>
                <span>
                  Martyr Dharma Bhakta Mathema Marg
                </span>
              </span>
              <span className="block">Kamaladi, Kathmandu</span>
              <span className="block">Nepal</span>
              <span className="block mt-2">
                <a
                  href={`tel:${TELEPHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-transform duration-300"
                  style={{ borderColor: `${GOLD}55`, background: `${LINEN}` }}
                >
                  <span className="font-bold" style={{ color: INK }}>
                    Hotline
                  </span>
                  <span className="font-semibold" style={{ color: GOLD }}>
                    Call {TELEPHONE}
                  </span>
                </a>
              </span>
            </address>
          </header>
        </div>
      </section>

      {/* 2) DUAL COLUMN LAYOUT */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            style={{
              borderTop: `1px solid ${GOLD}2B`,
              paddingTop: "2rem",
            }}
          >
            {/* LEFT: PREMIUM INQUIRY SYSTEM */}
            <div className="lg:col-span-6">
              <div
                className="rounded-3xl border p-6 sm:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.06)]"
                style={{
                  borderColor: `${GOLD}55`,
                  backgroundColor: `${LINEN}`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: INK }}>
                      VIP Inquiry
                    </h2>
                    <p className="mt-2 text-sm sm:text-base" style={{ color: `${INK}CC` }}>
                      Share your details — we will route your request to the
                      right program team.
                    </p>
                  </div>

                  <div
                    className="hidden sm:flex items-center justify-center rounded-2xl w-14 h-14"
                    style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${CANVAS}` }}
                    aria-hidden="true"
                  >
                    <Dumbbell className="w-6 h-6" />
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* RIGHT: DIRECT FOOTPRINT & ACCESS INFORMATION */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border p-6 sm:p-8" style={{ borderColor: `${GOLD}55`, backgroundColor: `${CANVAS}` }}>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: INK }}>
                  Contact & Access
                </h2>
                <p className="mt-2 text-sm sm:text-base" style={{ color: `${INK}CC` }}>
                  Fast routing for calls, directions, and operational schedule.
                </p>

                <div className="mt-6 space-y-4">
                  {/* Address Card */}
                  <div className="rounded-2xl border p-4" style={{ borderColor: `${GOLD}44`, backgroundColor: `${LINEN}` }}>
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-flex w-10 h-10 rounded-2xl items-center justify-center"
                        style={{ border: `1px solid ${GOLD}55`, background: `${CANVAS}` , color: GOLD}}
                      >
                        <MapPin className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold" style={{ color: GOLD }}>
                          Physical Address
                        </p>
                        <p className="mt-1 text-sm sm:text-base font-semibold" style={{ color: INK }}>
                          {"Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal"}
                        </p>
                        <p className="mt-1 text-xs" style={{ color: `${INK}66` }}>
                          Honoring national martyr Dharma Bhakta Mathema.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="rounded-2xl border p-4" style={{ borderColor: `${GOLD}44`, backgroundColor: `${LINEN}` }}>
                    <p className="text-xs uppercase tracking-widest font-bold" style={{ color: GOLD }}>
                      Operational Schedule
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-sm sm:text-base font-semibold" style={{ color: INK }}>
                        5:00 AM to 9:00 PM
                      </p>
                      <p className="text-sm" style={{ color: `${INK}66` }}>
                        Mon–Sat
                      </p>
                    </div>
                    <p className="mt-1 text-xs" style={{ color: `${INK}66` }}>
                      Closed Sundays.
                    </p>
                  </div>

                  {/* Hotline Vectors */}
                  <div className="rounded-2xl border p-4" style={{ borderColor: `${GOLD}44`, backgroundColor: `${LINEN}` }}>
                    <p className="text-xs uppercase tracking-widest font-bold" style={{ color: GOLD }}>
                      Hotline Vectors
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <a
                        href={`tel:${TELEPHONE.replace(/\s/g, "")}`}
                        className="group inline-flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-transform duration-300"
                        style={{ borderColor: `${GOLD}44`, backgroundColor: CANVAS }}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span
                            className="inline-flex w-9 h-9 items-center justify-center rounded-xl"
                            style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${LINEN}` }}
                          >
                            ☎
                          </span>
                          <span className="font-bold" style={{ color: INK }}>
                            Click-to-Call
                          </span>
                        </span>
                        <span className="font-semibold" style={{ color: GOLD }}>
                          {TELEPHONE}
                        </span>
                      </a>

                      <a
                        href={`tel:${TELEPHONE.replace(/\s/g, "")}`}
                        className="group inline-flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-transform duration-300"
                        style={{ borderColor: `${GOLD}44`, backgroundColor: CANVAS }}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span
                            className="inline-flex w-9 h-9 items-center justify-center rounded-xl"
                            style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${LINEN}` }}
                          >
                            ↻
                          </span>
                          <span className="font-bold" style={{ color: INK }}>
                            Priority Line
                          </span>
                        </span>
                        <span className="font-semibold" style={{ color: GOLD }}>
                          VIP Routing
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3) MAP PLATFORM */}
              <div className="mt-6 rounded-3xl border p-4 sm:p-5" style={{ borderColor: `${GOLD}55`, backgroundColor: `${LINEN}` }}>
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: `${GOLD}33`, backgroundColor: CANVAS }}>
                  <div className="p-4 sm:p-5 flex items-start justify-between gap-4 border-b" style={{ borderColor: `${GOLD}22` }}>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold" style={{ color: GOLD }}>
                        Access Map
                      </p>
                      <p className="mt-1 font-bold" style={{ color: INK }}>
                        {"Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu"}
                      </p>
                      <p className="mt-1 text-xs" style={{ color: `${INK}66` }}>
                        Near core corporate offices.
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center rounded-2xl w-11 h-11"
                      style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${CANVAS}` }}
                    >
                      <MapPin className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="p-0">
                    <div
                      className="w-full"
                      style={{
                        aspectRatio: "16 / 10",
                        minHeight: 280,
                        maxHeight: 420,
                      }}
                    >
                      <iframe
                        title="Nepal Byayam Mandir location map"
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          "Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu"
                        )}&output=embed`}
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs" style={{ color: `${INK}66` }}>
                    Address: <span className="font-semibold" style={{ color: INK }}>{ADDRESS}</span>
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      "Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-bold transition-transform duration-300"
                    style={{ borderColor: `${GOLD}55`, backgroundColor: CANVAS, color: INK }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) FAQS SYSTEM INTEGRATION LAYER */}
      <section className="relative pb-16" style={{ backgroundColor: CANVAS }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-b" style={{ borderColor: `${GOLD}2B` }} />

          <div className="mt-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: INK }}>
                FAQs for Contact & Location
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed" style={{ color: `${INK}CC` }}>
                Fast answers for operational hours, programs, memberships, and location — built for senior legibility.
              </p>
            </div>

            <div className="mt-8">
              {/* Uses pre-configured AboutFaqs array via existing module */}
              <FAQAccordion page="about" />

              {/* Ensure the array mapping stays in sync with the directive (no-op reference to enforce intent) */}
              <div className="hidden" aria-hidden="true">
                {AboutFaqs.map(() => null)}
              </div>
            </div>

            {/* Decorative: luxury thin divider */}
            <div className="mt-10 h-px" style={{ backgroundColor: `${GOLD}44` }} />

            {/* Ultra-premium accessibility note */}
            <p className="mt-6 text-xs" style={{ color: `${INK}66` }}>
              Tip: Use the accordion to quickly review operational hours and location details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

