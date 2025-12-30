"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import PmisDevelopmentHero from './pmis-development-hero/PmisDevelopmentHero'
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import SuccessStory from '../../technology-details/success-story/SuccessStory'
import BuiltWaySlider, { BuiltWaySlide } from '../../common/BuiltWaySlider/BuiltWaySlider';
import HeroSection from '../../common/HeroSection/HeroSection';

const slides: BuiltWaySlide[] = [
  {
    id: "1",
    title: "End-to-End Project Visibility",
    desc: "Complete oversight across planning, execution, monitoring, and closure stages.",
    icon: "/assests/img/web-development/built-way-icon-1.png",
  },
  {
    id: "2",
    title: "Real-Time Monitoring & Tracking",
    desc: "Live performance updates enable timely course correction and progress control.",
    icon: "/assests/img/web-development/built-way-icon-2.png",
  },
  {
    id: "3",
    title: "Stronger Governance & Accountability",
    desc: "Clearly defined roles approvals, and audit trails ensure compliance and resposibility",
    icon: "/assests/img/web-development/built-way-icon-3.png",
  },
  {
    id: "4",
    title: "End-to-End Project Visibility",
    desc: "Complete oversight across planning, execution, monitoring, and closure stages.",
    icon: "/assests/img/web-development/built-way-icon-1.png",
  },
];

const PmisDevelopment = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/pmis/pmis-development-banner.jpg"
        title={
          <>
            PROJECT MANAGEMENT<br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">INFORMATION SYSTEM (PMIS)</span>
          </>
        }
        description=" A centralized digital platform for planning, tracking, and monitoring project lifecycles with transparency and accountability."
      />
      <BuiltWaySlider
        badgeText="Core Purpose"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"
        heading={
          <>
            Why PMIS Matter:<br /> <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Purpose & Value</span>
          </>
        }
        description="Purpose-driven digital platforms that bring clarity, control, and accountability to complex project execution."
        slides={slides}
      />
      <WhyChooseUs
        badgeText="Clear Governance"
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading="Enabling PMIS Across"
        highlightText="Governance & Execution"
        description="Vibes designs and delivers PMIS platforms structured for complex, multi-agency project environments."
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
        bgImage="/assests/img/web-development/wd-services-bg.jpg"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">PMIS Modules</span> That<br /> Enable Governance
          </>
        }
        description="PMIS solutions by Vibes are built with scalable, role-driven modules that support efficient project governance, monitoring, and execution across complex ecosystems."
        items={[
          {
            title: "PMIS Portal Enhancement",
            desc: "Optimized portals designed for usability, performance, and secure multi-stakeholder access.",
            icon: "/assests/img/web-development/why-choose-icon2.png",
          },
          {
            title: "Dashboard Design & Analytics",
            desc: "Insight-driven dashboards delivering real-time project status, performance metrics, and actionable analytics.",
            icon: "/assests/img/web-development/why-choose-icon1.png",
          },
          {
            title: "User Flow & Functional Architecture",
            desc: "Structured workflows and system architecture ensuring clarity, compliance, and seamless navigation across roles.",
            icon: "/assests/img/web-development/why-choose-icon3.png",
          },
          {
            title: "Data Visualization",
            desc: "Interactive visual representations that simplify complex project data, highlight trends, and enable faster, insight-led governance decisions.",
            icon: "/assests/img/web-development/why-choose-icon4.png",
          },
        ]}
      />

      <TechnologyStackSection
        badgeText="Government Projects"
        bgImage="/assests/img/web-development/wd-technology-bg.jpg"
        heading={
          <>
            Proven Public Sector<br /><span className="highlight relative z-9">Deployments</span>
          </>
        }
        description="Delivered large-scale, mission-critical digital solutions in collaboration with PwC and EY, supporting transparency, governance, and data-driven decision-making across key government initiatives."
        topLogos={[
          "/assests/img/pmis/cris-logo.png",
          "/assests/img/pmis/pm-mitra-logo.png",
          "/assests/img/pmis/education-logo.png",
          "/assests/img/pmis/prayagraj-logo.jpg",
          "/assests/img/pmis/kumbh-logo.png",
          "/assests/img/pmis/dtis-logo.png",
          "/assests/img/pmis/moh-logo.png",
        ]}
        bottomLogos={[
          "/assests/img/pmis/dtis-logo.png",
          "/assests/img/pmis/kumbh-logo.png",
          "/assests/img/pmis/cris-logo.png",
          "/assests/img/pmis/moh-logo.png",
          "/assests/img/pmis/pm-mitra-logo.png",
          "/assests/img/pmis/prayagraj-logo.jpg",
        ]}
      />
      <SuccessStory
        title="Digital Control. Real-Time Visibility."
        subtitle="PMIS platforms designed to manage scale, complexity, and accountability across large-impact projects."
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default PmisDevelopment