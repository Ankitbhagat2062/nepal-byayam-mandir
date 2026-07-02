import {
  ActivityIcon, Award, CheckCircle2, CircleHelp, CreditCard, Dumbbell, Heart, HeartPulse,
  MapPin, Scale, Shield, ShieldCheck, Sparkles, Trophy, Users, Waves,
  CalendarDays, Percent, ShieldAlert, KeyRound, HelpCircle,
  Flame, Sandwich, ShoppingBag, Eye,
  Activity, Gauge,
  Phone, UserCheck, Cpu, Landmark,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

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

export const ContactFaqs = [
  {
    value: "exact-location",
    icon: MapPin,
    question: "How do I find the gym in Kamaladi?",
    answer: "We are prominently located at Martyr Dharma Bhakta Mathema Marg, Kamaladi, Kathmandu, Nepal, situated near major corporate commercial centers[cite: 6].",
  },
  {
    value: "phone-inquiries",
    icon: Phone,
    question: "Can I register or renew my membership package over the phone?",
    answer: "You can reach our help hotline daily for inquiries; however, full account generation and physical credential tracking are securely completed at our reception desk[cite: 6].",
  },
  {
    value: "hardware-access",
    icon: Cpu,
    question: "How does your automated automated door checking system work?",
    answer: "Our member database connects seamlessly via webhooks to the physical gym's automated electronic door lock systems[cite: 6]. Active profile verification instantly releases the lock relays when a member checks in[cite: 6].",
  },
  {
    value: "billing-notifications",
    icon: ShieldAlert,
    question: "Will I be notified automatically before my subscription expires?",
    answer: "Yes, our automated CRM tracking system generates proactive billing alerts and expiration notifications via SMS/Email well before your multi-month pass lapses[cite: 6].",
  },
  {
    value: "holiday-schedule",
    icon: Landmark,
    question: "Are you open on public holidays and local festivals?",
    answer: "Schedule revisions or holiday closures are coordinated in advance. Our automated broadcast engine pushes updates for birthdays, public holidays, and national festivals directly to active member profiles[cite: 6].",
  },
  {
    value: "corporate-partnerships",
    icon: UserCheck,
    question: "Who do I contact for custom corporate wellness partnerships?",
    answer: "Corporate representatives can submit an official inquiry through our contact form dropdown, or visit our administration offices directly on-site during operational hours[cite: 6].",
  },
];

export const ProgramsFaqs = [
  {
    value: "obesity-toning",
    icon: Scale,
    question: "Which program is best for weight loss and muscle firming?",
    answer: "Our Body Shaping & Toning track is a targeted, High-Intensity physical training system specifically engineered to help eliminate obesity and cultivate lean muscle definition[cite: 6].",
  },
  {
    value: "mass-gaining",
    icon: Gauge,
    question: "How does the Weight Gaining program ensure I don't just gain fat?",
    answer: "Our clinical muscle-building protocol applies strict progressive resistance guidelines, enabling individuals to efficiently put on clean muscle mass instead of unwanted body fat[cite: 6].",
  },
  {
    value: "executive-bonus",
    icon: Activity,
    question: "What is the Executive Bonus Program?",
    answer: "This is a flexible, highly adaptive training framework designed specifically for busy corporate executives and homemakers, helping them maintain peak fitness within tight daily routines[cite: 6].",
  },
  {
    value: "athlete-conditioning",
    icon: Award,
    question: "Do you provide advanced modules for competitive sports athletes?",
    answer: "Yes. Our Sports Improvement Performance Program delivers Elite Intensity training parameters structured to maximize power output, explosive endurance, and game-day physical readiness[cite: 6].",
  },
  {
    value: "housewife-aerobics",
    icon: Sparkles,
    question: "Are the Aerobics Dance programs suitable for absolute beginners?",
    answer: "Absolutely. Our Aerobics Dance Exercise tracks mix low and high impact routines, making them highly accessible for homemakers, beginners, and advanced trainees looking for fun, high-energy fat burn[cite: 6].",
  },
  {
    value: "who-philosophy",
    icon: Heart,
    question: "What health philosophy guides your fitness programming?",
    answer: "All programs line up with the World Health Organization's (WHO) official slogan, 'MOVE FOR HEALTH'—aiming to combat physical inactivity, high blood pressure, diabetes, and mental stress[cite: 6].",
  },
];

export const AmenitiesFaqs = [
  {
    value: "gym-floor-size",
    icon: Dumbbell,
    question: "How large is the main training environment?",
    answer: "The Main Gym features nearly 3,500 square feet of beautifully well-parqueted floor area equipped with premium, state-of-the-art strength lines and heavy iron selections[cite: 6].",
  },
  {
    value: "zumba-kickboxing",
    icon: Flame,
    question: "Are the Zumba and Kickboxing classes held in separate studios?",
    answer: "Yes. We feature completely optimized dedicated zones, including a High-Octane Zumba Dance Studio and a professional Kickboxing Terminal equipped with tactical heavy-bag arrays and protection mats[cite: 6].",
  },
  {
    value: "sauna-steam",
    icon: Waves,
    question: "What therapeutic spa facilities do you offer?",
    answer: "We house clean, premium Sauna and Steam Bath therapeutic suites engineered to assist muscle recovery, eliminate stress, and boost vascular health[cite: 6].",
  },
  {
    value: "nutrition-cafe",
    icon: Sandwich,
    question: "Is there an on-site facility for post-workout nutrition?",
    answer: "Yes, our Post-Workout Cafeteria serves clean, wholesome food, recovery options, and custom nutritional shakes explicitly crafted to boost your training results[cite: 6].",
  },
  {
    value: "health-shoppe",
    icon: ShoppingBag,
    question: "Can I buy authentic fitness gear and vitamins at the gym?",
    answer: "Yes. The Health Shoppe handles verified vitamins and premium supplements, while our Sportswear Corner supplies top-tier athletic apparel right inside the facility[cite: 6].",
  },
  {
    value: "facility-tour",
    icon: Eye,
    question: "Can I tour the facility before choosing a membership plan?",
    answer: "We warmly welcome visitors. Senior coordinators are available daily between 5:00 AM and 9:00 PM to take you through our specialized zones and amenities[cite: 6].",
  },
];

export const PricingFaqs = [
  {
    value: "billing-cycles",
    icon: CalendarDays,
    question: "What billing frequencies are available for memberships?",
    answer: "All core categories support programmatic selection tiers across four distinct billing frequencies: Monthly, Quarterly (3 Months), Half-Yearly (6 Months), and Yearly/Annual agreements[cite: 6].",
  },
  {
    value: "sauna-rules",
    icon: ShieldAlert,
    question: "Are there any restrictions on the Sauna & Steam Bath facilities?",
    answer: "Yes. To protect client wellness and maximize facility safety, use of the therapeutic suite is strictly capped at a maximum of twice a week per member[cite: 6]. We also offer an independent Single Session pass alongside standard tiers[cite: 6].",
  },
  {
    value: "combo-options",
    icon: Percent,
    question: "Do you offer bundle packages for multiple services?",
    answer: "Yes. We offer optimized combo options including the Gym/Cardio Combo and the Zumba/Cardio Combo, alongside our all-inclusive Full Membership Pass which unifies Gym, Cardio, Zumba, Sauna, and Steam Suite access[cite: 6].",
  },
  {
    value: "locker-rentals",
    icon: KeyRound,
    question: "Can I rent a personal locker on a long-term basis?",
    answer: "Absolutely. Secure on-site personal athlete lockers are available to rent matching your billing preference cycles: Monthly, Quarterly, Half-Yearly, or Annually[cite: 6].",
  },
  {
    value: "joining-fees",
    icon: CreditCard,
    question: "Are there any hidden costs or registration fees?",
    answer: "Our rates are completely transparent according to the database package structure selected[cite: 6]. There are no hidden overhead modifications to your active subscription fee tracking.",
  },
  {
    value: "membership-transfer",
    icon: HelpCircle,
    question: "Can I freeze or transfer my long-term membership plan?",
    answer: "Multi-month contract accounts (Quarterly, Half-Yearly, and Annual) can request status freezes or transfers through our front-desk CRM management system before the contract expiration block hits[cite: 6].",
  },
];
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