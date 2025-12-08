"use client";

import Technology from "./Technology";
import Digital from "./Digital";
import Branding from "./Branding";
import Creative from "./Creative"; 

export default function SectionScrollWrapper() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="snap-start relative z-[3]">
        <Technology />
      </div>

      <div className="snap-start relative z-[2]">
        <Digital />
      </div>

      <div className="snap-start relative z-[1]">
        <Branding />
      </div>
    </div>
  );
}
