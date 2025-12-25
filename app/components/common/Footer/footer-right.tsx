import Link from "next/link";
import Image from 'next/image'
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function FooterRightSection() {
    return (
        <div className="text-white grid grid-cols-12 gap-y-8 ps-5  items-center">
            <div className="col-span-4">
                <ul className="space-y-3 text-[15px] font-light tracking-wide">
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="#" className="hover:text-[#F4BE00] transition-colors">Who we are</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0]"><Link href="#" className="hover:text-[#F4BE00] transition-colors">Case study</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="#" className="hover:text-[#F4BE00] transition-colors">Career</Link></li>
                    
                </ul>
            </div>

            <div className="col-span-4 ">
                <ul className="space-y-3 text-[15px] font-light tracking-wide">
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="/blog" className="hover:text-[#F4BE00] transition-colors">Blogs</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="#" className="hover:text-[#F4BE00] transition-colors">Culture</Link></li>
                    <li className="list-disc list-inside font-[500] text-[#7C7C7C] text-[16px] leading-[100%] tracking-[0] "><Link href="#" className="hover:text-[#F4BE00] transition-colors">Contact us</Link></li>
                </ul>
            </div>

            <div className="col-span-4">
                <Image
                    src={"/assests/img/home/vibes-logo.png"}
                    alt=''
                    width={100}
                    height={100}
                />
                <p className=" text-[#7C7C7C]  font-normal text-[12px] leading-[130%] tracking-[0] mb-4">
                    Digital Cooperation Organization promotes collaboration among member nations.
                    We bridge digital divides and enable equal opportunities through technology.
                </p>
                <div className="flex items-center gap-5 mt-2">
                    <Link href="#" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Facebook size={15} strokeWidth={1.6} /></Link>
                    <Link href="#" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Twitter size={15} strokeWidth={1.6} /></Link>
                    <Link href="#" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Youtube size={15} strokeWidth={1.6} /></Link>
                    <Link href="#" className="hover:text-[#E3A324] transition bg-[#585858] rounded-full h-[25px] w-[25px] flex items-center justify-center"><Linkedin size={15} strokeWidth={1.6} /></Link>
                </div>
            </div>
        </div>
    );
}
