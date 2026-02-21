// "use client";
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection';
import ContactForm from '@/app/components/contact-us/contact-form/ContactForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vibes Communications | Let’s Build Something Great",

  description:
    "Get in touch with Vibes Communications to discuss branding, digital marketing, or custom software solutions for your business.",

  alternates: {
    canonical: "https://www.vibescom.in/contact-for-digital-requirements",
  },

  openGraph: {
    title: "Contact Vibes Communications | Let’s Build Something Great",
    description:
      "Get in touch with Vibes Communications to discuss branding, digital marketing, or custom software solutions for your business.",
    url: "https://www.vibescom.in/contact-for-digital-requirements",
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
    title: "Contact Vibes Communications | Let’s Build Something Great",
    description:
      "Get in touch with Vibes Communications to discuss branding, digital marketing, or custom software solutions for your business.",
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

const page = () => {

  return (
    <div className="overflow-hidden">
      <HeroSection
        backgroundImage="/contact/Connecting-Brands-Creating-Vibes-vibes-communications.jpg"
         mobileBackgroundImage="/contact/Connecting-Brands-Creating-mobile-Vibes-communications.jpeg"
        
        title={<h1 className="font-poppins font-normal pt-0 mt-[-150px] md:mt-[50px] lg:mt-[0px] lg:pt-15 hero-heading text-[32px] sm:text-[60px] md:text-[30px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] capitalize text-white">
          Connect. Collaborate.
          <br />
          <span className=" hero-highlight relative hero-heading z-10 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[35px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] text-[#F4BE00]">
            Create.
          </span>
        </h1>}
        description="A space to explore partnerships, projects, and meaningful digital possibilities."/>
      <ContactForm />
    </div>
  )
}

export default page
