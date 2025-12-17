"use client";
import Image from "next/image";

const items = [
  {
    title: "Insight-Led Execution",
    desc: "Smart decisions guide every build, ensuring each solution aligns with goals and delivers real impact.",
    icon: "/assests/img/web-development/why-choose-icon2.png",
  },
  {
    title: "Future-Ready Architecture",
    desc: "Code is crafted for speed, stability, and effortless scaling as your business and demands grow.",
    icon: "/assests/img/web-development/why-choose-icon1.png",
  },
  {
    title: "Delivery You Can Count On",
    desc: "Timelines are honored with precision, ensuring every milestone is met without compromising quality.",
    icon: "/assests/img/web-development/why-choose-icon3.png",
  },
  {
    title: "Continuous Care & Support",
    desc: "Ongoing updates, fixes, and monitoring keep your digital systems secure, smooth, and high-performing.",
    icon: "/assests/img/web-development/why-choose-icon4.png",
  },
];

export default function WhyChooseVibes() {
  return (
    <section className=" why-choose-vibes-wrapper bg-[#FAF8F3] section-gap">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
            <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
              Why Choose Us
            </span>
          </div>
        </div>

        <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
          <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Choose Vibes.</span> Choose Certainty.

        </h3>
        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">Vibes delivers high-performing, scalable, secure digital solutions- built with precision, expertise, clear communication, and on-time delivery brands trust.</p>
        {/* DESKTOP WORKFLOW */}
        <div className="relative mt-24 hidden lg:block bg-union">

          <div className="bg-union">
            <Image
              src="/assests/img/web-development/Union.png"
              alt="Banner Image"
              width={1200}
              height={300}
              className="absolute inset-0 w-full h-full z-0"
            />
          </div>


          {/* CARDS */}
          <div className="relative z-10 grid grid-cols-4 rounded-[40px]">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="px-10 py-14 h-[300px] flex flex-col items-center text-center"
                >
                  {isEven ? (
                    <>
                      {/* ICON */}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="mb-6"
                      />

                      {/* TITLE */}
                      <h3 className="font-poppins font-semibold text-[24px] leading-[1.23] tracking-normal text-center text-[#303030] mb-3">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="font-poppins font-normal text-[14px] leading-[1.23] tracking-normal text-center text-[#707070]">
                        {item.desc}
                      </p>
                    </>
                  ) : (
                    <>
                      {/* DESC */}
                      <p className="font-poppins font-normal text-[14px] leading-[1.23] tracking-normal text-center text-[#707070] mb-4">
                        {item.desc}
                      </p>

                      {/* TITLE */}
                      <h3 className="font-poppins font-semibold text-[24px] leading-[1.23] tracking-normal text-center text-[#303030] mb-4">
                        {item.title}
                      </h3>

                      {/* ICON */}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
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
              <Image
                src={item.icon}
                alt={item.title}
                width={42}
                height={42}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
