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
  title: 'Branding',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Expert insights, trends, and ideas focused on keeping brands relevant in<br /> changing markets.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service:'branding'
};

const images = [
  { 
    alt:"Marketing collateral designa gency-vibes communications",
    src: "/branding-details/Marketing collateral designa gency-vibes communications.jpg" },
  { 
    alt:"corporate  branding id card -  vibes communications",
    src: "/branding-details/corporate  branding id card -  vibes communications.jpg" },
  { 
    alt:"marketing branding agency-vibes coummications",
    src: "/branding-details/marketing branding agency-vibes coummications.jpg" },
  { 
    alt:"branding marketing company- vibes communications",
    src: "/branding-details/branding marketing company- vibes communications.jpg" },
  { 
    alt:"Business Card Design services-Vibes communications",
    src: "/branding-details/Business Card Design services-Vibes communications.jpg" },
  { 
    alt:"Brand Positioning commpany - vibes communications",
    src: "/branding-details/Brand Positioning commpany - vibes communications.jpg" },
  { 
    alt:"360 Degree Branding-  vibes communications",
    src: "/branding-details/360 Degree Branding-  vibes communications.jpg" },
  { 
    alt:"Corporate Branding company- vibes communications",
    src: "/branding-details/Corporate Branding company- vibes communications.jpg" },
];

const CorporateBranding = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/branding-details/corporate-branding-banner-vibes-communications.jpg"
         mobileBgImage="/branding-details/corporate-branding-banner-mobile-banner-vibes-communications.jpeg"
        title={
          <>
            CORPORATE <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">BRANDING</span>
          </>
        }
        description=" Strategic corporate branding that builds credibility, ensures consistency, and strengthens long-term business positioning delivered by a seasoned corporate branding agency focused on sustainable growth"
      />
      <WhyChooseUsSection
        badgeText="Services Highlight"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            Unified Branding  <br />
            <span className=" highlight relative w-fit z-9 font-semibold">Framework</span>
          </>
        }
        description="A holistic branding approach aligning identity, people, culture, and communication to ensure clarity, consistency, and credibility across all brand touchpoints placing us among trusted corporate branding companies."
        cards={[
          {
            title: "Corporate Identity",
            desc: " Defines a clear, professional visual and verbal presence that strengthens brand recognition, and supports organizations seeking a dependable branding services company.",
            dark: true,
          },
          {
            title: "Personal Branding",
            desc: "Positions leadership and key stakeholders as credible voices, reinforcing trust and influence in the market.",
            dark: false,
          },
          {
            title: "Brand Guidelines",
            desc: " Establishes clear standards to maintain consistency across design, messaging, and brand applications.",
            dark: false,
          },
          {
            title: "Employer Branding",
            desc: "Builds a strong workplace image that attracts talent, fosters pride, and supports long-term retention, an essential pillar of any forward-thinking business branding company.",
            dark: true,
          },
        ]}
      />
      <ImageCarousel
        className="branding-workflow-wrapper"
        images={images}
        heading={{
          badge: "Workflow Process",
          title: (
            <>
              <span className="highlight relative w-fit z-9 text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-semibold">Corporate Branding</span> in Action
            </>
          ),
          description:
            "Showcasing strategic branding work that strengthens identity, builds credibility, and drives long-term value.",
        }}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Build a Brand That Commands Trust"
        subtitle="Branding designed to deliver clarity, consistency, and credibility across every business touchpoint."
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  )
}

export default CorporateBranding