import CaseStudyDetailsAbout from '@/app/components/case-study-details/case-study-details-about/CaseStudyDetailsAbout'
import CaseStudyDetailsBranding from '@/app/components/case-study-details/case-study-details-branding/CaseStudyDetailsBranding'
import CaseStudyDetailsBrief from '@/app/components/case-study-details/case-study-details-brief/CaseStudyDetailsBrief'
import CaseStudyDetailsHero from '@/app/components/case-study-details/case-study-details-hero/CaseStudyDetailsHero'
import CaseStudyDetailsImpact from '@/app/components/case-study-details/case-study-details-impact/CaseStudyDetailsImpact'
import React from 'react'

const page = () => {
    return (
        <div>
            <CaseStudyDetailsHero />
            <CaseStudyDetailsAbout />
            <CaseStudyDetailsBrief />
            <CaseStudyDetailsImpact />
            <CaseStudyDetailsBranding />

        </div>
    )
}

export default page