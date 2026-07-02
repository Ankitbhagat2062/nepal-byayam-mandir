"use client";

import React from "react";
import { Award, Landmark, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";

type AwardItem = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  icon: React.ReactNode;
};

const mockAwards: AwardItem[] = [
  {
    title: "DHARMA SHREE National Open",
    subtitle: "Highest Prestige Championship",
    year: "Since 2042 B.S. (1985 A.D.)",
    description:
      "A legacy-driven bodybuilding arena honoring the national martyr Dharma Bhakta Mathema—recognized for elite athletes and high public esteem.",
    icon: <Trophy className="w-5 h-5 text-primary" />,
  },
  {
    title: "Pioneer Establishment (Est. 2010 B.S.)",
    subtitle: "Founding Gymnasium of Nepal",
    year: "1953 A.D.",
    description:
      "Nepal Byayam Mandir set the foundation for structured strength training culture and disciplined athletic pathways in Kathmandu.",
    icon: <Landmark className="w-5 h-5 text-primary" />,
  },
  {
    title: "Institutional Excellence",
    subtitle: "Coaching + Health Philosophy",
    year: "Ongoing",
    description:
      "Built on the WHO-inspired MOVE FOR HEALTH spirit—integrating strength training with preventative wellness and recovery-first routines.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
];

export default function LegacyAndAwards() {
  return (
    <section id="legacy-awards" className="py-24 bg-card border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Legacy & Awards
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            Celebrating <span className="gold-text-gradient">Legacy</span> That Performs
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Mock data component: an interim module to showcase awards, historic milestones, and institutional
            achievements. Replace with real content later.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockAwards.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl bg-background/60 border border-border/50 p-7 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/90 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                    Award
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-border/50 bg-background/40 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="space-y-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider">What this section does</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Highlights key heritage milestones in a compact card layout. Swap mock content with real historic
              records later.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-background/60">
              <span className="text-xs font-extrabold text-foreground">70+ Yrs</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Continuous Coaching</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-background/60">
              <span className="text-xs font-extrabold gold-text-gradient">DHARMA SHREE</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">National Arena</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

