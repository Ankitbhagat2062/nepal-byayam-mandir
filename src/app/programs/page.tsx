import Programs from '@/components/shared/Programs'
import React from 'react'

const page = () => {
  return (
        <section id="programs" aria-label="Programs">
          <React.Suspense fallback={null}>
            <Programs />
          </React.Suspense>
        </section>
  )
}

export default page
