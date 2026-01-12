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
  title: 'Thoughts on Brand ',
  highlighttitle: "Narrative",
  Subtitle: (
    <>
      Insights, perspectives, and trends shaping effective brand communication<br /> in evolving markets.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service:'branding'
};

const images = [
  { src: "/branding-details/brand-communication-and-strategy-img-1.jpg" },
  { src: "/branding-details/brand-communication-and-strategy-img-2.jpg" },
  { src: "/branding-details/brand-communication-and-strategy-img-3.jpg" },
  { src: "/branding-details/brand-communication-and-strategy-img-4.jpg" },
];

const BrandCommunicationStrategy = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/branding-details/brand-communication-banner.jpg"
        title={
          <>
            Brand Communication <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]"> & Strategy</span>
          </>
        }
        description="Strategic communication frameworks that align brand voice, narrative, and positioning across every channel."
      />
      <WhyChooseUsSection
        badgeText="Services Highlight"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            Integrated Communication &  <br />
            <span className=" highlight relative w-fit z-9 font-semibold">Strategy Solutions</span>
          </>
        }
        description="Purpose-built offerings that translate brand intent into powerful, consistent expression.
"
        cards={[
          {
            title: "Logo Design",
            desc: "Distinctive visual identities crafted to reflect brand purpose, personality, and positioning.",
            dark: true,
          },
          {
            title: "Content Creation",
            desc: "Structured content systems designed to inform, engage, and reinforce brand messaging.",
            dark: false,
          },
          {
            title: "Storytelling",
            desc: "Narrative-led communication that builds emotional connection and long-term brand recall.",
            dark: false,
          },
          {
            title: "Brand Positioning",
            desc: "Clear market definition that differentiates brands and anchors communication strategy.",
            dark: true,
          },
        ]}
      />
      <ImageCarousel
        className="branding-workflow-wrapper"
        images={images}
        heading={{
          badge: "Work Showcase",
          title: (
            <>
              <span className="highlight relative w-fit z-9 font-semibold">Strategy</span> Brought to Life
            </>
          ),
          description:
            "Selected projects highlighting how strong communication and positioning drive brand impact.",
        }}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Let’s Define Your Brand Voice"
        subtitle=" Start building a clear, consistent, and compelling communication foundation."
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  )
}

export default BrandCommunicationStrategy