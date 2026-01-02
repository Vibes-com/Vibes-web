"use client";
import Hero from "../components/hero/Hero";
import Technology from "../components/technology/technology";
import Branding from "../components/branding/branding";
import Digital from "../components/digital/digital";
import CaseStudies from "../components/casestudies/casestudies";
import TeamMembers from "../components/teammember/teammember";
import TeamDreamSection from "../components/teamdream/teamdream";
import MilestoneMetrics from "../components/milestones/milestones";
// import MarqueeTabsSlider from "../components/clients/clients";
import HomeGallery from "../components/homegallery/HomeGallery";
import MarqueeStorySection, { SlideItem } from "../components/common/MarqueeStorySection/MarqueeStorySection";
// import MarqueeStorySection from "../components/common/MarqueeStorySection/MarqueeStorySection";



const slides: SlideItem[] = [
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
];

const page = () => {
  return (
    <div>

      <Hero />
      <TeamDreamSection />
      {/* <TogetherMain /> */}
      {/* <Technology />
      <Branding />
      <Digital /> */}
      <div className="relative">
        <div className=" relative sm:sticky md:sticky lg:sticky xl:sticky 2xl:sticky top-0 z-[10]">
          <Technology />
        </div>
        <div className="relative sm:sticky md:sticky lg:sticky xl:sticky 2xl:sticky top-0 z-[20]">
          <Branding />
        </div>
        <div className="relative sm:sticky md:sticky lg:sticky xl:sticky 2xl:sticky top-0 z-[30]">
          <Digital />
        </div>
      </div>

      <CaseStudies />
      {/* <SocialStorytelling /> */}
      <MarqueeStorySection
        badge="WORK SHOWCASE"
        title=" in Motion"
        highlightTitle="Brand Stories"
        description="A curated showcase of visual work that shapes brand perception across channels, including social campaigns, identity design, and custom website builds."
        slides={slides}
        ctaText="Talk to us today"
        bgImage="/assests/img/home/brand-stories-bg.png"
      />
      {/* <TeamMembers /> */}
      <MilestoneMetrics />
      {/* <MarqueeTabsSlider /> */}
      <HomeGallery />
      {/* <OurBlogs />  */}
    </div>
  );
};

export default page;