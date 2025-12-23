"use client";

import SectionWithSlider from "../common/SectionWithSlider/SectionWithSlider";
import { useGetTechnologyServicesQuery } from "@/app/redux/api/technologyApi";

export default function Technology() {
  const { data, isLoading, isError } = useGetTechnologyServicesQuery();

  if (isLoading) return null; // or loader
  if (isError || !data?.service_list?.length) return null;

  const service = data.service_list[0];

  return (
    <div className="technology-wrapper">
      <SectionWithSlider
        heading="Service"
        title={service.name}
        highlight={service.sub_name}
        description={service.description}
        tags={service.tags.split(",").map((tag) => tag.trim())}
        buttonText="Explore Tech Solutions"
        images={service.image_gallery.map((img) => img.url)}
        reverse={false}
      />
    </div>
  );
}
