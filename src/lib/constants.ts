import { ActivityIcon, Award, CheckCircle2, CircleHelp, CreditCard, Dumbbell, Heart, HeartPulse, type LucideIcon, MapPin, Scale, Shield, ShieldCheck, Sparkles, Trophy, Users, Waves } from "lucide-react";
import { Activity } from "react";


export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://www.nepalbyayammandir.com/#gym",
  "name": "Nepal Byayam Mandir",
  "image": "https://www.nepalbyayammandir.com.np/og-premium-banner.jpg",
  "description": "Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in 1953 A.D.",
  "url": "https://www.nepalbyayammandir.com.np",
  "telephone": "+977-1-XXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kamaladi",
    "addressLocality": "Kathmandu",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "05:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/nbmnepal/",
    "https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en"
  ]
};

export const AboutFaqs = [
  {
    value: "hours",
    icon: ShieldCheck,
    question: "What are your operational hours?",
    answer: 'We are open from 5:00 AM to 9:00 PM, Monday through Saturday.',
  },
  {
    value: "membership",
    icon: CreditCard,
    question: "Do you offer monthly, quarterly, and yearly memberships?",
    answer: 'Yes, we offer flexible membership options to suit your needs.',
  },
  {
    value: "programs",
    icon: Dumbbell,
    question: "Which training programs do you have?",
    answer: 'We offer a variety of training programs including strength training, cardio, and group classes.',
  },
  {
    value: "amenities",
    icon: Waves,
    question: "Is sauna & steam bath included in every plan?",
    answer: 'Yes, our sauna and steam bath facilities are available to all members.',
  },
  {
    value: "location",
    icon: MapPin,
    question: "Where are you located?",
    answer: 'We are located at Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal.',
  },
  {
    value: "newcomers",
    icon: CircleHelp,
    question: "I’m new—do I get trainer orientation?",
    answer: 'Yes, we provide orientation sessions for all new members to help them get started.',
  },
];

export const HomeFaqs = [
  {
    value: "hours",
    icon: ShieldCheck,
    question: "What are your operational hours?",
    answer:
      "We’re open Sunday–Friday from 5:00 AM to 9:00 PM, and Saturdays from 6:00 AM to 7:00 PM. Closures are only during designated local festivals.",
  },
  {
    value: "membership",
    icon: CreditCard,
    question: "Do you offer monthly, quarterly, and yearly memberships?",
    answer:
      "Yes. Choose your preferred billing frequency from Monthly, Quarterly (3M), Half-Year (6M), or Annual (12M). Pricing is shown on the Rates Schema section.",
  },
  {
    value: "programs",
    icon: Dumbbell,
    question: "Which training programs do you have?",
    answer:
      "We support Body Shaping & Toning, Weight Gaining, Strength Improvement, an Executive Bonus Program, Sports Improvement Performance Program, and Aerobics Dance tracks.",
  },
  {
    value: "amenities",
    icon: Waves,
    question: "Is sauna & steam bath included in every plan?",
    answer:
      "Sauna & Steam Bath access is available as part of the appropriate membership plans. Sessions are capped for health and safety (strictly regulated per week). See the Pricing section notes for limits.",
  },
  {
    value: "location",
    icon: MapPin,
    question: "Where are you located?",
    answer:
      "Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal.",
  },
  {
    value: "newcomers",
    icon: CircleHelp,
    question: "I’m new—do I get trainer orientation?",
    answer:
      "Yes. Each membership includes trainer orientation and guidance so you can start safely and train effectively from day one.",
  },
] as const;
export const navLinks = [
  { name: "About Heritage", href: "/about" },
  { name: "Amenities", href: "/amenities" },
  { name: "Programs", href: "/programs" },
  { name: "Rates Schema", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const programFeatures = [
  {
    title: "Body Shaping & Toning",
    description: "Specifically engineered to help eliminate obesity.",
    href: "/programs#body-shaping-toning",
    icon: Scale,
  },
  {
    title: "Clinical Weight Gaining",
    description: "Formulated to put on high-density muscle mass instead of fat.",
    href: "/programs#clinical-weight-gaining",
    icon: Dumbbell,
  },
  {
    title: "Strength & Endurance Improvement",
    description: "Advanced resistance parameters to enhance raw power.",
    href: "/programs#strength-endurance",
    icon: Award,
  },
  {
    title: "Executive Bonus System",
    description: "Flexible tracking tailored for busy corporate executives and housewives to stay fit.",
    href: "/programs#executive-bonus",
    icon: Users,
  },
  {
    title: "Competitive Sports Conditioning",
    description: "Elite athletic tracks for maximizing performance.",
    href: "/programs#competitive-conditioning",
    icon: CheckCircle2,
  },
  {
    title: "Aerobics & Kinetic Dance",
    description: "Low/high impact routines built for systemic fat burn and firming.",
    href: "/programs#aerobics-kinetic-dance",
    icon: HeartPulse,
  },
] as const;


export const programs: {
  id: string;
  title: string;
  intensity: Intensity;
  icon: LucideIcon;
  deepCopy: string;
}[] = [
    {
      id: "body-shaping-toning",
      title: "Body Shaping & Toning",
      intensity: "High Intensity" as const,
      icon: ActivityIcon,
      deepCopy:
        "Formulated as a targeted, data-backed physical training system engineered explicitly to help eliminate obesity, sculpt definitions, and lean down body mass index ratios.",
    },
    {
      id: "weight-gaining",
      title: "Weight Gaining",
      intensity: "High Intensity" as const,
      icon: Sparkles,
      deepCopy:
        "A strategic, muscle-density program enabling individuals to efficiently accumulate high-quality muscle mass instead of unwanted fat cells, driving healthy, sustainable weight management.",
    },
    {
      id: "strength-improvement",
      title: "Strength Improvement",
      intensity: "High Intensity" as const,
      icon: Shield,
      deepCopy:
        "Advanced resistance parameters structured entirely to enhance raw physical power output, structural core conditioning, and heavy compound iron activities.",
    },
    {
      id: "executive-bonus",
      title: "Executive Bonus Program",
      intensity: "Adaptive" as const,
      icon: Trophy,
      deepCopy:
        "Flexible, highly adaptive training modules designed specifically for busy corporate executives and housewives to assist them in keeping exceptionally fit within constrained daily schedules.",
    },
    {
      id: "sports-improvement",
      title: "Sports Improvement Performance Program",
      intensity: "Elite" as const,
      icon: Dumbbell,
      deepCopy:
        "High-performance athletic parameters engineered to assist competitive sports athletes in maximizing metabolic conditioning, explosive power, and tactical output.",
    },
    {
      id: "aerobics-dance",
      title: "Aerobics Dance Exercise Programs",
      intensity: "Dynamic / Multi-Intensity" as const,
      icon: Heart,
      deepCopy:
        "Tailored aerobics track designed for housewives, beginners, and advanced trainees looking for fast fat burn-off, muscle toning, and structural firming via mixed low and high impact routines.",
    },
  ];
export type Intensity = "All" | "High Intensity" | "Adaptive" | "Elite" | "Dynamic / Multi-Intensity";
export const intensityToBadge: Record<Exclude<Intensity, "All">, string> = {
  "High Intensity": "High Intensity",
  Adaptive: "Adaptive Intensity",
  Elite: "Elite Intensity",
  "Dynamic / Multi-Intensity": "Dynamic / Multi-Intensity",
};