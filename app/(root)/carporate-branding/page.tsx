import CarporateBrandingSolution from '@/app/components/branding-details/carporate-branding/carporate-branding-solution/CarporateBrandingSolution'
import CarporateHero from '@/app/components/branding-details/carporate-branding/carporate-hero/CarporateHero'
import CorporateWorkflow from '@/app/components/branding-details/carporate-branding/carporate-workflow/CorporateWorkflow'
import React from 'react'

const page = () => {
    return (
        <div>
            <CarporateHero />
            <CarporateBrandingSolution />
            <CorporateWorkflow />
        </div>
    )
}

export default page