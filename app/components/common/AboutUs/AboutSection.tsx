import Image from "next/image";
import { withImageBase } from "@/app/utils/image";
import SlideRight from "../../animations/SlideRight";

type Feature = {
  icon: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  alt:string;
};

type AboutSectionProps = {
  bgImage?: string;
  badgeText: string;
  heading: string;
  highlightText?: string;
  description: string;
  mainImage: string;
  features: Feature[];
  alt:string;
};

const AboutSection = ({
  bgImage,
  badgeText,
  heading,
  highlightText,
  description,
  mainImage,
  features,
  alt
}: AboutSectionProps) => {
  return (
    <section
      className="overflow-hidden section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
        <SlideRight delay={0.5}>
          <div className="relative">
            <img
              src={withImageBase(mainImage)}
              alt={alt}
              width={650}
              height={450}
              className="relative z-10"
            />
          </div>
          </SlideRight>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <div className="flex mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                  {badgeText}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="font-poppins font-medium text-[27px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
              {heading}{" "}<br />
              {highlightText && (
                <span className=" relative highlight w-fit z-9 font-semibold text-[27px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]">
                  {highlightText}
                </span>
              )}
            </h3>

            {/* Description */}
            <p className="text-[#525252] mt-5">{description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 flex-wrap">
                  <div className="w-15 h-15 rounded-full bg-[#466E59] flex items-center justify-center">
                    <img
                      src={withImageBase(feature.icon)}
                      alt={feature.alt}
                      width={25}
                      height={25}
                      
                    />
                  </div>
                  <div>
                    <p className="font-poppins font-medium text-[18px] leading-[1.2] tracking-normal text-[#525252ED] mb-3">
                      {feature.title}
                    </p>
                    <span className="text-[#525252] text-[12px]">
                      {feature.subtitle}
                    </span>
                  </div>

                </div>

              ))}
            </div>

          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;
