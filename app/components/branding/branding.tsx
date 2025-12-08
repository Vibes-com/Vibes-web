import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Branding() {
    return (
        <div className="branding-wrapper">
            <SectionWithSlider
                heading="Service"
                title="Branding"
                highlight="& Strategy"
                description="Identity, Story, and Experience- Reimagined.Distinctive brand identities, narratives, and visual systems built to spark connection and inspire loyalty. Evolving brands into powerful experiences that stand apart with purpose."
                tags={[
                    "Brand Upliftment",
                    "Corporate Branding",
                    "Brand Communication & Strategy",
                ]}
                buttonText="Build Your Brand"
                images={[
                    "/assests/img/home/branding-img-1.jpg",
                    "/assests/img/home/branding-img-2.jpg",
                ]}
                reverse={true}
            />
        </div>
    );
}