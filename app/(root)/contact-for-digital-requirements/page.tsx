"use client";
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection';
import ContactForm from '@/app/components/contact-us/contact-form/ContactForm'


const page = () => {

  return (
    <div>

      <HeroSection
        backgroundImage="/assests/img/contact/contact-us-bg.jpg"
        title={
          <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
            Connect. Collaborate.
            <br />
            <span className=" hero-highlight relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
              Create.
            </span>
          </h1>
        }
        description="A space to explore partnerships, projects, and meaningful digital possibilities."
      />
      <ContactForm />
    </div>
  )
}

export default page
