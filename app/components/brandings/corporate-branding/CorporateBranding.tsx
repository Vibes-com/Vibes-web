"use client";
import { useRouter } from "next/navigation";
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
  bgImage: '/assets/img/web-development/wd-services-bg.jpg',
  service:'branding'
};

const images = [
  { src: "/assests/img/branding-details/branding-bottom-img-1.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-2.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-3.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-4.png" },
];

const CorporateBranding = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/app-development/app-development-bannner.jpg"
        title={
          <>
            CORPORATE <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">BRANDING</span>
          </>
        }
        description=" Strategic corporate branding that builds credibility, ensures consistency, and strengthens long-term business positioning."
      />
      <WhyChooseUsSection
        badgeText="Services Highlight"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"
        heading={
          <>
            Unified Branding  <br />
            <span className=" highlight relative w-fit z-9 font-semibold">Framework</span>
          </>
        }
        description="A holistic branding approach that aligns identity, people, culture, and communication ensuring clarity, consistency, and credibility across every internal and external brand touchpoint"
        cards={[
          {
            title: "Corporate Identity",
            desc: " Defines a clear, professional visual and verbal presence that reflects values and strengthens brand recognition.",
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
            desc: "Builds a strong workplace image that attracts talent, fosters pride, and supports long-term retention.",
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
              <span className="highlight relative w-fit z-9 font-semibold">Corporate Branding</span> in Action
            </>
          ),
          description:
            "Turning brand challenges into growth stories with strategies to solve, scale, and sustain showing how clear vision and 360° digital expertise drive results.",
        }}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Build a Brand That Commands Trust"
        subtitle="Branding designed to deliver clarity, consistency, and credibility across every business touchpoint."
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />
    </div>
  )
}

export default CorporateBranding