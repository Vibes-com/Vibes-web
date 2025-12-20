"use client";
import OurBlogs from '@/app/components/blogs/blogs'
import CommonCasestudy from '@/app/components/common/CommonCasestudy/CommonCasestudy'
import MarqueeStorySection, { SlideItem } from '@/app/components/common/MarqueeStorySection/MarqueeStorySection'
import MarqueeTabsSlider from '@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider'
import DigitalMarketingDetailsHero from '@/app/components/digital-marketing-details/digital-marketing-hero/DigitalMarketingDetailsHero'
import DigitalMarketingSolutions from '@/app/components/digital-marketing-details/digital-marketing-solutions/DigitalMarketingSolutions'
import WhyChooseUs from '@/app/components/digital-marketing-details/why-choose-us/WhyChooseUs'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import { CaseStudy } from '@/types/commoncasestudy'
import { useRouter } from "next/navigation";

const slides: SlideItem[] = [
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-1.jpg" },
      { src: "/assests/img/home/brand-img-2.jpg" },
    ],
  },
  {
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    type: "images",
    images: [
      { src: "/assests/img/home/brand-img-3.jpg" },
      { src: "/assests/img/home/brand-img-4.png" },
    ],
  },
];

const cards: CaseStudy[] = [
  {
    id: 1,
    img: "/assests/img/home/interio-heaven-img.jpg",
    title: "Interio Heaven",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
  {
    id: 2,
    img: "/assests/img/home/tomarrow-india-img.jpg",
    title: "Tomorrow India",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
  {
    id: 3,
    img: "/assests/img/home/mahakumbh-img.png",
    title: "Mahakumbh",
    buttonText: "View More",
    tags: ["Branding", "Creative", "Product Design"],
  },
];

const logos = [
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
];

const tabs = [
  "healthcare",
  "education",
  "realestate",
  "entertainment",
  "government",
];

const page = () => {
  const router = useRouter();
  return (
    <div>
      <DigitalMarketingDetailsHero />
      <DigitalMarketingSolutions />
      <WhyChooseUs />
      <MarqueeStorySection
        badge="WORK SHOWCASE"
        highlightTitle="Brand Stories"
        title="in Motion"
        description="A curated showcase of visual work that shapes brand perception across channels."
        slides={slides}
        ctaText="Talk to us today"
        bgImage="/assests/img/home/brand-stories-bg.png"
      />
      <CommonCasestudy
        badgeText="CASE STUDIES"
        title="Code that Delivers"
        highlightTitle="Real Impact"
        description="Explore real technology success stories where Vibes turns complex challenges into measurable outcomes, delivering smarter, scalable digital solutions."
        buttonText="Dive Into Success Stories"
        cards={cards}
        bgColor="#dfe8dd"
      />
      <OurBlogs />
      <MarqueeTabsSlider
        badgeText="Trusted Clients"
        highlightTitle="Esteemed"
        title="Clients"
        description="A curated showcase of visual work that shapes brand perception across channels."
        logos={logos}
        tabs={tabs}
        bgColor="#466E59"
      />
      <SuccessStory
        title="Let’s Build Something Powerful"
        subtitle="Scalable digital solutions tailored for you"
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />
    </div>
  )
}

export default page