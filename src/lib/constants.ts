import { Award, CheckCircle2, CircleHelp, CreditCard, Dumbbell, HeartPulse, MapPin, Scale, ShieldCheck, Users, Waves } from "lucide-react";


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
    answer:'We are open from 5:00 AM to 9:00 PM, Monday through Saturday.',
  },
  {
    value: "membership",
    icon: CreditCard,
    question: "Do you offer monthly, quarterly, and yearly memberships?",
    answer:'Yes, we offer flexible membership options to suit your needs.',
  },
  {
    value: "programs",
    icon: Dumbbell,
    question: "Which training programs do you have?",
    answer:'We offer a variety of training programs including strength training, cardio, and group classes.',
  },
  {
    value: "amenities",
    icon: Waves,
    question: "Is sauna & steam bath included in every plan?",
    answer:'Yes, our sauna and steam bath facilities are available to all members.',
  },
  {
    value: "location",
    icon: MapPin,
    question: "Where are you located?",
    answer:'We are located at Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal.',
  },
  {
    value: "newcomers",
    icon: CircleHelp,
    question: "I’m new—do I get trainer orientation?",
    answer:'Yes, we provide orientation sessions for all new members to help them get started.',
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