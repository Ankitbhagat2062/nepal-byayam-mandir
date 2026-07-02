"use client";

import React from "react";
import { CalendarDays, Dumbbell, Zap, Coffee } from "lucide-react";

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  badge?: string;
};

export function ValueCard({ icon, title, lines, badge }: ValueCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 border border-border/50 p-7 hover:border-primary/30 hover:shadow-xl transition-all">
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
            {icon}
          </div>
          {badge ? (
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/95 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
              {badge}
            </span>
          ) : null}
        </div>

        <div>
          <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
          <div className="mt-3 space-y-2">
            {lines.map((l, i) => (
              <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                {l}
              </p>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border/40 text-[10px] uppercase tracking-widest font-bold text-muted-foreground flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          <span>Crafted for disciplined growth</span>
        </div>
      </div>
    </div>
  );
}

export function DepthLayer() {
  // Simple decorative layer to avoid missing component errors.
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-80">
        <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />

      <div className="absolute inset-x-8 bottom-10 h-24 rounded-2xl border border-border/40 bg-background/40 backdrop-blur">
        <div className="h-full flex items-center justify-between px-5">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <Dumbbell className="w-4 h-4 text-primary" />
            <span>Strength Flow</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>Elite Intensity</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <Coffee className="w-4 h-4 text-primary" />
            <span>Recovery Lifestyle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceMatrix() {
  const blocks = [
    {
      title: "Amenities",
      desc: "Explore facilities by category: fitness, wellness, and retail.",
      href: "/amenities",
    },
    {
      title: "Programs",
      desc: "Choose your training objective and intensity profile.",
      href: "/programs",
    },
    {
      title: "Pricing",
      desc: "Select membership schema by monthly, quarterly, half-year, or annual.",
      href: "/pricing",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blocks.map((b) => (
        <a
          key={b.href}
          href={b.href}
          className="group relative rounded-3xl border border-border/50 bg-background/30 p-7 hover:border-primary/30 hover:bg-background/60 transition-all"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          <div className="relative space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-bold">
              Direct Link
            </div>
            <h3 className="text-lg font-extrabold tracking-tight group-hover:text-primary transition-colors">
              {b.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            <div className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:translate-x-0.5 transition-transform">
              Jump to section →
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

