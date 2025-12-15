export interface CaseStudy {
  client_name: string;
  client_slug: string;
  banner_image: string;
  banner_heading: string;
  category: string;
  case_status: string;
  show_order: string;
  short_desc: string;
}

export interface CaseStudyResponse {
  statusCode: number;
  success: boolean;
  data: CaseStudy[];
}