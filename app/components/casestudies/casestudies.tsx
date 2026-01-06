"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button2 } from "@/components/ui/button2";
import { Button3 } from "@/components/ui/button3";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SlideUp from "../animations/SlideUp";
import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";
// import { useGetAllCaseStudiesQuery } from "@/store/services/caseStudyApi";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function CaseStudies() {
    const router = useRouter();

    const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

    const caseStudies = data?.data || [];


    // Handling states (loading / error)
    if (isLoading)
        return <p className="text-center py-10 text-gray-500">Loading case studies...</p>;

    if (isError)
        return <p className="text-center py-10 text-red-500">Failed to load case studies</p>;

    return (
        <section className="casestudies-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex justify-start mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            CASE STUDIES
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h3 className="font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]  leading-[123%] cmn-heading">
                            Vision to <span className=" z-9 relative w-fit highlight font-semibold cmn-heading">Verified Results</span>
                        </h3>
                        <p className="text-[#707070] text-[16px] mt-5 max-w-2xl">
                            Turning brand challenges into powerful growth stories with strategies crafted to solve, scale, and sustain. These case studies show how clear vision and 360° digital expertise drive real results.
                        </p>
                    </div>
                    <Link href="/case-studies">
                        <Button2 className="mt-5 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]  p-[20px] cursor-pointer hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent">
                            <span>Dive Into Success Stories</span>
                            <ArrowUpIcon className="transform rotate-45" />
                        </Button2>
                    </Link>
                </div>

                <SlideUp delay={0.5}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        loop={true}
            //             autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mt-16 pb-12"
                    >
                        {caseStudies.slice(0, 5).map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl mb-5 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

                                    <div className="relative w-full case-crd h-[280px] border-1 border-gray-400 rounded-xl overflow-hidden group">
                                        <Image
                                            src={item.thumbnail}
                                            alt={item.client_name}
                                            fill
                                            className="object-fill transition-all duration-[900ms] group-hover:scale-110 group-hover:opacity-90"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-[#1F1F1F] font-poppins font-semibold text-[24px]">
                                        {item.client_name}
                                    </h3>

                                    <div className="flex items-center gap-3 mt-4 justify-between">
                                        {item.tags && item.tags.length > 0 && (
                                            <div className="flex gap-3 flex-wrap">
                                                {item.tags.split(",").map((tag, index) => (
                                                    <span key={index} className="px-3 py-1 bg-[#F2F4F7] text-[10px] rounded-full">
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <Button3
                                            className="text-[#204667] p-[5px] flex items-center gap-2 hover:text-[#F4BE00]"
                                            onClick={() =>
                                                router.push(
                                                    `/case-studies/${item.slug || item.client_slug}`
                                                )
                                            }
                                        >
                                            <span>Inside The Project</span>
                                            <ArrowUpIcon className="transform rotate-45" />
                                        </Button3>

                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SlideUp>
            </div>
        </section>
    );
}
