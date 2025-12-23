import CorporateBrandingSolution from '@/app/components/branding-details/corporate-branding/corporate-branding-solution/CorporateBrandingSolution'
import CorporateHero from '@/app/components/branding-details/corporate-branding/corporate-hero/CorporateHero'
import CorporateWorkflow from '@/app/components/branding-details/corporate-branding/corporate-workflow/CorporateWorkflow'
import React from 'react'

const page = () => {
    return (
        <div>
            <CorporateHero />
            <CorporateBrandingSolution />
            <CorporateWorkflow />
        </div>
    )
}

export default page