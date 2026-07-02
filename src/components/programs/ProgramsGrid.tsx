'use client';

import { Intensity, intensityToBadge, programs } from "@/lib/constants";
import React from "react";
import { useReducedMotionSafe } from "./motionSafe";

export default function ProgramsGrid({
  active,
}: {
  active: Intensity;
}) {
  const reducedMotion = useReducedMotionSafe();
  const filtered = React.useMemo(() => {
    if (active === "All") return programs;
    if (active === "High Intensity") return programs.filter((p) => p.intensity === "High Intensity");
    if (active === "Adaptive") return programs.filter((p) => p.intensity === "Adaptive");
    if (active === "Elite") return programs.filter((p) => p.intensity === "Elite");
    return programs;
  }, [active]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {filtered.map((p, idx) => {
        const Icon = p.icon;
        const delay = reducedMotion ? 0 : idx * 40;
        return (
          <article
            key={p.id}
            id={p.id}
            className="group relative rounded-2xl border border-[rgba(197,160,89,.22)] bg-[#F9F6F0] p-5 overflow-hidden"
            style={{
              transition: "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease",
            }}
          >
            <span
              aria-hidden
              className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(197,160,89,.22), rgba(197,160,89,.06) 55%, rgba(253,252,249,0) 70%)",
              }}
            />

            <div
              className="flex items-start justify-between gap-4"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(197,160,89,.35)] bg-[#FDFCF9] shadow-[0_18px_60px_rgba(17,17,17,.06)]">
                  <Icon className="h-5 w-5 text-[#111111]" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold tracking-widest uppercase text-[#111111]">
                    {p.intensity === "Dynamic / Multi-Intensity" ? "Multi-Intensity" : intensityToBadge[p.intensity as Exclude<Intensity, "All">]}
                  </div>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[#111111]">
                    {p.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1 rounded-full border border-[rgba(17,17,17,.10)] bg-[#FDFCF9]/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                <span className="text-[11px] font-bold text-[#111111]">
                  {p.intensity}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[rgba(17,17,17,.86)]">
              {p.deepCopy}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-[rgba(197,160,89,.22)] pt-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[rgba(17,17,17,.65)]">
                Precision Training Module
              </div>
              <div className="opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-xs font-extrabold text-[#111111]">Explore</span>
              </div>
            </div>
          </article>
        );
      })}

      {active !== "All" && filtered.length === 0 ? (
        <div className="col-span-full rounded-2xl border border-[rgba(197,160,89,.22)] bg-[#F9F6F0] p-8">
          <div className="text-sm font-bold text-[#111111]">No programs found for this intensity.</div>
          <div className="mt-2 text-sm text-[rgba(17,17,17,.72)]">Switch the filter back to “All”.</div>
        </div>
      ) : null}
    </div>
  );
}