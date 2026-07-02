import Pricing from '@/components/shared/Pricing'
import { Suspense } from 'react'

const page = () => {
    return (

        <section id="pricing" aria-label="Pricing">
            <Suspense fallback={null}>
                <Pricing />
            </Suspense>
        </section>

    )
}

export default page
