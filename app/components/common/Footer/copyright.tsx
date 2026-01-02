import React from "react";

export default function Copyright() {
    return (
        <div className="w-full border-t border-white/30 py-5">
            <p className=" text-[#575757DB] text-center font-corbel font-normal text-[11px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[100%] tracking-[0px]">
                Copyright © {new Date().getFullYear()} | Vibes Communications. | All Rights Reserved.
            </p>
        </div>
    );
}
