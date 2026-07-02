"use client";

import React, { useState } from "react";
import { Dumbbell, ShieldAlert, Zap, Coffee, Store, Flame, Compass } from "lucide-react";

interface Amenity {
  id: string;
  name: string;
  category: "fitness" | "wellness" | "retail";
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export default function Amenities() {
  const [activeTab, setActiveTab] = useState<"all" | "fitness" | "wellness" | "retail">("all");

  const amenitiesData: Amenity[] = [
    {
      id: "main_gym",
      name: "The Main Gym Floor",
      category: "fitness",
      description: "Nearly 3,500 sq. ft. of premium well-parqueted floor area equipped with state-of-the-art heavy iron resistance stacks, legacy dumbell sets, and top-tier cardio stations.",
      icon: Dumbbell,
      badge: "PIONEER DECK",
    },
    {
      id: "zumba_studio",
      name: "High-Octane Zumba Dance Studio",
      category: "fitness",
      description: "Spacious dance room with high-fidelity acoustics and shock-absorbent flooring, designed for fat burn, musical rhythm conditioning, and active aerobic toning.",
      icon: Flame,
      badge: "HIGH ENERGY",
    },
    {
      id: "kickboxing",
      name: "Kickboxing Terminal",
      category: "fitness",
      description: "Stamina-conditioning combat zone with heavy heavy-bags, speed pads, and soft flooring for agility, speed sculpting, and high-impact boxing drills.",
      icon: Zap,
      badge: "COMBAT ZONE",
    },
    {
      id: "yoga",
      name: "Yoga Sanctuary",
      category: "wellness",
      description: "Quiet, ambient room focusing on breathing, mindfulness, posture balance, flexibility, and stress release. A complete sensory disconnect environment.",
      icon: Compass,
      badge: "MINDFULNESS",
    },
    {
      id: "cafeteria",
      name: "The Post-Workout Cafeteria",
      category: "wellness",
      description: "Dedicated cafe offering fresh protein shakes, clean snacks, vitamin-rich cold presses, and dietary meals calibrated for fast muscle recovery.",
      icon: Coffee,
      badge: "WHOLESOME RECIPE",
    },
    {
      id: "health_shoppe",
      name: "The Health Shoppe",
      category: "retail",
      description: "On-site supplement boutique supplying certified pre-workouts, pure whey protein blends, multivitamin packages, and micronutrients.",
      icon: Store,
    },
    {
      id: "sportswear",
      name: "Sportswear Corner",
      category: "retail",
      description: "Official apparel booth featuring Nepal Byayam Mandir signature branding shirts, supportive hand wraps, weightlifting belts, and athletic gears.",
      icon: ShieldAlert,
    },
  ];

  const filteredAmenities = amenitiesData.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section id="amenities" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              FACILITY AMENITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              State-of-the-Art <span className="gold-text-gradient">Facilities</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Explore our premium facility divisions engineered for athletic conditioning, nutritional support, and complete body recovery.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-card border border-border/60 self-start md:self-end">
            {(["all", "fitness", "wellness", "retail"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.id}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar inside card */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center group-hover:border-primary/45 transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    {amenity.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {amenity.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                      {amenity.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-4 mt-6 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <span>Category</span>
                  <span className="text-foreground">{amenity.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
