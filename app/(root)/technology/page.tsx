"use client";
import OurBlogs from '@/app/components/blogs/blogs'
// import MarqueeTabsSlider from '@/app/components/clients/clients'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import TechSolutions from '@/app/components/technology-details/tech-solutions/TechSolutions'
import TechnologyDetailsHero from '@/app/components/technology-details/technology-details-hero/TechnologyDetailsHero'
import React from 'react'
import { useRouter } from "next/navigation";
import CommonCasestudy from '@/app/components/common/CommonCasestudy/CommonCasestudy';
import { CaseStudy } from '@/types/commoncasestudy';
import MarqueeTabsSlider from '@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider';

const cards: CaseStudy[] = [
  {
    id: 1,
    img: "/assests/img/home/interio-heaven-img.jpg",
    title: "Interio Heaven",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
  {
    id: 2,
    img: "/assests/img/home/tomarrow-india-img.jpg",
    title: "Tomorrow India",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
  {
    id: 3,
    img: "/assests/img/home/mahakumbh-img.png",
    title: "Mahakumbh",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
];

const logos = [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
];

const tabs = [
  "healthcare",
  "education",
  "realestate",
  "entertainment",
  "government",
];

const page = () => {
    const router = useRouter();
    return (
        <div>
            <TechnologyDetailsHero />
            <TechSolutions />
             <CommonCasestudy
                badgeText="CASE STUDIES"
                title="Code that Delivers"
                highlightTitle="Real Impact"
                description="Explore real technology success stories where Vibes turns complex challenges into measurable outcomes, delivering smarter, scalable digital solutions."
                buttonText="Dive Into Success Stories"
                cards={cards}
                bgColor="#dfe8dd"
                />
            <OurBlogs />
             <MarqueeTabsSlider
                badgeText="Trusted Clients"
                highlightTitle="Esteemed"
                title="Clients"
                description="A curated showcase of visual work that shapes brand perception across channels."
                logos={logos}
                tabs={tabs}
                bgColor="#466E59"
                />
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

export default page
