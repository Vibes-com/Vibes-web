export interface BrandingImage {
  url: string;
  order: number;
}

export interface BrandingService {
  name: string;
  sub_name: string;
  slug: string;
  title: string;
  description: string;
  tags: string; 
  image_gallery: BrandingImage[];
}

export interface BrandingServiceResponse {
  status: "success" | "error";
  service_list: BrandingService[];
}
