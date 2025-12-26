"use client";
import SuccessStory from '../../technology-details/success-story/SuccessStory'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import BuiltWay from '../web-development/built-way/BuiltWay';
import WorkflowSection from '../../common/WorkflowSection/WorkflowSection';
import HeroSection from '../../common/HeroSection/HeroSection';


const AppDevelopment = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
       bgImage="/assests/img/web-development/web-development-bg.jpg"
      title={
        <>
          Web <br />
          <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Development</span>
        </>
      }
      description="Vibes builds secure scalable websites with strong UI/UX and reliable backend systems for seamless user experiences"
    />
      <AboutSection
        badgeText="ABOUT US"
        heading="IT Solutions Engineered for"
        highlightText="Speed and Scalability"
        description="Vibes develops secure, bespoke web platforms engineered for high performance, scalability, and reliability."
        mainImage="/assests/img/web-development/webdevelopment-about-img.png"
        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Custom-Coded,<br />Secure Builds</>,
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>High-Speed <br />Performance</>,
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Scalable <br />Architecture</>,
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>On-Time Project<br />Delivery</>,
          },
        ]}
      />

     <WorkflowSection
        badgeText="Workflow"
        heading={
          <>
            Development{" "}
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Process</span>
                </>
              }
              description="From concept to launch, explore the clear process that bring websites to life with precision and purpose."
              steps={[
          {
              id: "01",
              title: "Discovery & Planning",
              desc: "The goals, audience, and structure are defined during Discovery & Planning to create a scalable foundation for the website.",
              icon: "/assests/img/web-development/workflow-icon-1.png",
          },
          {
              id: "02",
              title: "Wireframing & Architecture",
              desc: "Wireframes and architecture are used as the blueprint to define structure and function before design begins.",
              icon: "/assests/img/web-development/workflow-icon-2.png",
          },
          {
              id: "03",
              title: "UI/UX Design",
              desc: "UI/UX design is used to create intuitive digital experiences, using clear layouts, colors, and flows to ensure smooth, efficient user interaction.",
              icon: "/assests/img/web-development/workflow-icon-3.png",
          },
          {
              id: "04",
              title: "Front-End Development",
              desc: "Front-end development is used to turn designs into responsive, interactive interfaces with HTML, CSS, JavaScript, and modern UI frameworks.",
              icon: "/assests/img/web-development/workflow-icon-1.png",
          },
          {
              id: "05",
              title: "Back-End Development",
              desc: "Server logic, databases, APIs, and security are built in the backend to support scalable and reliable applications.",
              icon: "/assests/img/web-development/workflow-icon-4.png",
          },
          {
              id: "06",
              title: "Testing",
              desc: "Website testing is conducted to verify functionality, meet requirements, and ensure performance across devices and browsers.",
              icon: "/assests/img/web-development/workflow-icon-5.png",
              active: true,
          },
          {
              id: "07",
              title: "Deployment",
              desc: "The tested product is deployed to production, configured for use, and optimized for performance and stability.",
              icon: "/assests/img/web-development/workflow-icon-6.png",
          },
          {
              id: "08",
              title: "Support & Maintenance",
              desc: "Performed to keep software secure, updated, and high-performing through continuous monitoring and improvements.",
              icon: "/assests/img/web-development/workflow-icon-7.png",
          },
      ]}
      />
      <WhyChooseSection
        badgeText="Why Choose Us"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Choose Vibes.</span> Choose Certainty.
          </>
        }
        description="Vibes delivers high-performing, scalable, secure digital solutions built with precision and trust."
        items={[
          {
            title: "Insight-Led Execution",
            desc: "Smart decisions guide every build, ensuring each solution aligns with goals.",
            icon: "/assests/img/web-development/why-choose-icon2.png",
          },
          {
            title: "Future-Ready Architecture",
            desc: "Code crafted for speed, stability, and effortless scaling.",
            icon: "/assests/img/web-development/why-choose-icon1.png",
          },
          {
            title: "Delivery You Can Count On",
            desc: "Every milestone met without compromising quality.",
            icon: "/assests/img/web-development/why-choose-icon3.png",
          },
          {
            title: "Continuous Care & Support",
            desc: "Ongoing updates, fixes, and monitoring.",
            icon: "/assests/img/web-development/why-choose-icon4.png",
          },
        ]}
      />

      <TechnologyStackSection
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

      <BuiltWay />
      <SuccessStory
        title="Let’s Build Something Powerful"
        subtitle="Scalable digital solutions tailored for you"
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />
    </div >
  )
}

export default AppDevelopment