"use client";
import Link from "next/link";
import React from "react";

interface CaseStudyDetailsHeroProps {
   title: string;
  highlightTitle: string;
  description?: string;
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
}

const CaseStudyDetailsHero: React.FC<CaseStudyDetailsHeroProps> = ({
  title,
  highlightTitle,
  description,
  backgroundImage,
  height = " h-[65vh] lg:min-h-[70vh] xl:min-h-[70vh] 2xl:min-h-[70vh]",
  overlay = true,
}) => {
  return (
    <div
      className={`case-study-details-hero-wrapper flex items-center ${height} relative`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center ">
          <div
            className={`col-span-12 md:col-span-6`}
          >
            <h1 className="font-poppins font-normal pt-15 hero-heading text-[32px] sm:text-[35px] md:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[116%] capitalize text-white">
              {title}
              {highlightTitle && (
                <>
                  <br />
                  <span className="hero-highlight1 relative z-10 w-fit font-poppins font-semibold text-[33px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] leading-[116%] capitalize text-white">
                    {highlightTitle}
                  </span>
                </>
              )}
            </h1>

            {description && (
              <p className="mt-10 font-poppins font-semibold text-[16px] leading-[128%] text-white">
                {description}
              </p>
            )}
            
          <nav className="flex pt-10 text-white" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="inline-flex items-center text-[10px] lg:text-sm font-medium text-body hover:text-fg-brand"
                    >
                      <svg
                        className="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Home
                    </Link>
                  </li>

                  <li>
                    <div className="flex items-center space-x-1.5">
                      <svg
                        className="w-3.5 h-3.5 rtl:rotate-180 text-body"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m9 5 7 7-7 7"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-center text-[10px] lg:text-sm font-medium text-body hover:text-fg-brand"
                      >
                        Case Study
                      </Link>
                    </div>
                  </li>

                  <li aria-current="page">
                    <div className="flex items-center space-x-1.5">
                      <svg
                        className="w-3.5 h-3.5 rtl:rotate-180 text-body"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m9 5 7 7-7 7"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="inline-flex items-center text-[10px] lg:text-sm font-medium text-body-subtle">
                      Case Study Details
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
          </div>

          {/* RIGHT COLUMN (optional future image / video) */}
          <div className="hidden md:block md:col-span-6"></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailsHero;
