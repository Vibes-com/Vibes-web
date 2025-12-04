import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Digital() {
    return (
        <div className="digital-wrapper">

            <SectionWithSlider
                title="Digital"
                highlight=" Marketing"
                description="Strategy, Creativity & Data - Working as One.Performance-driven campaigns, content, SEO, automation, and analytics crafted to create seamless digital pathways for measurable growth.

"
                tags={["UI/UX Design", "Website Development", "App Design"]}
                buttonText="Explore Tech Solutions"
                images={[
                    "/assests/img/home/slider-img-3.png",
                    "/assests/img/home/slider-img-2.png",
                    "/assests/img/home/slider-img-1.png",
                ]}

                reverse={true}
            />
        </div>
    );
}
