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
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video2.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image18.jpg" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img14.webp" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video9.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image19.jpg" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img6.webp" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video6.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img7.webp" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image17.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image20.jpg" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img10.webp" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video3.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image26.jpg" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img12.webp" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video7.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img13.webp" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image21.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video4.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img16.webp" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image25.jpg" },
    ],
  },
   {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video5.mp4",
  },
  {
    type: "images",
    images: [
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img2.webp" },
      { src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img3.webp" },
    ],
  },
];

const page = () => {
  return (
    <div >

      <Hero />
      <TeamDreamSection />
      {/* <TogetherMain /> */}
      {/* <Technology />
      <Branding />
      <Digital /> */}
      <div className="relative">
        <div className=" relative sm:relative md:relative lg:sticky xl:sticky 2xl:sticky top-0 z-[10] overflow-hidden">
          <Technology />
        </div>
        <div className="relative sm:relative md:relative lg:sticky xl:sticky 2xl:sticky top-0 z-[20] overflow-hidden">
          <Branding />
        </div>
        <div className="relative sm:relative md:relative lg:sticky xl:sticky 2xl:sticky top-0 z-[30] overflow-hidden">
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
        bgImage="https://s3.ap-south-1.amazonaws.com/vibescom.in/assets/img/home/brand-stories-bg.png"
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