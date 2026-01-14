import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vibes-work.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/(from-vision-to-impact-vibes-powers-brands-with-creativity-and-tech|best-ui-ux-design-agency-india|web-portal-development-services|crm-software-for-sales-and-business|digital-transformation-company-india)',
        destination: '/software-technology-services',
        permanent: true,
      },
      {
        source: '/(from-ideas-to-action-how-vibes-creates-eco-smart-branding-and-marketing|brand-feedback-exchange|our-branding-works|brand-positioning|brand-management|brand-marketing-company-india|brand-guidelines-agency-india|logo-design)',
        destination: '/branding-services',
        permanent: true,
      },
      {
        source: '/(digital-marketing-strategy-for-business|together-for-tomorrow-encapsulating-digital-marketing-technology-branding|business-consultation-service-agency-india|linkedin-marketing-agency-india|content-marketing-agency-india|solutions|future-digital-strategies-for-companies|/digital-marketing-strategy-for-business)',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/(technical-hiring|digital-hiring|brand-hiring)',
        destination: '/work-with-digital-agency',
        permanent: true,
      },
      {
        source: '/(social-media-marketing-agency-delhi-ncr)',
        destination: '/digital-marketing-services/social-media-marketing-agency',
        permanent: true,
      },
      {
        source: '/(seo-agency-noida)',
        destination: '/digital-marketing-services/search-optimization-services',
        permanent: true,
      },
      {
        source: '/(lead-generation-company-delhi-ncr)',
        destination: '/digital-marketing-services/performance-marketing-agency',
        permanent: true,
      },
      {
        source: '/(website-development-company-noida)',
        destination: '/software-technology-services/website-development-company',
        permanent: true,
      },
      {
        source: '/(ecommerce-development-company-in-noida|ecommerce-marketing-company-in-noida)',
        destination: '/software-technology-services/ecommerce-development-company',
        permanent: true,
      },
      {
        source: '/(mobile-app-company-delhi-ncr)',
        destination: '/software-technology-services/mobile-app-development-company',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;