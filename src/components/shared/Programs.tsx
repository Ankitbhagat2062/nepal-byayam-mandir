"use client";

import React, { useState } from "react";
import { Sparkles, Activity, Shield, Users, Trophy, Heart } from "lucide-react";

interface Program {
  title: string;
  slogan: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  demographic: string;
  keyFeature: string;
  intensity: "Moderate" | "High" | "Adaptive" | "Elite";
}

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<number>(0);

  const programsData: Program[] = [
    {
      title: "Body Shaping & Toning",
      slogan: "Eliminate obesity and rebuild muscle definition.",
      description: "Engineered specifically to target fatty tissue deposits while tightening core muscle fiber. Utilizes structural circuit routines, custom cardio metrics, and calorie-deficit advice to shape your physique.",
      icon: Activity,
      demographic: "Individuals targeting fat loss & toning",
      keyFeature: "HIIT & resistance combinations",
      intensity: "High",
    },
    {
      title: "Weight Gaining",
      slogan: "Put on pure muscle mass instead of unwanted fat.",
      description: "A clinical mass-building protocol combining high-intensity compound resistance exercises with progressive hyper-trophy schemes. Maximizes protein-synthesis windows under strength supervision.",
      icon: Sparkles,
      demographic: "Trainees targeting muscle building & mass",
      keyFeature: "Heavy lifting & hypertrophy loops",
      intensity: "High",
    },
    {
      title: "Strength Improvement",
      slogan: "Enhance raw physical power and core capability.",
      description: "Focuses on advanced resistance parameters, powerlifting benchmarks, and core training activities. Perfect for boosting tendon thickness, bone density, and maximum raw physical load capability.",
      icon: Shield,
      demographic: "Anyone seeking peak physical power",
      keyFeature: "Power-lifting & core stability focus",
      intensity: "High",
    },
    {
      title: "Executive Bonus Program",
      slogan: "Tailored for busy corporate managers & housewives.",
      description: "Flexible, adaptive fitness paths designed to squeeze into tight schedules. Aims at keeping stress hormones low, posture straight, and energy levels elevated throughout the day.",
      icon: Users,
      demographic: "Busy professionals & homemakers",
      keyFeature: "Flexible scheduling & active recovery",
      intensity: "Adaptive",
    },
    {
      title: "Sports Improvement Performance Program",
      slogan: "Elite track to assist competitive athletes.",
      description: "Specialized athletic training optimizing acceleration, reaction rates, agility, and sports-specific endurance. Tailored to help athletes reach peak performance before championships.",
      icon: Trophy,
      demographic: "Competitive sports athletes",
      keyFeature: "Periodized loading & speed drills",
      intensity: "Elite",
    },
    {
      title: "Aerobics Dance Exercise Programs",
      slogan: "Fat burn-off via musical rhythmic routines.",
      description: "Varying low-impact and high-impact aerobic dance tracks. Increases cardiovascular volume, stimulates endorphin release, and promotes rapid fat-burning through highly engaging classes.",
      icon: Heart,
      demographic: "Individuals preferring cardio & rhythmic fitness",
      keyFeature: "Low/high impact aerobic tracks",
      intensity: "Moderate",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-card border-t border-b border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
            SPECIALIZED WORKOUTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
            Core Fitness <span className="gold-text-gradient">Programs</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our systematic, coach-guided program categories are tailored to match your specific physiological targets.
          </p>
        </div>

        {/* Tab-like Side Navigation Layout for Desktop, Grid for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Navigation: Program Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {programsData.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <button
                  key={prog.title}
                  onClick={() => setSelectedProgram(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all ${
                    selectedProgram === idx
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10"
                      : "bg-background border-border/50 hover:border-primary/30 text-foreground"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                      selectedProgram === idx
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-card border-border text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm tracking-tight">{prog.title}</h3>
                    <p
                      className={`text-[10px] truncate ${
                        selectedProgram === idx ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {prog.intensity} Intensity
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Content Showcase */}
          <div className="lg:col-span-8 bg-background border border-border/60 rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xl">
            {(() => {
              const current = programsData[selectedProgram];
              const CurrentIcon = current.icon;
              return (
                <div className="h-full flex flex-col justify-between space-y-8">
                  {/* Headline & Slogan */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                        <CurrentIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                          Intensity: {current.intensity}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-wide text-primary/95">
                      &ldquo;{current.slogan}&rdquo;
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                      {current.description}
                    </p>
                  </div>

                  {/* Program stats & descriptors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-card border border-border/45">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Target Group
                      </span>
                      <p className="text-xs font-semibold">{current.demographic}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Main Activity Focus
                      </span>
                      <p className="text-xs font-semibold">{current.keyFeature}</p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border/40">
                    <a
                      href="/pricing"
                      className="w-full sm:w-auto text-center text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-gold-hover transition-colors"
                    >
                      View Pricing Schema
                    </a>
                    <span className="text-[11px] text-muted-foreground text-center sm:text-left">
                      * All workouts include certified trainer support and orientation.
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
