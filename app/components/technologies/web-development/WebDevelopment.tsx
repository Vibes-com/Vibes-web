// "use client";
import BuiltWay from './built-way/BuiltWay'
import SuccessStory from '../../technology-details/success-story/SuccessStory'
// import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import WorkflowSection from '../../common/WorkflowSection/WorkflowSection';
import BuiltWaySlider, { BuiltWaySlide } from '../../common/BuiltWaySlider/BuiltWaySlider';
import HeroSection from '../../common/HeroSection/HeroSection';

const slides: BuiltWaySlide[] = [
  {
    id: "testing",
    title: "Application Testing",
    desc: "Ensuring flawless performance with rigorous, end-to-end quality checks.",
    icon: "/web-development/testing-icon.png",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "Crafting intuitive, user-first designs that elevate every digital interaction.",
    icon: "/web-development/built-way-icon-2.png",
  },
  {
    id: "cms",
    title: "CMS Development",
    desc: "Building scalable, easy-to-manage content systems tailored to your workflow.",
    icon: "/web-development/built-way-icon-3.png",
  },
  {
    id: "figma",
    title: "Figma Mockup",
    desc: "Turning ideas into pixel-perfect visual prototypes for faster approvals.",
    icon: "/web-development/figma.png",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    desc: "Keeping your digital products smooth, secure, and always up-to-date.",
    icon: "/web-development/it-support.png",
  },
];


