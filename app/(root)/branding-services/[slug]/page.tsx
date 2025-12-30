import BrandCommunicationStrategy from "@/app/components/brandings/brand-communication-and-strategy/BrandCommunicationStrategy";
import BrandUpliftment from "@/app/components/brandings/brand-upliftment/BrandUpliftment";
import CorporateBranding from "@/app/components/brandings/corporate-branding/CorporateBranding";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (slug === "corporate-branding")
    return (
      <div>
       <CorporateBranding/>
      </div>
    );

  if (slug === "brand-upliftment")
    return (
      <div>
        <BrandUpliftment/>
      </div>
    );

  if (slug === "brand-communication-and-strategy") 
    return (
  <div>
    <BrandCommunicationStrategy/>
  </div>
  );
};

export default page;
