import FAQAccordion from '@/components/shared/FAQAccordion'
import Pricing from '@/components/shared/Pricing'
import { baseOpenGraph } from '@/lib/constants';
import { Metadata } from 'next';
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing | Nepal Byayam Mandir | Gym • Zumba • Sauna",
    description:
      "View Nepal Byayam Mandir membership pricing. Choose your billing plan for gym, cardio, zumba, and sauna/steam—plus locker rentals and full membership access.",
    keywords: [
      "Nepal Byayam Mandir",
      "pricing",
      "membership pricing",
      "gym membership Nepal",
      "bodybuilding gym in Nepal",
      "gym and cardio",
      "zumba classes Nepal",
      "sauna and steam bath",
      "full membership",
      "locker rentals",
      "Kathmandu gym",
      "fitness club Nepal",
      "strength training",
      "aerobic classes",
      "health club",
      "NPR gym pass",
    ],
    alternates: {
      canonical: "https://www.nepalbyayammandir.com/pricing",
    },
    openGraph: {
      title: "Nepal Byayam Mandir Pricing | Gym, Zumba & Sauna",
      description:
        "Transparent membership rates for gym, cardio deck, zumba studio access, and sauna/steam sessions. Select monthly, quarterly, half-yearly, or annual plans.",
      url: "https://www.nepalbyayammandir.com/pricing",
       ...baseOpenGraph,
    },
  };
}
const page = () => {
    return (

        <section id="pricing" aria-label="Pricing">
            <Suspense fallback={null}>
                <Pricing />
                <div className="my-10 mx-auto flex items-center justify-center px-25 lg:my-20">
                    <FAQAccordion page='pricing' />
                </div>
            </Suspense>
        </section>

    )
}

export default page
