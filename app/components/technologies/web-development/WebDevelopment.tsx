"use client";
import WebDevelopmentHero from './web-development-hero/WebDevelopmentHero'
import WebDevelopmentAbout from './web-development-about/WebDevelopmentAbout'
import WebDevelopmentWorkflow from './web-development-workflow/WebDevelopmentWorkflow'
import WhyChooseVibes from './why-choose-vibes/WhyChooseVibes'
import TechnologyStack from './technology-stack/TechnologyStack'
import BuiltWay from './built-way/BuiltWay'
import SuccessStory from '../../technology-details/success-story/SuccessStory'
import { useRouter } from "next/navigation";


const WebDevelopment = () => {
  const router = useRouter();
    return (
        <div>
            <WebDevelopmentHero />
            <WebDevelopmentAbout />
            <WebDevelopmentWorkflow />
            <WhyChooseVibes />
            <TechnologyStack />
            <BuiltWay />
            <SuccessStory
              title="Let’s Build Something Powerful"
              subtitle="Scalable digital solutions tailored for you"
              buttonText="Talk to Experts"
              arrowImage="/assests/img/technology-details/arrow.png"
              className="bg-black"
              onButtonClick={() => router.push("/contact")}
              />
        </div>
    )
}

export default WebDevelopment