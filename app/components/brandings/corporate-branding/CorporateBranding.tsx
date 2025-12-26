"use client";
import { useRouter } from "next/navigation";
import CorporateBrandingSolution from '@/app/components/branding-details/corporate-branding/corporate-branding-solution/CorporateBrandingSolution'
import CorporateHero from '@/app/components/branding-details/corporate-branding/corporate-hero/CorporateHero'
import OurBlogs from '../../blogs/blogs'
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import ImageCarousel from "../../common/ImageCarouselWorkflow/ImageCarousel";

const images = [
  { src: "/assests/img/branding-details/branding-bottom-img-1.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-2.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-3.png" },
  { src: "/assests/img/branding-details/branding-bottom-img-4.png" },
];

const CorporateBranding = () => {
  const router = useRouter();
  return (
    <div>
      <CorporateHero />
      <CorporateBrandingSolution />
       <ImageCarousel
      className="branding-workflow-wrapper"
      images={images}
      heading={{
        badge: "Why Choose Us",
        title: (
          <>
            A Smarter Way to <br />
            <span className="highlight font-semibold">Build Digital Brands</span>
          </>
        ),
        description:
          "Vibes applies a structured, insight-led digital marketing framework that aligns strategy, creativity, and performance.",
      }}
    />
      <OurBlogs />
      <SuccessStory
        title="Build a Brand That Commands Trust"
        subtitle="Branding designed to deliver clarity, consistency, and credibility across every business touchpoint."
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />
    </div>
  )
}

export default CorporateBranding