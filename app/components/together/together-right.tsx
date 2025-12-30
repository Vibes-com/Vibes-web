import React from 'react'
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
const TogetherRight = () => {
    return (
        <div className="ms-4">
            <h3 className=" text-[#282828] font-poppins font-bold text-[40px] leading-[100%] tracking-[0]">Building <span className="highlight1 w-fit relative z-9 ">What’s Next</span></h3>
            <p className="mt-2 font-corbel font-normal text-[20px] leading-[100%] tracking-[0] text-[#303030]">We help brands rise above noise and shape what’s next. With every partnership, we build futures that inspire.</p>
            <Button2 className="mt-5 p-[20px]  cursor-pointer">
                <span>Discover more</span>
                <ArrowUpIcon className="transform rotate-45" />
            </Button2>
        </div>
    )
}

export default TogetherRight
