import AppDevelopment from "@/app/components/technologies/app-development/AppDevelopment";
import EcommDevelopment from "@/app/components/technologies/ecomm-development/EcommDevelopment";
import PmisDevelopment from "@/app/components/technologies/pmis-development/PmisDevelopment";
import WebDevelopment from "@/app/components/technologies/web-development/WebDevelopment";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (slug === "web-development")
    return (
      <div>
        <WebDevelopment />
      </div>
    );

  if (slug === "app-development")
    return (
      <div>
        <AppDevelopment />
      </div>
    );

  if (slug === "ecomm-development") 
    return (
  <div>
    <EcommDevelopment/>
  </div>
  );
  if (slug === "pmis-development") 
    return (
  <p><PmisDevelopment/></p>
  );
};

export default page;
