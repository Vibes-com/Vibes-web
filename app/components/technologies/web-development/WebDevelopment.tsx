
import WebDevelopmentHero from './web-development-hero/WebDevelopmentHero'
import WebDevelopmentAbout from './web-development-about/WebDevelopmentAbout'
import WebDevelopmentWorkflow from './web-development-workflow/WebDevelopmentWorkflow'
import WhyChooseVibes from './why-choose-vibes/WhyChooseVibes'
import TechnologyStack from './technology-stack/TechnologyStack'
import BuiltWay from './built-way/BuiltWay'

const WebDevelopment = () => {
    return (
        <div>
            <WebDevelopmentHero />
            <WebDevelopmentAbout />
            <WebDevelopmentWorkflow />
            <WhyChooseVibes />
            <TechnologyStack />
            <BuiltWay />
        </div>
    )
}

export default WebDevelopment