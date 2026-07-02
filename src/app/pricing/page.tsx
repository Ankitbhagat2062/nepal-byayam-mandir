import FAQAccordion from '@/components/shared/FAQAccordion'
import Pricing from '@/components/shared/Pricing'
import { Suspense } from 'react'

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
