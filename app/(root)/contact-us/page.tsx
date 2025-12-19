"use client";
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection';
import ContactForm from '@/app/components/contact-us/contact-form/ContactForm'
import ContactHero from '@/app/components/contact-us/contact-hero/ContactHero'
import { useRouter } from 'next/router';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div>
            
        <HeroSection
          backgroundImage="/assests/img/contact/contact-us-bg.jpg"
          title={
            <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
              Get your Business streamlined for success.
              <br />
              <span className="relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
                Get in Touch.
              </span>
            </h1>
          }
          description="We’re ready to turn ideas into meaningful digital experiences—let’s connect and build something impactful together."
          />
            <ContactForm />
        </div>
    )
}

export default page
