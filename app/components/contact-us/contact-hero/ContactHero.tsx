import React from 'react'

const ContactHero = () => {
    return (
        <div className="contact-hero-wrapper flext flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-8">

                        <h1 className="font-poppins font-normal text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Get your Business streamlined for success.
                            <br />
                            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Get in Touch.</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]">
                            We’re ready to turn ideas into meaningful digital experiences—let’s connect and build something impactful together.
                        </p>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-span-4"></div>
                </div>
            </div>

        </div>
    )
}

export default ContactHero
