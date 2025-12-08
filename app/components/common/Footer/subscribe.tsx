import React from 'react'

export default function SubscribeBox() {
    return (
        <div className="w-full max-w-xl mx-auto mt-6">
            <div className="relative">
                <input
                    type="email"
                    placeholder="Enter Email-ID"
                    className="w-full bg-[#6D6D6D54] border-[2px] border-solid border-[#7373732B] px-5 py-3 pr-40 rounded-full  placeholder:font-medium placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0] focus:outline-none text-[#A3A3A3]"
                />

                <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 right-1 bg-[#161616] text-[#FFFFFF] font-semibold px-6 py-2 rounded-full  transition whitespace-nowrap"
                >
                    Subscribe Now
                </button>
            </div>
        </div>
    );
}