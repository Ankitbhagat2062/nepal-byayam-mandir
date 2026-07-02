import ProgramsSectionClient from "@/components/programs/ProgramsSectionClient";
import React from "react";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Programs | Nepal Byayam Mandir | Pioneer Gym & Bodybuilding Sports",
    description:
      "Explore training programs at Nepal Byayam Mandir—our specialized bodybuilding pathways designed for health restoration, strength, and disciplined performance in Nepal.",
    keywords: [
      "Nepal Byayam Mandir",
      "programs",
      "training programs",
      "bodybuilding programs",
      "gym in Nepal",
      "bodybuilding gym in Nepal",
      "strength training Nepal",
      "health club Nepal",
      "Dharma Shree",
      "national open bodybuilding",
      "Kathmandu gym",
      "WHO MOVE FOR HEALTH",
      "physical inactivity",
      "high blood pressure",
      "diabetes",
      "stress relief",
      "athlete training Nepal",
    ],
    alternates: {
      canonical: "https://www.nepalbyayammandir.com/programs",
    },
    openGraph: {
      title: "Programs | Nepal Byayam Mandir",
      description:
        "Explore specialized training programs at Nepal Byayam Mandir—discipline, health restoration, and bodybuilding excellence in Nepal.",
      url: "https://www.nepalbyayammandir.com/programs",
       ...baseOpenGraph,
    },
  };
}
export default function Page() {
  return (
    <section id="programs" aria-label="Programs">
      <React.Suspense fallback={null}>
        <ProgramsSectionClient />
      </React.Suspense>
    </section>
  );
}

