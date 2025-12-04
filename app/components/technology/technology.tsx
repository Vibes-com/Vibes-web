import SectionWithSlider from "../common/SectionWithSlider/SectionWithSlider";

export default function Technology() {
  return (
    
    <SectionWithSlider
      title="Technology"
      highlight="Solutions"
      description="Turning Ideas into Intelligent Digital Platforms.Responsive websites, mobile apps, enterprise systems, and full tech ecosystems designed to future-proof brands."
      tags={["UI/UX Design", "Website Development", "PMIS Solutions", "App Design"]}
      buttonText="Explore Tech Solutions"
      images={[
        "/assests/img/home/slider-img-1.png",
        "/assests/img/home/slider-img-2.png",
        "/assests/img/home/slider-img-3.png",
      ]}
      bgColor="bg-blue-600"
      reverse={false}   // slider left text right
    />
  );
}
