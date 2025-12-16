import Image from "next/image";

const WebDevelopmentAbout = () => {
    return (
        <section className=" bg-[#FAF8F3] overflow-hidden">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE SECTION */}
                    <div className="relative">
                        <Image
                            src="/assests/img/web-development/webdevelopment-about-img.png"
                            alt="Dashboard preview"
                            width={650}
                            height={450}
                            className="relative z-10"
                        />

                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div>
                        {/* About Tag */}
                        <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#F4BE00] text-[#F4BE00] text-sm font-medium mb-6">
                            ABOUT US
                        </span>

                        {/* Heading */}
                        <h2 className="font-poppins font-semibold text-[42px] leading-[120%] text-[#2B2B2B]">
                            IT Solutions Engineered <br />
                            for{" "}
                            <span className="relative inline-block">
                                Speed and Scalability
                                <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#F4BE00] -z-10"></span>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 font-poppins font-normal text-[16px] leading-[160%] text-[#6B6B6B] max-w-xl">
                            Vibes develops secure, bespoke web platforms engineered for high
                            performance, scalability, and reliability, supported by refined
                            development and adaptive design.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

                            {/* Feature Item */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#3F6B57] flex items-center justify-center">
                                    <Image
                                        src="/assets/icons/code.svg"
                                        alt="icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[16px] text-[#2B2B2B]">
                                    Custom-Coded, <br /> Secure Builds
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#3F6B57] flex items-center justify-center">
                                    <Image
                                        src="/assets/icons/speed.svg"
                                        alt="icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[16px] text-[#2B2B2B]">
                                    High-Speed <br /> Performance
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#3F6B57] flex items-center justify-center">
                                    <Image
                                        src="/assets/icons/architecture.svg"
                                        alt="icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[16px] text-[#2B2B2B]">
                                    Scalable <br /> Architecture
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#3F6B57] flex items-center justify-center">
                                    <Image
                                        src="/assets/icons/delivery.svg"
                                        alt="icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[16px] text-[#2B2B2B]">
                                    On-Time Project <br /> Delivery
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentAbout;
