"use client";
import SuccessStory from '../../technology-details/success-story/SuccessStory'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import WebDevelopmentHero from '../web-development/web-development-hero/WebDevelopmentHero';
import WebDevelopmentWorkflow from '../web-development/web-development-workflow/WebDevelopmentWorkflow';
import BuiltWay from '../web-development/built-way/BuiltWay';


const AppDevelopment = () => {
  const router = useRouter();
  return (
    <div>
      <WebDevelopmentHero />
      <AboutSection
        badgeText="Services"
        heading="Apps Built for"
        highlightText="Performance"
        description="Custom-built mobile applications that support business growth across Android and iOS platforms."
        mainImage="/assests/img/web-development/webdevelopment-about-img.png"
        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Android App Development</>,
            subtitle: <>Robust Android applications built for performance, security, and seamless user experiences across devices</>,
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>iOS App Development</>,
            subtitle: <>High-quality iOS apps designed for speed, stability, and compliance with Apple’s design and performance standards</>,
          },

        ]}
      />
      <WebDevelopmentWorkflow />
      <WhyChooseSection
        badgeText="Why Choose Vibes?"
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