const WebDevelopment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/web-development/web-development-banner.jpg"
        title={
          <>
            Web <br />
            <span className="hero-highlight  relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Development</span>
          </>
        }
        description="Vibes builds secure scalable websites with strong UI/UX and reliable backend systems for seamless user experiences."
      />
      <AboutSection
        badgeText="ABOUT US"
        heading="IT Solutions Engineered for"
        highlightText="Speed and Scalability"
        description="Vibes develops secure, bespoke web platforms engineered for high performance, scalability, and reliability, supported by refined development and adaptive design."
        mainImage="/web-development/webdevelopment-about-img.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="Web Development"
        features={[
          {
            icon: "/web-development/coded-secure.png",
            title: <>Custom-Coded,<br />Secure Builds</>,
            subtitle: "",
            alt:"Custom-Coded, Secure Builds"
          },
          {
            icon: "/web-development/high-speed-icon.png",
            title: <>High-Speed <br />Performance</>,
            subtitle: "",
            alt:"High-Speed Performance"
          },
          {
            icon: "/web-development/scalability.png",
            title: <>Scalable <br />Architecture</>,
            subtitle: "",
            alt: "Scalable Architecture"
          },
          {
            icon: "/web-development/project-management.png",
            title: <>On-Time Project<br />Delivery</>,
            subtitle: "",
            alt:"On-Time Project Delivery"
          },
        ]}
      />

      <WorkflowSection
        badgeText="Workflow"
        bgImage="/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            Development{" "}
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Process</span>
          </>
        }
        description="From concept to launch, explore the clear process that bring websites to life with precision and purpose."
        steps={[
          {
            id: "01",
            title: "Discovery & Planning",
            desc: "The goals, audience, and structure are defined during Discovery & Planning to create a scalable foundation for the website.",
            icon: "/web-development/discovery.png",
          },
          {
            id: "02",
            title: "Wireframing & Architecture",
            desc: "Wireframes and architecture are used as the blueprint to define structure and function before design begins.",
            icon: "/web-development/workflow-icon-2.png",
          },
          {
            id: "03",
            title: "UI/UX Design",
            desc: "UI/UX design is used to create intuitive digital experiences, using clear layouts, colors, and flows to ensure smooth, efficient user interaction.",
            icon: "/web-development/workflow-icon-3.png",
          },
          {
            id: "04",
            title: "Front-End Development",
            desc: "Front-end development is used to turn designs into responsive, interactive interfaces with HTML, CSS, JavaScript, and modern UI frameworks.",
            icon: "/web-development/workflow-icon-1.png",
          },
          {
            id: "05",
            title: "Back-End Development",
            desc: "Server logic, databases, APIs, and security are built in the backend to support scalable and reliable applications.",
            icon: "/web-development/workflow-icon-4.png",
          },
          {
            id: "06",
            title: "Testing",
            desc: "Website testing is conducted to verify functionality, meet requirements, and ensure performance across devices and browsers.",
            icon: "/web-development/testing.png",
            active: true,
          },
          {
            id: "07",
            title: "Deployment",
            desc: "The tested product is deployed to production, configured for use, and optimized for performance and stability.",
            icon: "/web-development/deployment.png",
          },
          {
            id: "08",
            title: "Support & Maintenance",
            desc: "Performed to keep software secure, updated, and high-performing through fixes, patches, and ongoing improvements.",
            icon: "/web-development/workflow-icon-7.png",
          },
        ]}
      />

      <TechnologyStackSection
        badgeText="Technology we use"
        bgImage="/web-development/wd-technology-bg.jpg"
        heading={
          <>
            Technology <span className="highlight relative z-9">Stack</span>
          </>
        }
        description="Vibes uses a robust, future-ready tech stack built for speed, security, and scale every tool is handpicked to power high performance and elevate every digital experience."
        topLogos={[
          {
            alt:"php-logo",
            imgurl:"/web-development/php-logo.png"},
          {
            alt:"react-logo",
            imgurl:"/web-development/react-logo.png"},
          {
            alt:"github-logo",
            imgurl:"/web-development/github-logo.png"},
          {
            alt:"css-logo",
            imgurl:"/web-development/css-logo.png"},
          {
            alt:"node-logo",
            imgurl:"/web-development/node-logo.png"},
          {
            alt:"html-logo",
            imgurl:"/web-development/html-logo.png"},
          {
            alt:"bootstrap-logo",
            imgurl:"/web-development/bootstrap-logo.png"},
        ]}
        bottomLogos={[
          {
            alt:"shopify-logo",
            imgurl:"/web-development/shopify-logo.png"},
          {
            alt:"postgresql-logo",
            imgurl:"/web-development/postgresql-logo.png"},
          {
            alt:"wordpress-logo",
            imgurl:"/web-development/wordpress-logo.png"},
          {
            alt:"mysql-logo",
            imgurl:"/web-development/mysql-logo.png"},
          {
            alt:"ci-4-logo",
            imgurl:"/web-development/ci-4-logo.png"},
          {
            alt:"mongodb-logo",
            imgurl:"/web-development/mongodb-logo.png"},
        ]}
      />
      <WhyChooseSection
        badgeText="Why Choose Us"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Choose Vibes.</span> Choose Certainty.
          </>
        }
        description="Vibes delivers high-performing, scalable, secure digital solutions- built with precision, expertise, clear communication, and on-time delivery brands trust."
        items={[
          {
            title: "Insight-Led Execution",
            desc: "Smart decisions guide every build, ensuring each solution aligns with goals and delivers real impact.",
            icon: "/web-development/why-choose-icon2.png",
          },
          {
            title: "Future-Ready Architecture",
            desc: " Code is crafted for speed, stability, and effortless scaling as your business and demands grow.",
            icon: "/web-development/why-choose-icon1.png",
          },
          {
            title: " Delivery You Can Count On",
            desc: "Timelines are honored with precision, ensuring every milestone is met without compromising quality.",
            icon: "/web-development/why-choose-icon3.png",
          },
          {
            title: "Continuous Care & Support",
            desc: " Ongoing updates, fixes, and monitoring keep your digital systems secure, smooth, and high-performing.",
            icon: "/web-development/why-choose-icon4.png",
          },
        ]}
      />

      <BuiltWaySlider
        badgeText="Customized Solutions for You"
        bgImage="/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            Built <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Your Way</span>
          </>
        }
        description="Vibes offers flexible, modular solutions whether you need a full build or just a specific feature. Every block is delivered with precision, performance, and complete scalability."
        slides={slides}
      />
      <SuccessStory
        title="Let’s Build Something Powerful"
        subtitle="Scalable digital solutions tailored for you"
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div >
  )
}

export default WebDevelopment