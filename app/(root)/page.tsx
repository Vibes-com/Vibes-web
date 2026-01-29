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
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"home/brand launch services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch services-vibes communications.webp" },
      { 
        alt:"women listed marketing-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/women listed marketing-vibes communications.webp" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video2.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"performance marketing services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/performance marketing services- vibes communications.jpg" },
      { 
        alt:"legal advisory services -vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/legal advisory services -vibes communications.webp" },
    ],
  },
  {
    alt:"Tomorrows India",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video9.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"branding services - vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/branding services - vibes communications.jpg" },
      { 
        alt:"marketing for events -vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/marketing for events -vibes communications.webp" },
    ],
  },
  {
    alt:"Vibes Communications",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video6.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"hr consulting services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/hr consulting services-vibes communications.webp" },
      { 
        alt:"website Maintenance services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/website Maintenance services- vibes communications.jpg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"dental institute services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/dental institute services-vibes communications.jpg" },
      { 
        alt:"performance marketing-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/performance marketing-vibes communications.jpeg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video3.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"brand launch platform services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch platform services- vibes communications.jpg" },
      { 
        alt:"corporate advisory services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/corporate advisory services-vibes communications.webp" },
    ],
  },
  {
    alt:"Vibes Communications One Team Dream",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video7.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"digital marketing for exhibition-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/digital marketing for exhibition-vibes communications.jpeg" },
      { 
        alt:"vibes communications- branding client",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/vibes communications- branding client.jpg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video4.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"marketing services for events-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/marketing services for events-vibes communications.webp" },
      { 
        alt:"brand launch platform- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch platform- vibes communications.jpg" },
    ],
  },
   {
    alt:"Tomorrows India",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video5.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"digital marketing for events-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/digital marketing for events-vibes communications.webp" },
      { 
        alt:"webinar services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/webinar services-vibes communications.webp" },
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
        bgImage="d32ze5duxdubbq.cloudfront.net/assets/img/home/brand-stories-bg.png"
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