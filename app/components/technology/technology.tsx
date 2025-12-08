import SectionWithSlider from "../common/SectionWithSlider/SectionWithSlider";

export default function Technology() {
  return (
    <div className="technology-wrapper">

      <SectionWithSlider
        heading="Service"
        title="Technology"
        highlight="Solutions"
        description="Turning Ideas into Intelligent Digital Platforms.Responsive websites, mobile apps, enterprise systems, and full tech ecosystems designed to future-proof brands."
        tags={["E-commerce Development", "Website Development", "PMIS Solutions", "App Development"]}
        buttonText="Explore Tech Solutions"
        images={[
          "/assests/img/home/technology-img-1.jpg",
          "/assests/img/home/technology-img-2.jpg",
          "/assests/img/home/technology-img-3.jpg",
          "/assests/img/home/technology-img-4.jpg",

        ]}

        reverse={false}   // slider left text right
      />
    </div>
  );
}
