"use client";

import React, { useState } from "react";
import { Check, Info, ShieldCheck, HelpCircle } from "lucide-react";

type Frequency = "monthly" | "quarterly" | "halfYearly" | "yearly";

interface PricingItem {
  id: string;
  name: string;
  scope: string;
  prices: Record<Frequency, number>;
  singleSession?: number;
  features: string[];
  isPopular?: boolean;
  notes?: string;
}

export default function Pricing() {
  const [billingFreq, setBillingFreq] = useState<Frequency>("monthly");

  const pricingData: PricingItem[] = [
    {
      id: "only_gym",
      name: "Only Gym Pass",
      scope: "Standard Weight Training & Heavy Iron Floor Pass",
      prices: {
        monthly: 3000,
        quarterly: 8000,
        halfYearly: 15000,
        yearly: 28000,
      },
      features: [
        "Full Gym Floor Access",
        "Free Weight & Iron Stack Decks",
        "Locker Room & Shower Access",
        "Trainer Orientation Session",
      ],
    },
    {
      id: "gym_cardio",
      name: "Gym / Cardio Combo",
      scope: "Weight Training + Dedicated Cardiovascular Deck Access",
      prices: {
        monthly: 4500,
        quarterly: 12000,
        halfYearly: 22000,
        yearly: 40000,
      },
      features: [
        "Everything in Only Gym",
        "Cardio Deck (Treadmills, Rowers)",
        "Advanced Fat-Burn Protocols",
        "Dual-Floor Privileges",
      ],
    },
    {
      id: "only_zumba",
      name: "Only Zumba Access",
      scope: "Dedicated Zumba Dance Studio Sessions",
      prices: {
        monthly: 2500,
        quarterly: 7000,
        halfYearly: 13000,
        yearly: 24000,
      },
      features: [
        "Zumba Studio Entry",
        "Certified Rhythmic Choreographers",
        "High-Octane Aerobic Dance Tracks",
        "Locker Room & Shower Access",
      ],
    },
    {
      id: "zumba_cardio",
      name: "Zumba / Cardio Combo",
      scope: "Zumba Studio Access combined with Cardiovascular Deck Area",
      prices: {
        monthly: 4000,
        quarterly: 11000,
        halfYearly: 20000,
        yearly: 36000,
      },
      features: [
        "Full Zumba Studio Classes",
        "Unlimited Cardio Deck Access",
        "Dual Conditioning Schemes",
        "Weight Monitoring Audits",
      ],
    },
    {
      id: "kickboxing",
      name: "Kickboxing Terminal",
      scope: "Stamina Conditioning, Combat Sculpting, & Bag Training",
      prices: {
        monthly: 3500,
        quarterly: 9500,
        halfYearly: 18000,
        yearly: 32000,
      },
      features: [
        "Kickboxing Terminal Access",
        "Striking & Bag Drills Coaching",
        "High-Intensity Core Scupting",
        "Handwrap & Glove Orientation",
      ],
    },
    {
      id: "yoga",
      name: "Yoga Sanctuary Access",
      scope: "Mindfulness, Inhale Peace, Exhale Stress Studio Access",
      prices: {
        monthly: 3000,
        quarterly: 8000,
        halfYearly: 15000,
        yearly: 28000,
      },
      features: [
        "Yoga Sanctuary Entry",
        "Posture & Flexibility Mentors",
        "Quiet Meditation Environment",
        "Mats & Accessory Blocks Provided",
      ],
    },
    {
      id: "sauna_steam",
      name: "Sauna & Steam Bath",
      scope: "Therapeutic Suite Access (Capped strictly at twice a week)",
      prices: {
        monthly: 2500,
        quarterly: 6500,
        halfYearly: 12000,
        yearly: 22000,
      },
      singleSession: 500,
      features: [
        "Sauna Therapeutic Cabin Access",
        "Wet Steam Room Access",
        "Detoxification & Active Recovery",
        "Towel Service Included",
      ],
      notes: "Strict limit: maximum 2 sessions per week per member.",
    },
    {
      id: "full_membership",
      name: "Full Membership Pass",
      scope: "All-Inclusive Access: Gym, Cardio, Zumba, Sauna & Steam",
      prices: {
        monthly: 6500,
        quarterly: 17500,
        halfYearly: 32000,
        yearly: 58000,
      },
      features: [
        "All Facilities & Cardio Decks",
        "All Zumba & Aerobic Classes",
        "Sauna & Steam Suite Access",
        "Includes Free Premium Locker Rental",
        "Priority Trainer Assessment Reviews",
      ],
      isPopular: true,
      notes: "The ultimate package for comprehensive physical cultivation.",
    },
    {
      id: "locker_rentals",
      name: "Locker Rentals",
      scope: "Secure On-Site Personal Athlete Lockers",
      prices: {
        monthly: 500,
        quarterly: 1350,
        halfYearly: 2500,
        yearly: 4500,
      },
      features: [
        "Personalized Key Combination",
        "Secured CCTV-Monitored Corridor",
        "Large Gear Bag Storage Vol",
        "Available All Gym Hours",
      ],
    },
  ];

  const getFreqName = (f: Frequency) => {
    switch (f) {
      case "monthly":
        return "/ Month";
      case "quarterly":
        return "/ 3 Months";
      case "halfYearly":
        return "/ 6 Months";
      case "yearly":
        return "/ Year";
    }
  };

  const getSavingsNote = (item: PricingItem, freq: Frequency) => {
    if (freq === "monthly") return null;
    const monthlyRate = item.prices.monthly;
    let factor = 1;
    if (freq === "quarterly") factor = 3;
    if (freq === "halfYearly") factor = 6;
    if (freq === "yearly") factor = 12;

    const rawCost = monthlyRate * factor;
    const discountedCost = item.prices[freq];
    const savings = rawCost - discountedCost;

    if (savings > 0) {
      return `Save NPR ${savings.toLocaleString()}`;
    }
    return null;
  };

  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
            MEMBERSHIPS & RATES SCHEMA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            Transparent Pricing <span className="gold-text-gradient">Schema</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Select your preferred billing frequency. Standardize gym access, zumba classes, sauna facilities, or choose the all-inclusive full membership deck.
          </p>

          {/* Billing Frequency Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-card border border-border/70 mt-4 shadow-inner">
            {(["monthly", "quarterly", "halfYearly", "yearly"] as const).map((freq) => (
              <button
                key={freq}
                onClick={() => setBillingFreq(freq)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  billingFreq === freq
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {freq === "monthly" && "Monthly"}
                {freq === "quarterly" && "Quarterly (3M)"}
                {freq === "halfYearly" && "Half-Year (6M)"}
                {freq === "yearly" && "Annual (12M)"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((item) => {
            const price = item.prices[billingFreq];
            const savings = getSavingsNote(item, billingFreq);
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  item.isPopular
                    ? "bg-card border-primary shadow-2xl ring-2 ring-primary/20 scale-[1.02] md:scale-[1.03] z-10"
                    : "bg-card border-border/50 hover:border-primary/20 hover:shadow-xl"
                }`}
              >
                {/* Popular Ribbon Accent */}
                {item.isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Recommended / All-Inclusive
                  </span>
                )}

                <div className="space-y-6">
                  {/* Name & Scope */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                      {item.scope}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-2 border-t border-b border-border/40 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-muted-foreground">NPR</span>
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {price.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold">
                        {getFreqName(billingFreq)}
                      </span>
                    </div>

                    {/* Savings tag */}
                    {savings && (
                      <span className="inline-block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/30">
                        {savings}
                      </span>
                    )}

                    {/* Single session helper for Sauna */}
                    {item.singleSession && (
                      <div className="text-[11px] font-medium text-muted-foreground pt-1 flex items-center justify-between">
                        <span>Single Session Pass:</span>
                        <span className="font-bold text-foreground">NPR {item.singleSession}</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs leading-relaxed">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer notes / CTAs */}
                <div className="mt-8 space-y-4">
                  {item.notes && (
                    <div className="flex gap-2 p-3 rounded-xl bg-background/50 border border-border/40 text-[10px] text-muted-foreground leading-normal">
                      <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{item.notes}</span>
                    </div>
                  )}

                  <button
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      item.isPopular
                        ? "bg-primary text-primary-foreground hover:bg-gold-hover shadow-md hover:shadow-lg shadow-primary/20"
                        : "bg-background border border-border hover:border-primary/40 hover:bg-card text-foreground"
                    }`}
                  >
                    Select Plan Schema
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capping details alert */}
        <div className="mt-16 max-w-2xl mx-auto p-5 rounded-2xl border border-border bg-card/60 flex items-start gap-4">
          <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-xs uppercase tracking-wider">Note on Therapeutic Services</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sauna & Steam Bath sessions are strictly regulated for health and safety. Subscriptions are capped at twice a week to promote optimal muscle recovery and avoid dangerous hyperthermia or dehydration, aligned with pioneer athletic guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
