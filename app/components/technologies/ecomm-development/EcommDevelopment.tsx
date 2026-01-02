// "use client";
import SuccessStory from '../../technology-details/success-story/SuccessStory'
// import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import BuiltWay from '../web-development/built-way/BuiltWay';
import WorkflowSection from '../../common/WorkflowSection/WorkflowSection';
import HeroSection from '../../common/HeroSection/HeroSection';

const EcommDevelopment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/ecommerce-development/ecom-banner.jpg"
        title={
          <>
            E-Commerce <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Development</span>
          </>
        }
        description="Scalable, secure, and high-performance online stores designed for growth and seamless customer journeys."
      />
      <AboutSection
        badgeText="Services"
        heading=" Solutions Built for"
        highlightText="Online Growth"
        description="Comprehensive e-commerce services covering development, integrations, optimization, and scalability."
        mainImage="/assests/img/ecommerce-development/ecom-dev-services.png"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"

        features={[
          {
            icon: "/assests/img/ecommerce-development/ecommerce.png",
            title: <>Custom E-commerce Development</>,
            subtitle: <>Tailored online stores built for performance, scalability, and seamless operations.</>,
          },
          {
            icon: "/assests/img/ecommerce-development/platform.png",
            title: <>Platform-Based Solutions</>,
            subtitle: <> Expert development on Shopify, WooCommerce, and custom frameworks</>,
          },
          {
            icon: "/assests/img/ecommerce-development/integration.png",
            title: <>Payment & System Integrations</>,
            subtitle: <> Secure payment gateways, shipping, CRM, and marketing tool integrations.</>,
          },
          {
            icon: "/assests/img/ecommerce-development/optimization.png",
            title: <>Optimization & Support</>,
            subtitle: <>Performance tuning, security updates, and ongoing enhancements for growth.</>,
          },


        ]}
      />

      <WorkflowSection
        badgeText="Process"
        bgImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            A Clear Path from {" "}<br />
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Strategy to Scale</span>
          </>
        }
        description=" A structured approach that ensures reliable builds, smooth launches, and long-term growth."
        steps={[
          {
            id: "01",
            title: "Planning & Strategy",
            desc: "Define business objectives, target audience, USPs, budget, and select the right e-commerce platform.",
            icon: "/assests/img/app-development/planning.png",
          },
          {
            id: "02",
            title: "Platform & Hosting",
            desc: "Domain setup, reliable hosting, and platform selection based on scalability and business needs.",
            icon: "/assests/img/web-development/workflow-icon-2.png",
          },
          {
            id: "03",
            title: "Design & User Experience (UX)",
            desc: "Brand-aligned, mobile-responsive designs with intuitive navigation and seamless user flows.",
            icon: "/assests/img/web-development/workflow-icon-3.png",
          },
          {
            id: "04",
            title: "Development & Integration",
            desc: "Frontend and backend development with essential features and third-party integrations.",
            icon: "/assests/img/web-development/workflow-icon-1.png",
          },
          {
            id: "05",
            title: "Core Feature Implementation:",
            desc: "A complete e-commerce setup with structured product catalogs, smooth cart and checkout, secure payment gateways, robust security, and seamless integrations for shipping, CRM, analytics, and marketing tools.",
            icon: "/assests/img/web-development/workflow-icon-4.png",
          },
          {
            id: "06",
            title: "Testing (QA)",
            desc: "Comprehensive usability, performance, security, and cross-device testing.",
            icon: "/assests/img/web-development/testing.png",
            active: true,
          },
          {
            id: "07",
            title: "Launch & Deployment",
            desc: "Go-live support with SEO setup, content readiness, and analytics integration.",
            icon: "/assests/img/web-development/deployment.png",
          },
          {
            id: "08",
            title: "Post-Launch & Growth",
            desc: "Ongoing maintenance, performance optimization, security updates, and growth-focused enhancements",
            icon: "/assests/img/web-development/workflow-icon-7.png",
          },
        ]}
      />
      <WhyChooseSection
        badgeText="Why Choose Vibes?"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Choose Vibes.</span> Choose Certainty.
          </>
        }
        description="Scalable e-commerce solutions built for performance, security, and seamless customer experiences."
        items={[
          {
            title: "Conversion-Focused Design",
            desc: "Built for intuitive navigation, seamless journeys, and higher sales conversions.",
            icon: "/assests/img/ecommerce-development/focused-design.png",
          },
          {
            title: "Scalable Architecture",
            desc: "Flexible, future-ready systems supporting business growth and high traffic.",
            icon: "/assests/img/app-development/scalability.png",
          },
          {
            title: "End-to-End Delivery",
            desc: "Complete execution from strategy and development to launch and ongoing support.",
            icon: "/assests/img/web-development/why-choose-icon3.png",
          },
          {
            title: "Secure & Optimized Performance",
            desc: "Fast, reliable, and secure platforms that enhance user trust and experience.",
            icon: "/assests/img/ecommerce-development/security.png",
          },
        ]}
      />
      <TechnologyStackSection
        badgeText="Technology we use"
        bgImage="/assests/img/web-development/wd-technology-bg.jpg"

        heading={
          <>
            Powered by Modern <span className="highlight relative z-9">Technologies</span>
          </>
        }
        description=" A robust technology stack enabling secure, scalable, and high-performance e-commerce solutions."
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

      <SuccessStory
        title="Launch Your E-commerce Store"
        subtitle="Build a future-ready online business with performance, security, and scale at the core."
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div >
  )
}

export default EcommDevelopment