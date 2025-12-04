import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Branding() {
    return (
        <div className="branding-wrapper">
            <SectionWithSlider
                title="Branding"
                highlight="& Strategy"
                description="Identity, Story, and Experience- Reimagined.Distinctive brand identities, narratives, and visual systems built to spark connection and inspire loyalty. Evolving brands into powerful experiences that stand apart with purpose.
"
                tags={[
                    "Brand Upliftment",
                    "Brand Communication",
                    "Brand Positioning",
                    "Brand Management",
                ]}
                buttonText="Build Your Brand"
                images={[
                    "/assests/img/home/slider-img-2.png",
                    "/assests/img/home/slider-img-3.png",
                    "/assests/img/home/slider-img-1.png",
                ]}
                reverse={false}
            />
        </div>
    );
}