// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOG_PREFIX = "/digital-insights-blogs";
const CASE_PREFIX = "/case-studies";

/**
 * Slugs that existed at ROOT before migration
 */
const BLOG_SLUGS = new Set([
    "online-tools-that-can-boost-your-marketing-like-never-before",
    "5-mistakes-killing-your-business-online-and-how-to-fix-them-before-its-too-late",
    "digital-marketing-agency-for-dentists",
    "digital-marketing-for-real-estate",
    "interior-design-marketing-agency",
    "how-can-smart-digital-marketing-strategy-maximize-webinar-attendance-and-engagement",
    "digital-marketing-wellnesspreneurs-success",
    "women-listed-bazaar-gift-edit-digital-event-strategy",
    "together-for-tomorrow-encapsulating-digital-marketing-technology-branding",
    "from-ideas-to-action-how-vibes-creates-eco-smart-branding-and-marketing",
    "from-vision-to-impact-vibes-powers-brands-with-creativity-and-tech",
    "what-is-keyword-mapping",
    "what-is-seo-and-why-does-your-business-need-it-in-2025",
    "tijara-fort-business-retreat-to-prepare-a-growth-plan-for-2025-26",
    "how-to-identify-the-best-social-media-platforms-for-your-brand",
    "exploring-the-role-of-chatbots-in-customer-engagement",
    "14-years-growth-journey-digital-marketing",
    "ai-role-in-seo-digital-marketing-trends",
    "optimizing-website-performance-for-googles-ranking-algorithm",
    "top-branding-agency-delhi-ncr",
    "web-design-trends-for-stunning-site",
    "ecommerce-digital-marketing-combo",
    "e-commerce-marketing-strategies-in-noida",
    "seo-agency-in-delhi-ncr",
    "scope-of-retail-industry",
    "online-marketing-delhi-ncr-india",
    "companies-of-now-and-future-ahead-trends-2024",
    "digital-marketing-for-bag-manufacturers",
    "the-power-of-branding-agency-in-delhi-ncr-startups-to-large-businesses",
    "the-magic-of-branding-agency-in-delhi-ncr",
    "digital-marketing-agency-on-moon",
    "difference-between-threads-and-twitter-analysis",
    "ecommerce-tips-to-improve-business-sales-online",
    "content-marketing-agency-noida-delhi-ncr",
    "how-online-marketing-strategies-helps-businesses-adapt-and-explore-new-opportunities",
    "the-future-of-advertising-agencies-trends-and-predictions",
    "impact-of-voice-search-on-digital-marketing-in-the-future",
    "boosting-electric-mobility-in-india:-utilizing-digital-channels-to-promote-electric-vehicles",
    "digital-marketing-needs-a-mandate",
    "best-digital-marketing-agency-in-delhi-ncr-india",
    "how-to-build-your-brand-through-digital-marketing",
    "how-digital-marketing-is-the-driving-factor-for-your-restaurants",
    "nail-your-targets-with-digital-marketing-solutions",
    "say-hello-to-google-ads-goodbye-google-adwords",
    "new-google-algorithm-on-1st-august-has-affected-the-healthcare-industry",
    "reach-your-audience-with-the-strong-combination-of-seo-and-smo",
    "vibes-mantra-since-8-years-that-kept-us-going-and-growing",
    "why-do-companies-advertise-their-products",
    "how-to-choose-the-best-local-seo-company-in-2022",
    "how-advertising-companies-work",
    "why-should-you-be-hired-for-this-internship-digital-marketing",
    "why-should-we-hire-you-for-digital-marketing-internship",
    "how-to-evaluate-a-digital-marketing-agency-in-2022",
    "marketing-strategy-in-the-digital-age",
    "the-indian-e-commerce-bubble",
    "brexit-impact-on-the-146-billion-indian-it-industry",
    "5-digital-marketing-tips-to-beat-corona-digitally",
    "digital-marketing-strategies-for-businesses-during-the-corona-crisis",
    "5-tips-to-align-your-hotels-marketing-strategy-with-covid-19-pandemic",
    "yoga-in-the-digital-media",
    "8-google-maps-stats-every-business-owner-and-marketer-should-know-in-2021",
    "facebook-launches-new-dynamic-ads-for-video-streaming-platforms",
    "how-video-is-influencing-consumer-decision-making-in-2021",
    "5-reasons-of-using-social-media-for-your-business",
    "digital-marketing-for-dentistry",
    "marketing-lessons-for-your-start-up",
    "blog-digital-marketing-for-hearing-aids-industry-2",
    "how-can-seo-help-your-business-grow",
    "how-india-has-become-digitally-independent",
    "is-digital-marketing-important-to-grow-your-business",
    "how-to-grow-awareness-of-your-business-with-digital-marketing",
    "the-best-practices-to-plan-your-digital-marketing-budget",
    "why-is-it-important-to-update-your-website",
    "importance-of-digital-marketing-for-college-enrolment",
    "improve-lead-generation-through-social-media",
    "how-can-online-presence-client-reviews-boost-your-business-digitally",
    "tips-to-improve-their-video-production-for-page-owners",
    "evolution-of-digital-marketing-over-the-years",
    "ask-yourself-before-you-publish",
    "digital-marketing-services-for-dental-clinic-business-success",
    "best-online-reputation-management-for-hotels",
    "impact-of-digital-marketing-in-hotel-industry",
    "achieve-your-marketing-goals",
    "why-your-business-needs-a-blog",
    "how-to-find-the-right-seo-company-in-2022",
    "what-benefit-digital-marketing-agency-can-bring-to-any-business",
    "which-is-the-best-branding-agency-in-2022",
    "what-is-the-role-of-a-top-advertising-agency-for-your-business",
    "trustworthy-digital-marketing-agency-in-india"
]);

const CASE_STUDY_SLUGS = new Set([
    "buzaria",
    "smip",
    "tomorrows-india",
    "aes-india",
    "kaivee",
    "my-offiz",
    "envision",
    "women-listed-bazaar",
    "the-solluna",
    "widex",
    "aads-creative",
    "central-vista",
    "ligo-bags",
    "amrut",
    "dubai-innovation",
    "slow-bazaar",
    "brand-feedback-exchange",
    "lumenis",
    "maxim-alert",
    "ikaroa",
    "interio-haven",
    "medrev",
    "mofiso",
    "ligo-group",
    "mads",
    "city-dental-centre",
    "retas",
    "usof"
]);

export function proxy(request: NextRequest) {
   const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  /* ✅ STEP A: WWW → NON-WWW REDIRECT */
  if (hostname.startsWith("www.")) {
    const nonWwwHost = hostname.replace(/^www\./, "");
    url.hostname = nonWwwHost;

    return NextResponse.redirect(url, 301);
  }

  const pathname = url.pathname;

  /* ignore system & static files */
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  /* already correct routes */
  if (
    pathname.startsWith(BLOG_PREFIX) ||
    pathname.startsWith(CASE_PREFIX)
  ) {
    return NextResponse.next();
  }

  const slug = pathname.slice(1);

  /* blog redirects */
  if (BLOG_SLUGS.has(slug)) {
    return NextResponse.redirect(
      new URL(`${BLOG_PREFIX}/${slug}`, request.url),
      301
    );
  }

  /* case study redirects */
  if (CASE_STUDY_SLUGS.has(slug)) {
    return NextResponse.redirect(
      new URL(`${CASE_PREFIX}/${slug}`, request.url),
      301
    );
  }

  return NextResponse.next();
  // const { pathname } = request.nextUrl;

  



 
}
