// "use client";
import React from 'react'
// import { useRouter } from "next/navigation";
import PmisDevelopmentHero from './pmis-development-hero/PmisDevelopmentHero'
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import SuccessStory from '../../technology-details/success-story/SuccessStory'
import BuiltWaySlider, { BuiltWaySlide } from '../../common/BuiltWaySlider/BuiltWaySlider';
import HeroSection from '../../common/HeroSection/HeroSection';
import { Metadata } from 'next';

const slides: BuiltWaySlide[] = [
  {
    id: "1",
    title: "End-to-End Project Visibility",
    desc: "Complete oversight across planning, execution, monitoring, and closure stages.",
    icon: "/pmis/project-visibility.png",
  },
  {
    id: "2",
    title: "Real-Time Monitoring & Tracking",
    desc: "Live performance updates enable timely course correction and progress control.",
    icon: "/pmis/real-time.png",
  },
  {
    id: "3",
    title: "Stronger Governance & Accountability",
    desc: "Clearly defined roles approvals, and audit trails ensure compliance and resposibility",
    icon: "/pmis/governance.png",
  },
  {
    id: "4",
    title: "End-to-End Project Visibility",
    desc: "Complete oversight across planning, execution, monitoring, and closure stages.",
    icon: "/pmis/project-visibility.png",
  },
];

export const metadata: Metadata = {
  title: "Software Technology Services Driving Brand Growth",

  description:
    `Vibes offer software technology services, technology solutions services, and technology
consulting services delivering scalable tech solutions for businesses.`,

  alternates: {
    canonical: "https://www.vibescom.in/technology-services",
  },

  openGraph: {
    title: "Software Technology Services Driving Brand Growth",
    description:
      `Vibes offer software technology services, technology solutions services, and technology
consulting services delivering scalable tech solutions for businesses.`,
    url: "https://www.vibescom.in/technology-services",
    siteName: "Vibes Communications Pvt Ltd",
    images: [
      {
        url: "https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@vibescom",
    title: "Software Technology Services Driving Brand Growth",
    description:
      `Vibes offer software technology services, technology solutions services, and technology
consulting services delivering scalable tech solutions for businesses.`,
    images: ["https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [{ name: "Vibes Communications" }],
  creator: "Vibes Communications",
  publisher: "Vibes Communications",
};
const PmisDevelopment = () => {
  // const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/pmis/project-management-information-system-vibes-communications.jpg"
          mobileBgImage="/pmis/project-management-information-system-mobile-banner-vibes-communications.jpeg"
        title={
          <>
            PROJECT MANAGEMENT<br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">INFORMATION SYSTEM (PMIS)</span>
          </>
        }
        description=" A centralized digital platform for planning, tracking, and monitoring project lifecycles with transparency and accountability."
      />
      <BuiltWaySlider
        badgeText="Core Purpose"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            Why PMIS Matter:<br /> <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Purpose & Value</span>
          </>
        }
        description="Purpose-driven digital platforms that bring clarity, control, and accountability to complex project execution."
        slides={slides}
      />
      <WhyChooseUs
        badgeText="Clear Governance"
        backgroundImage="/technology-details/common-casestudy-bg.jpg"
        heading="Enabling PMIS Across"
        highlightText="Governance & Execution"
        description="Vibes designs and delivers (pmis) project management information system platforms structured for complex, multi-agency project environments.
"
        centerText={`PMIS for,\nMulti-Agency Delivery`}
        slides={[
          {
            title: "Governing Agency (Super Admin)",
            desc: "Vibes configures centralized control for policy oversight, approvals, compliance tracking, and strategic reporting.",
          },
          {
            title: "Consulting Agency (PMC)",
            desc: " Vibes enables planning, monitoring, and coordination workflows through structured dashboards, review mechanisms, and performance insights.",
          },
          {
            title: "Implementation Agency(s) (EPC)",
            desc: " Vibes supports multi-agency execution with task tracking, progress updates, and field-level data capture within a unified platform.",
          },
          {
            title: "Governing Agency (Super Admin)",
            desc: "Vibes configures centralized control for policy oversight, approvals, compliance tracking, and strategic reporting.",
          },

        ]}
      />

      <WhyChooseSection
        badgeText="Monitoring Tools"
        bgImage="/web-development/wd-services-bg.jpg"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">PMIS Modules</span> That<br /> Enable Governance
          </>
        }
        description="Project Management Information system (pmis) solutions by Vibes are built with scalable, role-driven modules that support efficient project governance, monitoring, and execution across complex ecosystems."
        items={[
          {
            title: "PMIS Portal Enhancement",
            desc: "Optimized portals designed for usability, performance, and secure multi-stakeholder access.",
            icon: "/pmis/portal.png",
          },
          {
            title: "Dashboard Tools & Analytics",
            desc: "Insight-driven dashboards delivering real-time project status, performance metrics, and actionable analytics.",
            icon: "/pmis/dashboard.png",
          },
          {
            title: "User Flow & Functional Architecture",
            desc: "Structured workflows and system architecture ensuring clarity, compliance, and seamless navigation across roles.",
            icon: "/web-development/why-choose-icon1.png",
          },
          {
            title: "Data Visualization",
            desc: "Interactive visual representations that simplify complex project data, highlight trends, and enable faster, insight-led governance decisions.",
            icon: "/pmis/data-visualization.png",
          },
        ]}
      />

      <TechnologyStackSection
        badgeText="Government Projects"
        bgImage="/web-development/wd-technology-bg.jpg"
        heading={
          <>
            Proven Public Sector<br /><span className="highlight relative z-9">Deployments</span>
          </>
        }
        description="Delivered large-scale, mission-critical digital solutions in collaboration with PwC and EY, supporting transparency, governance, and data-driven decision-making across key government initiatives."
        topLogos={[
          {
            alt:"cris-logo",
            imgurl:"/pmis/cris-logo.png"},
          {
            alt:"pm-mitra-logo",
            imgurl:"/pmis/pm-mitra-logo.png"},
          {
            alt:"education-logo",
            imgurl:"/pmis/education-logo.png"},
          {
            alt:"prayagraj-logo",
            imgurl:"/pmis/prayagraj-logo.jpg"},
          {
            alt:"kumbh-logo",
            imgurl:"/pmis/kumbh-logo.png"},
          {
            alt:"dtis-logo",
            imgurl:"/pmis/dtis-logo.png"},
          {
            alt:"moh-logo",
            imgurl:"/pmis/moh-logo.png"},
        ]}
        bottomLogos={[
          {
            alt:"dtis-logo",
            imgurl:"/pmis/dtis-logo.png"},
          {
            alt:"kumbh-logo",
            imgurl:"/pmis/kumbh-logo.png"},
          {
            alt:"cris-logo",
            imgurl:"/pmis/cris-logo.png"},
          {
            alt:"moh-logo",
            imgurl:"/pmis/moh-logo.png"},
          {
            alt:"pm-mitra-logo",
            imgurl:"/pmis/pm-mitra-logo.png"},
          {
            alt:"prayagraj-logo",
            imgurl:"/pmis/prayagraj-logo.jpg"},
        ]}
      />
      <SuccessStory
        title="Digital Control. Real-Time Visibility."
        subtitle="PMIS platforms designed to manage scale, complexity, and accountability across large-impact projects."
        buttonText="Let’s Connect"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />

    </div>
  )
}

export default PmisDevelopment