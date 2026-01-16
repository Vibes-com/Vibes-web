import Image from "next/image";
import {withImageBase} from "@/app/utils/image";

const workflowSteps = [
    {
        id: "01",
        title: "Discovery & Planning",
        desc: "The goals, audience, and structure are defined during Discovery & Planning to create a scalable foundation for the website.",
        icon: "/web-development/workflow-icon-1.png",
    },
    {
        id: "02",
        title: "Wireframing & Architecture",
        desc: "Wireframes and architecture are used as the blueprint to define structure and function before design begins.",
        icon: "/web-development/workflow-icon-2.png",
    },
    {
        id: "03",
        title: "UI/UX Design",
        desc: "UI/UX design is used to create intuitive digital experiences, using clear layouts, colors, and flows to ensure smooth, efficient user interaction.",
        icon: "/web-development/workflow-icon-3.png",
    },
    {
        id: "04",
        title: "Front-End Development",
        desc: "Front-end development is used to turn designs into responsive, interactive interfaces with HTML, CSS, JavaScript, and modern UI frameworks.",
        icon: "/web-development/workflow-icon-1.png",
    },
    {
        id: "05",
        title: "Back-End Development",
        desc: "Server logic, databases, APIs, and security are built in the backend to support scalable and reliable applications.",
        icon: "/web-development/workflow-icon-4.png",
    },
    {
        id: "06",
        title: "Testing",
        desc: "Website testing is conducted to verify functionality, meet requirements, and ensure performance across devices and browsers.",
        icon: "/web-development/workflow-icon-5.png",
    },
    {
        id: "07",
        title: "Deployment",
        desc: "The tested product is deployed to production, configured for use, and optimized for performance and stability.",
        icon: "/web-development/workflow-icon-6.png",
    },
    {
        id: "08",
        title: "Support & Maintenance",
        desc: "Performed to keep software secure, updated, and high-performing through continuous monitoring and improvements.",
        icon: "/web-development/workflow-icon-7.png",
    },
];

const WebDevelopmentWorkflow = () => {
    return (
        <section className="development-process-wrapper bg-[#E7EFE8] section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Workflow
                        </span>
                    </div>
                </div>

                <h3 className="text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-normal">
                    Development{" "}
                    <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">
                        Process
                    </span>
                </h3>

                <p className="text-[#707070] font-normal text-[16px] leading-[130%] text-center max-w-2xl mx-auto mb-16 mt-5">
                    From concept to launch, explore the clear process that bring websites to life with precision and purpose.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workflowSteps.map((step) => (
                        <div
                            key={step.id}
                            className="
                                group relative rounded-sm p-3 min-h-[280px]
                                bg-[#FAF8F3] text-[#2B2B2B]
                                border-b-[5px] border-[#4B7057]
                                shadow-md transition-all duration-300
                                hover:bg-gradient-to-br hover:from-[#3F6B57] hover:to-[#2F5443]
                                hover:text-white
                            "
                        >
                            {/* Number */}
                            <span
                                className="
                                    absolute top-5 right-6 font-poppins font-semibold text-[70px]
                                    text-[#DEE9E1] group-hover:text-[#F4BE00]
                                "
                                style={{ WebkitTextStroke: "1px #466E59" }}
                            >
                                {step.id}
                            </span>

                            {/* Icon */}
                            <div className="mb-6 mt-20">
                                <img
                                    src={withImageBase(step.icon)}
                                    alt={step.title}
                                    width={36}
                                    height={36}
                                    className="transition group-hover:invert"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-poppins font-semibold text-[18px] leading-[1.23] mb-3 text-[#4C4C4C] group-hover:text-white">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="font-poppins font-normal text-[12px] leading-[1.3] text-[#575757DB] group-hover:text-[#E6EFEA]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentWorkflow;
