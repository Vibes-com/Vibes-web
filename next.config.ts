import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  // Add the redirects function here
  async redirects() {
    return [
      {
        source: '/(from-vision-to-impact-vibes-powers-brands-with-creativity-and-tech|best-ui-ux-design-agency-india|web-portal-development-services|crm-software-for-sales-and-business|website-development-company-noida|digital-transformation-company-india)',
        destination: '/technology-services',
        permanent: true, // 301 redirect
      },
      {
        source: '/(from-ideas-to-action-how-vibes-creates-eco-smart-branding-and-marketing|brand-feedback-exchange|our-branding-works|brand-positioning|brand-management|brand-marketing-company-india|brand-guidelines-agency-india|logo-design)',
        destination: '/branding-services',
        permanent: true,// 301 redirect
      },
      {
        source: '/(digital-marketing-strategy-for-business|together-for-tomorrow-encapsulating-digital-marketing-technology-branding|ecommerce-marketing-company-in-noida|business-consultation-service-agency-india|linkedin-marketing-agency-india|lead-generation-company-delhi-ncr|content-marketing-agency-india|solutions|future-digital-strategies-for-companies)',
        destination: '/digital-marketing-services',
        permanent: true,// 301 redirect
      },
      {
        source: '/(technical-hiring|digital-hiring|brand-hiring)',
        destination: '/work-with-digital-agency',
        permanent: true,// 301 redirect
      },
      {
        source: '/:slug(buzaria|retas|medrev|usof|ligo-group|aads-creative|ligo-bags|mofiso|mads|tomorrows-india|interio-haven|maxim-alert|kaivee|central-vista|smip|aes-india|city-dental-centre|the-solluna|women-listed-bazaar|widex|dubai-innovation|my-offiz|envision|amrut|slow-bazaar|lumenis|ikaroa)',
        destination: '/case-studies/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;