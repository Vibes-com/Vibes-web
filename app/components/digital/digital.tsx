"use client";

import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";
import { useGetDigitalServicesQuery } from "@/app/redux/api/digitalApi";

export default function Digital() {
  const { data, isLoading, isError } = useGetDigitalServicesQuery();

  // States
  if (isLoading)
    return (
      <p className="text-center py-10 text-gray-500">
        Loading digital services...
      </p>
    );

  if (isError || !data?.service_list?.length)
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load digital services
      </p>
    );

  const service = data.service_list[0];

  return (
    <div className="digital-wrapper">
      <SectionWithSlider
        heading="Service"
        title={service.name}
        highlight={` ${service.sub_name}`}
        description={service.description}
        tags={service.tags.split(",").map((tag) => tag.trim())}
        buttonText="Discover More"
        images={service.image_gallery.map((img) => img.url)}
        reverse={false}
        btnlink="/digital-marketing"
      />
    </div>
  );
}
