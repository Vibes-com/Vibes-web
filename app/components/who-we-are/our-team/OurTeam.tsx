import React from 'react'
import TeamMembers from '../../teammember/teammember'

const OurTeam = () => {
    return (
        <section className="our-team-wrapper section-gap">
            <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                Meet Our <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Team</span>

            </h3>
            <TeamMembers />
        </section>
    )
}

export default OurTeam
