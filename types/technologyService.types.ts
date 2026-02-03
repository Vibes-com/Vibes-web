export interface TechnologyImage {
  alt: string;
  url: string;
  order: number;
}

export interface TechnologyService {
  name: string;
  sub_name: string;
  slug: string;
  title: string;
  description: string;
  tags: string; // comma separated
  image_gallery: TechnologyImage[];
}

export interface TechnologyServiceResponse {
  status: string;
  service_list: TechnologyService[];
}
