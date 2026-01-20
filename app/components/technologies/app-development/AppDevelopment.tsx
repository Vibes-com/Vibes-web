// "use client";
import SuccessStory from '../../technology-details/success-story/SuccessStory'
// import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import BuiltWay from '../web-development/built-way/BuiltWay';
import WorkflowSection from '../../common/WorkflowSection/WorkflowSection';
import HeroSection from '../../common/HeroSection/HeroSection';

const AppDevelopment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/app-development/mobile-app-banner.jpg"
        title={
          <>
            Mobile App <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Development</span>
          </>
        }
        description="End-to-end mobile app development services from a trusted mobile app development company, focused on performance, usability, and scalability across platforms."
      />
      <AboutSection
        badgeText="Services"
        heading="Apps Built for"
        highlightText="Performance"
        description="As a reliable app development company, we build custom mobile applications that drive business growth across Android and iOS platforms."
        mainImage="/app-development/app-dev-serivice.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="Mobile App Development"
        features={[
          {
            icon: "/app-development/mobile-development.png",
            title: <>Android App Development</>,
            alt: "Android App Development",
            subtitle: <>Robust Android applications built for performance, security, and seamless user experiences across devices</>,
          },
          {
            icon: "/app-development/ios-development.png",
            title: <>iOS App Development</>,
            alt: "iOS App Development",
            subtitle: <>High-quality iOS apps designed for speed, stability, and compliance with Apple’s design and performance standards</>,
          },

        ]}
      />

      <WorkflowSection
        badgeText="Workflow"
        bgImage="/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            From <br/>{" "}
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Concept to Launch</span>
          </>
        }
        description="A streamlined process delivering reliable, scalable mobile applications by a trusted android app development company."
        steps={[
          {
            id: "01",
            title: "Ideation & Strategy",
            desc: "Define the core app idea, unique value proposition (UVP), target audience, and feature roadmap.",
            icon: "/app-development/idea.png",
          },
          {
            id: "02",
            title: "Planning & Analysis",
            desc: "In-depth market research, competitor analysis, MVP feature definition, and structured planning for timelines and budgets matching the standards of the best app development agencies.",
            icon: "/app-development/planning.png",
          },
          {
            id: "03",
            title: "UI/UX Design",
            desc: "User-centric wireframes, intuitive user flows, and visually engaging interfaces with interactive prototypes.",
            icon: "/web-development/workflow-icon-3.png",
          },
          {
            id: "04",
            title: "Development",
            desc: "End-to-end app development covering front-end, back-end, and APIs using native and cross-platform technologies",
            icon: "/web-development/workflow-icon-1.png",
          },
          {
            id: "05",
            title: "Testing & Quality Assurance (QA)",
            desc: "Comprehensive testing for functionality, performance, security, and usability across devices and platforms.",
            icon: "/web-development/testing.png",
          },
          {
            id: "06",
            title: "Deployment & Launch",
            desc: "App Store and Play Store submissions with ASO-ready assets for smooth approvals and visibility.",
            icon: "/web-development/deployment.png",
            active: true,
          },
          {
            id: "07",
            title: "Post-Launch: Maintenance & Updates",
            desc: "Ongoing monitoring, feature enhancements, performance optimization, and regular updates.",
            icon: "/web-development/workflow-icon-7.png",
          },

        ]}
      />
      <WhyChooseSection
        badgeText="Why Choose Vibes?"
        bgImage="/web-development/wd-services-bg.jpg"

        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Choose Vibes.</span> Choose Certainty.
          </>
        }
        description="A reliable mobile app partner delivering strategic thinking, technical excellence, and measurable outcomes."
        items={[
          {
            title: "Strategy-Led Development",
            desc: " Mobile apps built with clear goals, purpose, and measurable outcomes.",
            icon: "/app-development/development.png",
          },
          {
            title: "Scalable Architecture",
            desc: " Robust app frameworks designed to grow with evolving business needs.",
            icon: "/app-development/scalability.png",
          },
          {
            title: "End-to-End Ownership",
            desc: " Complete lifecycle management from idea to launch and beyond.",
            icon: "/app-development/ownership.png",
          },
          {
            title: "User-Centric Design",
            desc: " Intuitive experiences crafted for engagement, usability, and retention.",
            icon: "/app-development/centric.png",
          },
        ]}
      />
      {/* <TechnologyStackSection
        badgeText="Technology we use"
        heading={
          <>
            Technology <span className="highlight relative z-9">Stack</span>
          </>
        }
        description="Vibes uses a robust, future-ready tech stack built for speed, security, and scale."
        topLogos={[
          "/assests/img/web-development/php-logo.png",
          "/assests/img/web-development/react-logo.png",
          "/assests/img/web-development/github-logo.png",
          "/assests/img/web-development/css-logo.png",
          "/assests/img/web-development/node-logo.png",
          "/assests/img/web-development/html-logo.png",
          "/assests/img/web-development/bootstrap-logo.png",
        ]}
        bottomLogos={[
          "/assests/img/web-development/shopify-logo.png",
          "/assests/img/web-development/postgresql-logo.png",
          "/assests/img/web-development/wordpress-logo.png",
          "/assests/img/web-development/mysql-logo.png",
          "/assests/img/web-development/ci-4-logo.png",
          "/assests/img/web-development/mongodb-logo.png",
        ]}
      />
      <BuiltWay /> */}
      <SuccessStory
        title="Let’s Build Your App"
        subtitle="Turn ideas into high-impact mobile applications that users trust and engage with"
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div >
  )
}

export default AppDevelopment