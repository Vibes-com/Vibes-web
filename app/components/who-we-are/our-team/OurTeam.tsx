import React from 'react'
import TeamMembers from '../../teammember/teammember'

const OurTeam = () => {
    return (
        <section className="our-team-wrapper section-gap">
            <div className="flex justify-center mb-5">

                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                        Our Team
                    </span>
                </div>
            </div>
            <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                Meet Our <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Team</span>

            </h3>
            <TeamMembers />
        </section>
    )
}

export default OurTeam
