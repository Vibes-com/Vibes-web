import OurBlogs from '@/app/components/blogs/blogs'
import MarqueeTabsSlider from '@/app/components/clients/clients'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import TechSolutions from '@/app/components/technology-details/tech-solutions/TechSolutions'
import TechnologyCaseStudies from '@/app/components/technology-details/technology-case-studies/TechnologyCaseStudies'
import TechnologyDetailsHero from '@/app/components/technology-details/technology-details-hero/TechnologyDetailsHero'
import React from 'react'

const page = () => {
    return (
        <div>
            <TechnologyDetailsHero />
            <TechSolutions />
            <TechnologyCaseStudies />
            <OurBlogs />
            <MarqueeTabsSlider />
            <SuccessStory />
        </div>
    )
}

export default page
