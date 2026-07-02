"use client";

import React from "react";
import { ShieldCheck, Heart, Award, Sparkles, AlertCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card border-t border-b border-border/40 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Legacy & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            Our Rich <span className="gold-text-gradient">Heritage</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            For decades, Nepal Byayam Mandir has served as the anchor of physical cultivation in Nepal, shaping both bodies and character.
          </p>
        </div>

        {/* Grid Layout for details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1: Pioneer Gym */}
          <div className="p-8 rounded-2xl bg-background border border-border/80 hover:border-primary/40 transition-all hover:shadow-xl duration-350 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">The Pioneer Gym</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in <strong>2010 B.S. (1953 A.D.)</strong>. It has produced numerous national and international athletes since its inception.
              </p>
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-primary/80 border-t border-border/40 pt-4">
              Est. 2010 B.S. (1953 A.D.)
            </div>
          </div>

          {/* Box 2: Dharma Shree Arena */}
          <div className="p-8 rounded-2xl bg-background border border-primary/30 dark:border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl duration-350 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Highlight Indicator */}
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-[9px] uppercase tracking-widest font-bold rounded-bl-lg">
              PRESTIGIOUS
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Dharma Shree Arena</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Since <strong>2042 B.S. (1985 A.D.)</strong>, it has been organizing and conducting the &apos;DHARMA SHREE&apos; bodybuilding championship, the country&apos;s most prestigious and highest cash-prize competition, held in honor of the immortal national martyr <strong>Dharma Bhakta Mathema</strong>.
              </p>
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-primary border-t border-border/40 pt-4">
              Martyr Dharma Bhakta Mathema Tribute
            </div>
          </div>

          {/* Box 3: WHO Philosophy */}
          <div className="p-8 rounded-2xl bg-background border border-border/80 hover:border-primary/40 transition-all hover:shadow-xl duration-350 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">WHO: Move For Health</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Philosophy: Aligned with the World Health Organization (WHO) official slogan, <strong>&apos;MOVE FOR HEALTH&apos;</strong>—combating physical inactivity, high blood pressure, diabetes, and stress, to build perfect physique and exceptional mental health.
              </p>
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-primary/80 border-t border-border/40 pt-4">
              Official Slogan Alignment
            </div>
          </div>
        </div>

        {/* Highlight Quote Alert */}
        <div className="mt-12 p-6 rounded-2xl border border-border/80 bg-background/50 flex items-start gap-4 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Commitment to Health & Excellence</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Nepal Byayam Mandir remains not just a space for heavy lifters, but a complete sanctuary focusing on preventive health. Through customized guidance and structural programs, we target stress reduction, high blood pressure regulation, and metabolic conditioning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
