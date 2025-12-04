"use client";
import React from "react";
import FooterText from "./Footer/footer-text";
import SubscribeBox from "./Footer/subscribe";
import FooterRightSection from "./Footer/footer-right";
import Copyright from "./Footer/copyright";
import Image from "next/image";
import { Bot, Coffee } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper relative bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center pt-10 pb-8">
          <div className="col-span-5 pe-10 pt-6 p-4 border-e border-white/30">
            <FooterText />
            <SubscribeBox />
          </div>
          <div className="col-span-7 p-4">
            <FooterRightSection />
          </div>
        </div>

        <Copyright />

        <div className="vibes-footer-logo">
          <Image
            src={"/assests/img/home/footer_vibes_icon.png"}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>


      <div className="fixed right-0 bottom-15 flex flex-col gap-3 z-[99]">
        <div className="flex justify-end">
          <div className="group w-[50px] hover:w-[200px] h-[46px] 
        bg-[#F4BE00] rounded-tl-full rounded-bl-full flex items-center px-4 cursor-pointer
        transition-all duration-700  shadow-lg overflow-hidden">
            <Coffee size={20} className="text-black shrink-0" />

            <span className="ml-3 text-black font-medium text-sm 
          opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
              Coffee Table
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="group w-[50px] hover:w-[200px] h-[46px] 
        bg-[#2B4C69] rounded-tl-full rounded-bl-full flex items-center px-4 cursor-pointer
        transition-all duration-700  shadow-lg overflow-hidden">
            <Bot size={20} className="text-white shrink-0" />

            <span className="ml-3 text-white font-medium text-sm 
          opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
              Chat With Bot
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="group w-[50px] hover:w-[200px] h-[46px]
    bg-[#24CC63] rounded-tl-full rounded-bl-full flex items-center px-4 cursor-pointer
    transition-all duration-700 shadow-lg overflow-hidden"
          >
            <FaWhatsapp size={20} className="text-white shrink-0" />

            <span
              className="ml-3 text-white font-medium text-sm
      opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap"
            >
              WhatsApp Support
            </span>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Footer;
