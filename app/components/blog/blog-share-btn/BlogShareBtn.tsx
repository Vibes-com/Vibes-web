'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaShareAlt, FaTimes } from 'react-icons/fa';
import {withImageBase} from "@/app/utils/image";

const BlogShareButtons = () => {
    const [open, setOpen] = useState(false);

   const url =
typeof window !== "undefined" ? window.location.href : "";
    const title = '';
    const encodedUrl = encodeURIComponent(url);
const encodedTitle = encodeURIComponent(title);

    return (
        <div className="">
            <div className="relative flex items-center gap-3">
                {/* Share Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="w-10 h-10 rounded-full bg-[#F4BE00] text-white flex items-center justify-center text-lg shadow-md transition-all duration-300"
                >
                    {open ? <FaTimes /> : <FaShareAlt />}
                </button>

                {/* Social Icons */}
                <ul
                    className={`absolute right-[2%] flex gap-2 transition-all duration-300 ${open
                        ? 'opacity-100 visible -translate-x-0'
                        : 'opacity-0 invisible translate-x-4'
                        }`}
                >
                    <li className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center scale-100 shadow-[0_0_13px_#F4BE00] ">
                        <Link
                            target="_blank"
                            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                        >
                            <img
                                src={withImageBase("/blog/whatsapp_share.png")}
                                className="w-[40px]"
                                alt="WhatsApp"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>

                    <li className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center shadow-[0_0_13px_#F4BE00] ">
                        <Link
                            target="_blank"
                           href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                        >
                            <img
                                src={withImageBase("/blog/facebook_share.png")}
                                className="w-[40px]"
                                alt="Facebook"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>

                    <li className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center shadow-[0_0_13px_#F4BE00] ">
                        <Link
                            target="_blank"
                            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                        >
                            <img
                                 src={withImageBase("/blog/twitter_share.png")}
                                className="w-[40px]"
                                alt="Twitter"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>

                    <li className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center shadow-[0_0_13px_#F4BE00] ">
                        <Link
                            target="_blank"
                           href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        >
                            <img
                                src={withImageBase("/blog/linkedin_share.png")}
                                className="w-[40px]"
                                alt="LinkedIn"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BlogShareButtons;
