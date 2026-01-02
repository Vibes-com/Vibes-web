import React from 'react'

interface MemberCardProps {
    m: {
        member_id: string | number;
        member_image: string;
        member_fname: string;
        member_lname: string;
        member_role: string;
        member_description: string;
    };
    isActive?: boolean;
}

const MemberCard = ({ m, isActive }: MemberCardProps) => {
    return (
        <div
            className={`
        relative member-center px-8 pt-16 pb-10 rounded-xl shadow-xl 
        transition-all duration-500
        ${isActive
                    ? 'md:scale-[1.15] md:translate-y-6 md:bg-[#326E4F] md:text-white bg-white text-[#2B3332]'
                    : 'bg-white text-[#2B3332]'
                }
      `}
        >
            {/* Profile Image */}
            <div
                className={`
          absolute left-1/2 -top-14 -translate-x-1/2
          transition-all duration-500
          ${isActive ? 'w-32 h-32' : 'w-24 h-24'}
        `}
            >
                <div className="rounded-full overflow-hidden border-[6px] border-[#F4BE00] shadow-lg">
                    <img
                        src={m.member_image}
                        alt={`${m.member_fname} ${m.member_lname}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-center">
                {m.member_fname} {m.member_lname}
            </h3>

            {/* Role */}
            <p className={`text-xs text-center mt-1 opacity-80 ${isActive ? 'md:text-yellow-200' : ''}`}>
                {m.member_role}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-center line-clamp-3">
                {m.member_description}
            </p>
        </div>
    )
}

export default MemberCard