import Link from "next/link";
import Image from 'next/image'
import { withImageBase } from "@/app/utils/image";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { X } from "lucide-react";

export default function FooterRightSection() {
    return (
        <div className="text-white lg:grid grid-cols-12 gap-y-8 ps-5  items-center">
            <div className="col-span-4">
                <ul className="space-y-3 text-[15px] font-light tracking-wide">
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/about-us-together-for-tomorrow" className="hover:text-[#F4BE00] transition-colors">Who We Are</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0]"><Link href="/case-studies" className="hover:text-[#F4BE00] transition-colors">Case Studies</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/work-with-digital-agency" className="hover:text-[#F4BE00] transition-colors">Careers</Link></li>

                </ul>
            </div>

            <div className="col-span-4 pt-3 sm:pt-3 md:pt-3 lg:pt-0 xl:pt-0 2xl:pt-0">
                <ul className="space-y-3 text-[15px] font-light tracking-wide">
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/digital-insights-blogs" className="hover:text-[#F4BE00] transition-colors">Blogs</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/gallery" className="hover:text-[#F4BE00] transition-colors">Culture</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/contact-for-digital-requirements" className="hover:text-[#F4BE00] transition-colors">Contact Us</Link></li>
                </ul>
            </div>

            <div className="col-span-4 pt-4 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
                <Image
                    src={withImageBase("/home/vibes-logo.png")}
                    alt='Vibes Communications Logo'
                    width={100}
                    height={100}
                />
                <p className=" text-[#7C7C7C]  font-normal text-[12px] leading-[25px] sm:leading-[25px] md:leading-[130%] lg:leading-[130%] xl:leading-[130%] 2xl:leading-[130%] tracking-[0] mb-4">
                    Vibes Communications integrates technology, branding, and digital marketing to transform ideas into impactful digital experiences building strong brands through smart strategy, creative design, and data-driven storytelling.
                </p>
                <div className="flex items-center gap-5 mt-2">
                    <Link target="_blank" href="https://www.facebook.com/vibescomm" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Facebook size={15} strokeWidth={1.6} /></Link>
                    <Link target="_blank" href="https://www.instagram.com/vibescom/" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Instagram size={15} strokeWidth={1.6} /></Link>
                    <Link target="_blank" href="https://x.com/Vibescom" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><svg viewBox="0 0 24 24"width="11" height="11"fill="currentColor"> <path d="M18.9 2H22l-7.1 8.1L23 22h-6.5l-5.1-6.2L5.7 22H2.6l7.6-8.7L1 2h6.7l4.6 5.6L18.9 2z" /></svg></Link>
                    <Link target="_blank" href="https://www.youtube.com/channel/UChD9LXlNV4_XnOmVmG2LTvQ/videos" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Youtube size={15} strokeWidth={1.6} /></Link>
                    <Link target="_blank" href="https://www.linkedin.com/company/vibes-communications-pvt--ltd-/" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Linkedin size={15} strokeWidth={1.6} /></Link>
                </div>
            </div>
        </div>
    );
}
