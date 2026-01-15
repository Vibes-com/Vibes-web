"use client";
import { Button } from "@/components/ui/button";
// import { Logo } from "@/components/logo";
// import { NavMenu } from "@/components/nav-menu";
// import { NavigationSheet } from "@/components/navigation-sheet";
import Logo from "./Navbar/logo";
import { NavMenu } from "./Navbar/nav-menu";
import { NavigationSheet } from "./Navbar/navigation-sheet";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={` fixed bg-black sm:bg-[rgba(6,6,6,0.24)] md:bg-[rgba(6,6,6,0.24)] lg:bg-[rgba(6,6,6,0.24)] xl:bg-[rgba(6,6,6,0.24)] 2xl:bg-[rgba(6,6,6,0.24)] inset-x-0 z-100 h-22 transition-all duration-300
        ${scrolled ? "md:bg-black/90 lg:bg-black/90 xl:bg-black/90 2xl:bg-black/90  backdrop-blur-sm" : "bg-[rgba(6,6,6,0.24)]"}
      `}>
      <div className="h-full  flex items-center justify-between mx-auto px-4 ">
        <Logo />

        {/* Desktop Menu */}
        <div className="flex ms-auto gap-8 items-center">
          <NavMenu className="hidden lg:block" />

          <div className="flex items-center gap-3 talk-btn">
            <a href="tel:+91-8586932861"
              className="bg-[#F4BE00] text-black px-4 text-sm py-1 flex items-center space-x-5 transition  border-[2px] border-[#F4BE00] hover:text-white rounded-full *:hover:bg-transparent"
            >
              <span className="mx-1">Talk to Us Today</span>
              <ArrowUpIcon className="transform rotate-45" />
            </a>
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
