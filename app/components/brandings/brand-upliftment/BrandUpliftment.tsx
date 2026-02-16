"use client";
// import { useRouter } from "next/navigation";
import OurBlogs from '../../blogs/blogs'
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import ImageCarousel from "../../common/ImageCarouselWorkflow/ImageCarousel";
import HeroSection from '../../common/HeroSection/HeroSection';
import WhyChooseUsSection from "@/app/components/common/WhyChooseUsSection/WhyChooseUsSection";
interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string,
  service:string
}
const textcontent: blogContent = {
  title: 'Branding ',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Expert insights, trends, and ideas focused on keeping brands relevant <br />in changing markets.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service:'branding'
};

const images = [
  { 
    alt:"performance marketing agency-vibes coummications",
    src: "/branding-details/performance marketing agency-vibes coummications.jpg" },
  { 
    alt:"marketing services-vibes communications",
    src: "/branding-details/marketing services-vibes communications.jpg" },
  { 
    alt:"social  media marketing agency -Vibes communications",
    src: "/branding-details/social  media marketing agency -Vibes communications.jpg" },
  { 
    alt:"social media services  company - vibes communications",
    src: "/branding-details/social media services  company - vibes communications.jpg" },
  { 
    alt:"Logo design for kaviee-vibes communications",
    src: "/branding-details/Logo design for kaviee-vibes communications.jpg" },
  { 
    alt:"social media marketing  company in noida-vibes coummunications",
    src: "/branding-details/social media marketing  company in noida-vibes coummunications.jpg" },
  { 
    alt:"website development- vibes communication",
    src: "/branding-details/website development- vibes communication.jpg" },
  { 
    alt:"Brand build marketing agency -vibes communications",
    src: "/branding-details/Brand build marketing agency -vibes communications.jpg" },
  { 
    alt:"Social Media Management agency - vibes communications",
    src: "/branding-details/Social Media Management agency - vibes communications.jpg" },
];

const BrandUpliftment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/branding-details/digital-marketing-services-vibes-communications.jpg"
         mobileBgImage="/branding-details/digital-marketing-services-new-mobile-banner-vibes-communications.jpeg"
        title={
          <>
            Brand <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[35px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Upliftment</span>
          </>
        }
        description="Upliftments that improve perception, relevance, and consistency across every touchpoint."
      />
      <WhyChooseUsSection
        badgeText="Services Highlight"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            Specialised Brand <br />
            <span className=" highlight relative w-fit z-9 font-semibold">Enhancement Offerings </span>
          </>
        }
        description=" Focused solutions designed to refresh, realign, and elevate brand expression while preserving core identity delivered by a strategic rebrand agency approach."
        cards={[
          {
            title: "Rebranding",
            desc: "Updated brand systems that align identity, tone, and visuals with evolving business objectives through structured, insight-led rebranding services.",
            dark: true,
          },
          {
            title: "PR Photoshoots & Videos",
            desc: "Compelling visual assets crafted to build credibility, storytelling power, and media appeal",
            dark: false,
          },
          {
            title: "Graphic Design",
            desc: "Consistent, high-quality rebranding design across marketing, digital, and corporate communication assets to ensure cohesion and impact.",
            dark: false,
          },
          // {
          //   title: "Employer Branding",
          //   desc: "Builds a strong workplace image that attracts talent, fosters pride, and supports long-term retention.",
          //   dark: true,
          // },
        ]}
      />
      <ImageCarousel
        className="branding-workflow-wrapper"
        images={images}
        heading={{
          badge: "Work Showcase",
          title: (
            <>
              <span className="highlight relative w-fit z-9 font-semibold">Transformation</span> in Practice
            </>
          ),
          description:
            " A curated selection of brand refinements delivering clarity, consistency, and stronger market presence",
        }}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Talk to Branding Experts"
        subtitle="Connect for strategic guidance on enhancing brand presence with clarity and intent."
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  )
}

export default BrandUpliftment