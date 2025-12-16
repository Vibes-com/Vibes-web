"use client";

import React, { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { RotateCw } from "lucide-react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 5 }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
};

const ContactForm = () => {
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");

    useEffect(() => {
        refreshCaptcha();
    }, []);

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
    };

    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">

                {/* Top Contact Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px]">
                            <IoIosMail />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1"> Email Id:</h4>

                            <Link href="mailto:info@vibescom.in" className="text-[#606060]">info@vibescom.in</Link>
                        </div>
                    </div>

                    <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px]">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">Phone No:</h4>
                            <Link href="tel:+0120-4101680" className="text-[#606060]">+91-0120-4101680</Link>

                        </div>
                    </div>

                    <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px]">
                            <HiOfficeBuilding />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">Our Office</h4>
                            <p className="text-[#606060]">
                                C-84/B, Sector 8, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form + Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Left Form Section */}
                    <div className="bg-[#ECF3EE] shadow-lg rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="first Name*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Website"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                            />

                            <textarea
                                placeholder="Your Message (Optional)"
                                rows={5}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                            ></textarea>

                            {/* CAPTCHA (Added) */}
                            <div>
                                <label className="block text-base font-medium mb-2">
                                    Captcha
                                </label>

                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        placeholder="Enter Captcha Code"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                                    />

                                    <div className="min-w-[160px] h-[48px] flex items-center justify-center
                                                    bg-[#7a7a7a] text-white font-semibold tracking-widest rounded-md">
                                        {captcha}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={refreshCaptcha}
                                        className="p-2 hover:rotate-90 transition-transform"
                                        aria-label="Refresh Captcha"
                                    >
                                        <RotateCw size={22} />
                                    </button>
                                </div>
                            </div>


                            <Button2 className="mt-5 p-[20px]  hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent text-[14px]">
                                <span>Submit</span>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>
                        </form>
                    </div>

                    {/* Right Map Section */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[635px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.3230908954598!2d77.32894854443926!3d28.59704149805207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ffd0000001%3A0x97587b436ee39762!2sVibes%20Communications%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Noida%20%2C%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1765798139858!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
