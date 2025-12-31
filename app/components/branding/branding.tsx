"use client";

import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";
import { useGetBrandingServicesQuery } from "@/app/redux/api/brandingApi";

export default function Branding() {
  const { data, isLoading, isError } = useGetBrandingServicesQuery();

  // Loading state
  if (isLoading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading branding services...
      </p>
    );
  }

  // Error / Empty state
  if (isError || !data?.service_list?.length) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load branding services
      </p>
    );
  }

  // API returns array → Branding page uses first item
  const service = data.service_list[0];

  return (
    <div className="branding-wrapper">
      <SectionWithSlider
        heading="Service"
        title={service.name}
        highlight={` ${service.sub_name}`}
        description={service.description}
        tags={service.tags.split(",").map((tag) => tag.trim())}
        buttonText="Build Your Brand"
        images={service.image_gallery.map((img) => img.url)}
        reverse={true}
        btnlink="/branding-services"
      />
    </div>
  );
}
