import BrandCommunicationStrategy from "@/app/components/brandings/brand-communication-and-strategy/BrandCommunicationStrategy";
import BrandUpliftment from "@/app/components/brandings/brand-upliftment/BrandUpliftment";
import CorporateBranding from "@/app/components/brandings/corporate-branding/CorporateBranding";
import CampaignManagement from "@/app/components/digitalmarketing/campaign-management/CampaignManagement";
import PerformanceMarketing from "@/app/components/digitalmarketing/performance-marketing/PerformanceMarketing";
import SearchEngineOptimization from "@/app/components/digitalmarketing/search-engine-optimization/SearchEngineOptimization";
import SocialMediaManagement from "@/app/components/digitalmarketing/social-media-management/SocialMediaManagement";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (slug === "campaign-management")
    return (
      <div>
       <CampaignManagement/>
      </div>
    );

  if (slug === "social-media-management")
    return (
      <div>
        <SocialMediaManagement/>
      </div>
    );

  if (slug === "performance-marketing") 
    return (
  <div>
    <PerformanceMarketing/>
  </div>
  );
  if (slug === "search-engine-optimization") 
    return (
  <div>
    <SearchEngineOptimization/>
  </div>
  );
};

export default page;
