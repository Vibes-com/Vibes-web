export interface DigitalImage {
  alt: string;
  url: string;
  order: number;
}

export interface DigitalService {
  name: string;
  sub_name: string;
  slug: string;
  title: string;
  description: string;
  tags: string; // comma-separated
  image_gallery: DigitalImage[];
}

export interface DigitalServiceResponse {
  status: "success" | "error";
  service_list: DigitalService[];
}
