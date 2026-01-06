"use client";
import Image from "next/image";

export type WhyChooseItem = {
  title: string;
  desc: string;
  icon: string;
};

type WhyChooseSectionProps = {
  badgeText: string;
  heading: React.ReactNode;
  description: string;
  items: WhyChooseItem[];
  bgClass?: string;
  unionImage?: string;
  bgImage?: string;
};

export default function WhyChooseSection({
  badgeText,
  heading,
  description,
  items,
  bgImage,
  unionImage = "/assests/img/web-development/Union.png",
}: WhyChooseSectionProps) {
  return (
    <section className="section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badgeText}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-center font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
          {heading}
        </h3>

        {/* Description */}
        <p className="text-[#707070] text-[16px] text-center max-w-2xl mx-auto mb-16 mt-5">
          {description}
        </p>

        {/* DESKTOP */}
        <div className="relative mt-24 hidden lg:block">

          {unionImage && (
            <Image
              src={unionImage}
              alt="background"
              width={1200}
              height={300}
              className="absolute inset-0 w-full h-full z-0"
            />
          )}

          <div className="relative z-10 grid grid-cols-4 rounded-[40px]">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="px-10 py-7 flex flex-col items-center text-center"
                >
                  {isEven ? (
                    <>
                      <Image src={item.icon} alt={item.title} width={60} height={60} className="mb-6" />
                      <h3 className="font-semibold text-[24px] mb-3">{item.title}</h3>
                      <p className="text-[14px] text-[#707070]">{item.desc}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[14px] text-[#707070] mb-4">{item.desc}</p>
                      <h3 className="font-semibold text-[24px] mb-4">{item.title}</h3>
                      <Image src={item.icon} alt={item.title} width={60} height={60} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-1 gap-6 mt-16 lg:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#7FA58F] rounded-[24px] px-8 py-10 text-center"
            >
              <Image src={item.icon} alt={item.title} width={42} height={42} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
