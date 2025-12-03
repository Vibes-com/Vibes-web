import React from "react";
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

const page = () => {
  return (
    <div>

      <Hero />
      <TeamDreamSection />
      {/* <TogetherMain /> */}
      {/* <Technology />
      <Branding />
      <Digital /> */}

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        <div className="snap-start">
          <Technology />
        </div>
        <div className="snap-start">
          <Digital />
        </div>
        <div className="snap-start">
          <Branding />
        </div>
      </div>

      <CaseStudies />
      {/* <TeamMembers /> */}
      <MilestoneMetrics />
      {/* <MarqueeTabsSlider /> */}
      <SocialStorytelling />

      {/* <OurBlogs /> */}
    </div>
  );
};

export default page;
