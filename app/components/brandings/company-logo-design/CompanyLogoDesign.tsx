"use client";
// import { useRouter } from "next/navigation";
import OurBlogs from '../../blogs/blogs'
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import ImageCarousel from "../../common/ImageCarouselWorkflow/ImageCarousel";
import HeroSection from '../../common/HeroSection/HeroSection';
import AboutSection from '../../common/AboutUs/AboutSection';
import BuiltWaySlider, { BuiltWaySlide } from '../../common/BuiltWaySlider/BuiltWaySlider';
import WorkflowSectionNew from '../../common/WorkflowSectionNew/WorkflowSectionNew';

const slides: BuiltWaySlide[] = [
  {
    id: "1",
    title: "Strategic Thinking",
    desc: "Every logo design aligns with brand vision, purpose, and long-term impact.",
    icon: "/branding-details/strategic-thinking-icon.png",
  },
  {
    id: "2",
    title: "Experienced Design Team",
    desc: " Creative expertise combined with industry insight to deliver standout company logo design.",
    icon: "/branding-details/experienced-design-team-icon.png",
  },
  {
    id: "3",
    title: "Research-Driven Approach",
    desc: "Market and audience insights power logo designs that truly differentiate brands.",
    icon: "/branding-details/research-driven-approach-icon.png",
  },
  {
    id: "4",
    title: "Client-Centric Collaboration",
    desc: "Tailored logo solutions built through close collaboration for lasting brand resonance.",
    icon: "/branding-details/client-centric-collaboration-icon.png",
  },
    {
    id: "5",
    title: "Comprehensive Branding Solutions",
    desc: " End-to-end branding from logo design to digital and print touchpoints.",
    icon: "/branding-details/comprehensive-branding-solutions-icon.png",
  },
]; 

interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string,
  service:string
}
const textcontent: blogContent = {
  title: 'Ideas. Insights.',
  highlighttitle: " Impact.",
  Subtitle: (
    <>
      Discover thoughtful perspectives on tech, marketing, branding, and logo design that empower smarter decisions and stronger brand growth.
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

const CompanyLogoDesign = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/branding-details/logo-design-bg.jpeg"
        title={
          <>
           Turning Ideas into Distinctive <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]"> Brand Marks</span>
          </>
        }
        description="Strategic logo design grounded in research, insight, and purposeful creativity."
      />
       <AboutSection
        badgeText="Objective"
        heading="Logos That Speak "
        highlightText="for Your Brand"
        description="Objective-driven company logo design that builds recognition and trust. We design logos that communicate clarity, credibility, and purpose turning ideas into powerful brand assets through thoughtful business logo design."
        
        mainImage="/branding-details/logo-design-objective-img.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="Web Development"
        features={[
          {
            icon: "/branding-details/Instant-brand-recognition.png",
            title: <>Instant brand <br />recognition</>,
            subtitle: "",
            alt: "Instant-brand-recognition"
          },
          {
            icon: "/branding-details/Trust-and-market.png",
            title: <>Trust and market <br />credibility</>,
            subtitle: "",
            alt: "Trust-and-market credibility"
          },
          {
            icon: "/branding-details/Emotional.png",
            title: <>Emotional connection <br /> with audiences</>,
            subtitle: "",
            alt: "Emotional connection  with audiences"
          },
          {
            icon: "/branding-details/scalable.png",
            title: <>A scalable, strategic  <br />brand asset</>,
            subtitle: "",
            alt: "A scalable, strategic brand asset"
          },
        ]}
      />
  <BuiltWaySlider
        badgeText="Why Partner With Us?"
        bgImage="/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
           Why Do <br /> <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Brands Trust Vibes?</span>
          </>
        }
        description="We don’t just design logos, we build brand value. Our business logo maker approach blends strategy, research, and creativity to drive recognition, credibility, and growth."
        slides={slides}
      />
      <WorkflowSectionNew
        badgeText=" From Idea to Identity"
        bgImage="/digital-m-details/dm-solution-bg.png"
        heading={
          <>
           The Vibes {" "}
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Logo Framework</span>
          </>
        }
        description="A strategic logo design process that turns concepts into impactful brand identities."
        steps={[
          {
            id: "01",
            title: "Concept & Idea",
            desc: "We define brand vision, values, and objectives to shape a purposeful logo direction.",
            icon: "/web-development/discovery.png",
          },
          {
            id: "02",
            title: "Research",
            desc: "In-depth market, audience, and competitor analysis ensures your logo stands out authentically.",
            icon: "/web-development/workflow-icon-2.png",
          },
          {
            id: "03",
            title: "Sketching",
            desc: " Initial ideas are explored through sketches to refine form, balance, and visual storytelling",
            icon: "/web-development/workflow-icon-3.png",
          },
          {
            id: "04",
            title: "Colour Palette",
            desc: " Carefully selected colours evoke emotion, strengthen recall, and reflect brand personality.",
            icon: "/web-development/workflow-icon-1.png",
          },
          {
            id: "05",
            title: "Logo Development",
            desc: " The final logo is refined into a scalable, versatile design across platforms and formats.",
            icon: "/web-development/workflow-icon-4.png",
          },
          {
            id: "06",
            title: "Feedback & Support",
            desc: " Client feedback guides refinements, with ongoing support for confident brand usage.",
            icon: "/web-development/testing.png",
            active: true,
          },
          
        ]}
      />
      
      <ImageCarousel
        className="branding-workflow-wrapper"
        images={images}
        heading={{
          badge: "Our Clients’ Brand Portfolio",
          title: (
            <>
              <span className="highlight relative w-fit z-9 font-semibold">Brands We’ve Brought</span> to Life
            </>
          ),
          description:
            "Thoughtful logo designs crafted to connect emotionally and leave a lasting impression. We partner with brands to deliver creative business logo design solutions that are distinctive, relevant, and built for growth.",
        }}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="From Idea to Identity"
        subtitle="  Start a 360° branding journey built around clarity, creativity, and results."
        buttonText="Learn More"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  )
}

export default CompanyLogoDesign