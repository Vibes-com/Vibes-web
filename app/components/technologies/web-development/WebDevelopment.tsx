
import React from 'react'
import WebDevelopmentHero from './web-development-hero/WebDevelopmentHero'
import WebDevelopmentAbout from './web-development-about/WebDevelopmentAbout'
import WebDevelopmentWorkflow from './web-development-workflow/WebDevelopmentWorkflow'
import WhyChooseVibes from './why-choose-vibes/WhyChooseVibes'

const WebDevelopment = () => {
    return (
        <div>
            <WebDevelopmentHero />
            <WebDevelopmentAbout />
            <WebDevelopmentWorkflow />
            <WhyChooseVibes />
        </div>
    )
}

export default WebDevelopment