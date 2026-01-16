import React from "react";
import Image from 'next/image'
import {withImageBase} from "@/app/utils/image";
const TogetherLeft = () => {
    return (
        <div className="font-openSans text-[#1A1A1A]">
            <h2 className="text-[#303030] font-poppins font-bold text-[75px] leading-[123%] tracking-[0]">
                TOGETHER WE
            </h2>
            <h3 className="text-[#303030] font-poppins  flex ps-10 font-bold text-[75px] leading-[123%] tracking-[0]"> <span className="highlight2 w-fit relative me-5 flex z-9">REI<span><img
               src={withImageBase("/home/v-bird.png")}
                alt=''
                width={70}
                height={70}
            /></span><span className="ml-[-20px]">ENT</span></span>GROWTH
            </h3>
        </div>
    );
};

export default TogetherLeft;

