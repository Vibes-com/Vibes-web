import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Digital() {
    return (
        <div className="digital-wrapper">

            <SectionWithSlider
                heading="Service"
                title="Digital"
                highlight=" Marketing"
                description="Strategy, Creativity & Data - Working as One.Performance-driven campaigns, content, SEO, automation, and analytics crafted to create seamless digital pathways for measurable growth."
                tags={["SEO", "Social Media Management (B2B & B2C)", "Content Upliftment", "Performance Marketing"]}
                buttonText="Discover More"
                images={[
                    "/assests/img/home/digital-img-1.jpg",
                    "/assests/img/home/digital-img-2.jpg",
                    "/assests/img/home/digital-img-3.jpg",
                    "/assests/img/home/digital-img-4.jpg",
                ]}

                reverse={false}
            />
        </div>
    );
}
