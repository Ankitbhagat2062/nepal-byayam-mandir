import ProgramsSectionClient from "@/components/programs/ProgramsSectionClient";
import React from "react";

export default function Page() {
  return (
    <section id="programs" aria-label="Programs">
      <React.Suspense fallback={null}>
        <ProgramsSectionClient />
      </React.Suspense>
    </section>
  );
}

