"use client";
import Image from "next/image";
import Link from "next/link";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useGetAllBlogsQuery } from "@/app/redux/api/blogApi";
import { useState } from "react";

interface BlogCardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    link: string;

}
interface blogContent {
    title: string;
    Subtitle: React.ReactNode;
    bgImage?: string;
    highlighttitle: string;
    service:string
}
interface BlogsProps {
    tData: blogContent;
}
// const blogs: BlogCardProps[] = [
//     {
//         id: "101",
//         date: "April 28, 2025",
//         title: "Accenture Introduces trusted agent huddle to allow seamless.",
//         description:
//             "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
//         link: "/blogs/101",
//     },
//     {
//         id: "102",
//         date: "April 28, 2025",
//         title: "Accenture Introduces trusted agent huddle to allow seamless.",
//         description:
//             "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
//         link: "/blogs/102",
//     },
//     {
//         id: "103",
//         date: "April 28, 2025",
//         title: "Accenture Introduces trusted agent huddle to allow seamless.",
//         description:
//             "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
//         link: "/blogs/103",
//     },
// ];

export default function OurBlogs({ tData }: BlogsProps) {
    const { data, error, isLoading } = useGetAllBlogsQuery();
    
      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error loading blogs</p>;
    
      const blogs = (data?.blog_list.filter((blog: any) => blog.blog_service === tData.service))?.slice(0,5) ?? [];
    //   console.log(blogs)
        
    return (
        <section
            className="blogs-wrapper section-gap relative w-full bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: tData?.bgImage ? `url(${tData?.bgImage})` : "none",
            }}
        >
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col  sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div className="flex-1">
                        <div className="flex justify-start mb-5">
                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Blogs
                                </span>
                            </div>
                        </div>
                        <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                            {tData?.title} <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">{tData?.highlighttitle}</span>
                        </h3>

                        <p className="text-[#525252] mt-5 ">
                            {tData?.Subtitle}

                        </p>

                    </div>

                    <Link href="/digital-insights-blogs">
                        <Button2 className="mt-5 p-[20px] cursor-pointer">
                            <span>Explore Our Blogs</span>
                            <ArrowUpIcon className="transform rotate-45" />
                        </Button2>
                    </Link>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}  
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        }
                    }}
                    speed={2500}
                    className="pb-10 flex"
                >
                    {blogs.map((item) => (
                        <SwiperSlide key={item.blog_id}>
                            <div className="bg-[#ECF3EE] p-8 mb-8 border border-[#E5E5E5] hover:shadow-xl transition-all duration-300">
                                <p className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-[#636060] mb-4">{item.created_on}</p>
                                <h4 className="font-poppins font-semibold text-[24px] leading-[130%] tracking-[0px] text-[#464646] mb-2">
                                    {item.blog_title}
                                </h4>
                                <p className="font-poppins font-normal text-[14px] leading-[130%] tracking-[0px] text-[#606060]">
                                    {item.blog_small_description ||
                                        item.blog_description
                                        .replace(/<[^>]*>/g, "")
                                        .substring(0, 200)}
                                </p>
                                <Button3 className=" text-[#204667] flex items-center gap-2">
                                    <span>View More</span>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}
