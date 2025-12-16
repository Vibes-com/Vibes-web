import Image from "next/image";

const workflowSteps = [
    {
        id: "01",
        title: "Discovery & Planning",
        desc: "The goals, audience, and structure are defined during Discovery & Planning to create a scalable foundation for the website.",
        icon: "/assests/img/web-development/workflow-icon-1.png",
    },
    {
        id: "02",
        title: "Wireframing & Architecture",
        desc: "Wireframes and architecture are used as the blueprint to define structure and function before design begins.",
        icon: "/assests/img/web-development/workflow-icon-2.png",
    },
    {
        id: "03",
        title: "UI/UX Design",
        desc: "UI/UX design is used to create intuitive digital experiences, using clear layouts, colors, and flows to ensure smooth, efficient user interaction.",
        icon: "/assests/img/web-development/workflow-icon-3.png",
    },
    {
        id: "04",
        title: "Front-End Development",
        desc: "Front-end development is used to turn designs into responsive, interactive interfaces with HTML, CSS, JavaScript, and modern UI frameworks.",
        icon: "/assests/img/web-development/workflow-icon-1.png",
    },
    {
        id: "05",
        title: "Back-End Development",
        desc: "Server logic, databases, APIs, and security are built in the backend to support scalable and reliable applications.",
        icon: "/assests/img/web-development/workflow-icon-4.png",
    },
    {
        id: "06",
        title: "Testing",
        desc: "Website testing is conducted to verify functionality, meet requirements, and ensure performance across devices and browsers.",
        icon: "/assests/img/web-development/workflow-icon-5.png",
        active: true,
    },
    {
        id: "07",
        title: "Deployment",
        desc: "The tested product is deployed to production, configured for use, and optimized for performance and stability.",
        icon: "/assests/img/web-development/workflow-icon-6.png",
    },
    {
        id: "08",
        title: "Support & Maintenance",
        desc: "Performed to keep software secure, updated, and high-performing through continuous monitoring and improvements.",
        icon: "/assests/img/web-development/workflow-icon-7.png",
    },
];

const WebDevelopmentWorkflow = () => {
    return (
        <section className="bg-[#E7EFE8] py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workflowSteps.map((step) => (
                        <div
                            key={step.id}
                            className={`relative rounded-sm p-6 min-h-[280px] transition-all
                ${step.active
                                    ? "bg-gradient-to-br from-[#3F6B57] to-[#2F5443] text-white"
                                    : "bg-[#FAF8F3] text-[#2B2B2B] border-b-[5px] border-[#4B7057]"
                                } shadow-md`}
                        >
                            {/* Number */}
                            <span
                                className={`absolute top-5 right-6 font-poppins font-semibold text-[48px]
                  ${step.active
                                        ? "text-[#F4BE00]"
                                        : "text-transparent stroke-[1.5px] stroke-[#8FA795]"
                                    }`}
                                style={{
                                    WebkitTextStroke:
                                        step.active ? "0px" : "1.5px #8FA795",
                                }}
                            >
                                {step.id}
                            </span>

                            {/* Icon */}
                            <div className="mb-6 mt-20">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={36}
                                    height={36}
                                    className={step.active ? "invert" : ""}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className={`font-poppins font-semibold text-[18px] leading-[130%] mb-3
                  ${step.active ? "text-white" : "text-[#2B2B2B]"}`}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`font-poppins text-[14px] leading-[160%]
                  ${step.active ? "text-[#E6EFEA]" : "text-[#6B6B6B]"}`}
                            >
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
