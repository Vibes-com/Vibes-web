"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";

export default function SocialStorytelling() {
    useEffect(() => {
        const swiper = new Swiper(".marquee-swiper", {
            modules: [Autoplay],
            slidesPerView: "auto",
            loop: true,
            speed: 7000,
            allowTouchMove: false,
            spaceBetween: 0,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            },
        });

        // ******** SUPER IMPORTANT FOR NON-STOP CONTINUOUS MOVE ********
        swiper.wrapperEl.style.transitionTimingFunction = "linear";
    }, []);

    return (
        <section className="social-storytelling-wrapper section-gap">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Key Performance Insights
                        </span>
                    </div>
                </div>

                <h3 className=" text-center font-poppins font-semibold text-[40px] leading-[1.23] tracking-norma]">
                    <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Visual Impact</span>That <br />Speaks for Brands

                </h3>
                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">A curated showcase of visual work that shapes brand perception across channels, including social campaigns, identity design, and custom website builds.</p>
            </div>

            <div className="marquee-swiper swiper mt-10">
                <div className="swiper-wrapper">
                    {/* EVEN — VIDEO */}
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>


                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>


                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                    <div className="swiper-slide even-slide">
                        <div className="videos-event flex align-center">
                            <video autoPlay muted loop playsInline preload="none" className="videos_width">
                                <source src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4" />
                            </video>
                        </div>
                    </div>


                    <div className="swiper-slide odd-slide">
                        <div className="stacked-images">
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" />
                            <img src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <Button2 className="mt-5 p-[20px]">
                    <span>Talk to us today</span>
                    <ArrowUpIcon className="transform rotate-45" />
                </Button2>
            </div>

            <style jsx>{`
        .social-storytelling-wrapper {
            background: url("/assests/img/home/brand-stories-bg.png");
            background-size: cover;
            background-repeat: no-repeat; 
            background-position: center;  
            overflow: hidden;
        }

        .marquee-swiper .swiper-wrapper {
          display: flex;
          align-items: center;
          transition-timing-function: linear !important;  
        }

        .swiper-slide {
          width: auto;
          margin-right: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          width: 250px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .stacked-images {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .stacked-images img {
          width: 200px;
          height:220px;
        }

        .even-slide {
          height: 390px;
        }

        .videos_width {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
        </section>
    );
}
