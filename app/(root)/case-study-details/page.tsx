import CaseStudyDetailsAbout from '@/app/components/case-study-details/case-study-details-about/CaseStudyDetailsAbout'
import CaseStudyDetailsBranding from '@/app/components/case-study-details/case-study-details-branding/CaseStudyDetailsBranding'
import CaseStudyDetailsBrief from '@/app/components/case-study-details/case-study-details-brief/CaseStudyDetailsBrief'
import CaseStudyDetailsHero from '@/app/components/case-study-details/case-study-details-hero/CaseStudyDetailsHero'
import CaseStudyDetailsImpact from '@/app/components/case-study-details/case-study-details-impact/CaseStudyDetailsImpact'
import React from 'react'

const page = () => {
    return (
        <div>
            <CaseStudyDetailsHero
            title="Future-Ready"
            highlightTitle="Digital Solutions"
            description="Vibes builds secure scalable websites with strong UI/UX and reliable backend systems for seamless user experiences"
            />
           <CaseStudyDetailsAbout
            title="The Client"
            imageSrc="/assests/img/case-study-details/case-study-about-left-img.jpg"
            imageAlt="Tomorrow’s India"
            points={[
                "Tomorrow’s India is India’s finest multi-segmented brand coverage platform.",
                "Solves the problem of scattered information by unifying diverse industries into one ecosystem.",
                "Covers automobiles, culture, events, arts, entertainment, technology, beauty, wellness & lifestyle.",
                "Acts as a bridge between consumers and businesses.",
                "Curates dispersed updates into insightful, streamlined content.",
                "Positions itself as the go-to destination for what’s new and transformative.",
            ]}
            />

            <CaseStudyDetailsBrief
            leftBlock={{
                badgeText: "BRIEF",
                title: "Brief",
                dotColor: "#466E59",
                points: [
                "Tomorrow’s India is India’s finest multi-segmented brand coverage platform.",
                "Solves the problem of scattered information by unifying diverse industries.",
                "Covers automobiles, culture, events, arts, entertainment, technology, beauty & lifestyle.",
                "Acts as a bridge between consumers and businesses.",
                "Curates dispersed updates into streamlined content.",
                "Go-to destination for what’s new and transformative.",
                ],
            }}
            rightBlock={{
                badgeText: "OUR APPROACH",
                title: "Our Approach",
                dotColor: "#2F6F4E",
                textColor: "#6B6B6B",
                points: [
                "In-depth research to understand user intent.",
                "Scalable design systems for long-term growth.",
                "Agile development with rapid iterations.",
                "Performance-focused architecture.",
                "SEO and analytics driven decisions.",
                "Continuous optimization post-launch.",
                ],
            }}
            />

           <CaseStudyDetailsImpact
            titleLines={["What We", "did for"]}
            highlightText="Tomorrow’s India"
            impactList={[
                "Branding",
                "Campaign Strategy",
                "Meta Ads",
                "Google Ads",
                "YouTube Ads",
            ]}
            />

           <CaseStudyDetailsBranding
            sections={[
                {
                title: "Branding",
                images: [
                    "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                    "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                    "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                ],
                slidesPerView: 1,
                paginationId: "case-study-pagination-1",
                autoplay: true,
                },
                {
                title: "Creative Display",
                images: [
                    "/assests/img/case-study-details/case-study-bottom-img-1.jpg",
                    "/assests/img/case-study-details/case-study-bottom-img-2.jpg",
                    "/assests/img/case-study-details/case-study-bottom-img-3.jpg",
                    "/assests/img/case-study-details/case-study-bottom-img-4.jpg",
                    "/assests/img/case-study-details/case-study-bottom-img-3.jpg",
                    "/assests/img/case-study-details/case-study-bottom-img-4.jpg",
                ],
                slidesPerView: 4,
                
                paginationId: "case-study-pagination-2",
                },
            ]}
            />


        </div>
    )
}

export default page