"use client";
import React, { useRef } from "react";
import Hero from "../components/hero/Hero";
import TogetherMain from "../components/together/together-main";
import Technology from "../components/technology/technology";
import Branding from "../components/branding/branding";
import Digital from "../components/digital/digital";
import CaseStudies from "../components/casestudies/casestudies";
import TeamMembers from "../components/teammember/teammember";
import TeamDreamSection from "../components/teamdream/teamdream";
import MilestoneMetrics from "../components/milestones/milestones";
import OurBlogs from "../components/blogs/blogs";
import SocialStorytelling from "../components/socialstorytelling/socialstorytelling";
import MarqueeTabsSlider from "../components/clients/clients";
import HomeGallery from "../components/homegallery/HomeGallery";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/animations/FadeIn";
import FadeOut from "../components/animations/FadeOut";
import SlideRight from "../components/animations/SlideRight";

const page = () => {


  return (
    <div>

      <Hero />
      
      
      <TeamDreamSection />
      
      {/* <TogetherMain /> */}
      {/* <Technology />
      <Branding />
      <Digital /> */}
      <div className="relative">

        <div className="sticky top-0 z-[10]">
          <Technology/>
        </div>
        <div className="sticky top-0 z-[20]">
          <Branding/>
        </div>
        <div className="sticky top-0 z-[30]">
          <Digital/>
        </div>
      </div>





      <CaseStudies />
      <SocialStorytelling />
      {/* <TeamMembers /> */}
      <MilestoneMetrics />
      {/* <MarqueeTabsSlider /> */}
      <HomeGallery />
      {/* <OurBlogs /> */}
    </div>
  );
};

export default page;
