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
  bgImage: '/assets/img/web-development/wd-services-bg.jpg',
  service:'branding'
};

const images = [
  { src: "/assests/img/branding-details/branding-bottom-img-1.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-2.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-3.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-4.png" },
];

const BrandUpliftment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/branding-details/brand-upliftment-banner.jpg"
        title={
          <>
            Brand <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Upliftment</span>
          </>
        }
        description="Upliftments that improve perception, relevance, and consistency across every touchpoint."
      />
      <WhyChooseUsSection
        badgeText="Services Highlight"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"
        heading={
          <>
            Specialised Brand <br />
            <span className=" highlight relative w-fit z-9 font-semibold">Enhancement Offerings </span>
          </>
        }
        description=" Focused solutions designed to refresh, realign, and elevate brand expression while preserving core identity."
        cards={[
          {
            title: "Rebranding",
            desc: "Updated brand systems that align identity, tone, and visuals with evolving business objectives",
            dark: true,
          },
          {
            title: "PR Photoshoots & Videos",
            desc: "Compelling visual assets crafted to build credibility, storytelling power, and media appeal",
            dark: false,
          },
          {
            title: "Graphic Design",
            desc: "Consistent, high-quality design across marketing, digital, and corporate communication assets.",
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
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  )
}

export default BrandUpliftment