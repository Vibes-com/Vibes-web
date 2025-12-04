import { Button } from "@/components/ui/button";
// import { Logo } from "@/components/logo";
// import { NavMenu } from "@/components/nav-menu";
// import { NavigationSheet } from "@/components/navigation-sheet";
import Logo from "./Navbar/logo";
import { NavMenu } from "./Navbar/nav-menu";
import { NavigationSheet } from "./Navbar/navigation-sheet";
import { ArrowUpIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" fixed z-10  inset-x-0 h-22 bg-[rgba(6,6,6,0.24)]  ">
      <div className="h-full max-w-(--breakpoint-xl) mx-auto flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            className="bg-[#F4BE00] text-black rounded-full px-5 py-5 flex items-center space-x-5  transition  hover:border-[#F4BE00] hover:border-[2px] hover:text-white rounded-full hover:bg-transparent"
          >
            <span>Talk to us today</span>
            <ArrowUpIcon className="transform rotate-45" />
          </Button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
