/* ------------------ COMMON BASE TYPE ------------------ */
export interface BaseCaseStudy {
  id: string;
  client_name: string;
  client_slug: string;
  slug: string; 
  thumbnail: string;
  tags?: string;
  case_status?: string;
  show_order?: string;
}

/* ------------------ LISTING (GRID / SLIDER) ------------------ */
export interface CaseStudy extends BaseCaseStudy {
  short_desc?: string;
  banner_heading?: string;
}

/* ------------------ SINGLE CASE STUDY ------------------ */
// export interface SingleCaseStudy extends BaseCaseStudy {
//   description: string;
//   banner_image?: string;
// }

/* ------------------ API RESPONSES ------------------ */
export interface CaseStudyResponse {
  status: number;
  msg: string;
  data: CaseStudy[];
}

export interface SingleCaseStudyResponse {
  status: number;
  msg: string;
  // align: string;
  data: SingleCaseStudy;
}

export interface SingleCaseStudy {
  case_id: string;
  client_name: string;
  client_slug: string;
  
  banner_heading: string;
  banner_image?: string;
  
  left_side_page_image: string;

  related_project_image: string;
  related_project_image_two: string;

  crm_images: string;

  banner_middle_imgage: string[];
  banner_middle_imgage_website: string[];

  category: string;

  brief: string;
  the_client: string;
  our_approach: string;

  digital_marketing: string;
  digital_strategy: string;
  digital_leadgeneration: string;
  digital_customer_relation: string;
  digital_social_media: string;

  related_project_name: string;
  related_project_name_two: string;

  page_title: string;
  page_description: string;

  short_desc: string;
  show_order: string;
  case_status: string;

  tags: string;

  creative_display: {
    social_id: string;
    project_name: string;
    social_post: string;
    project_type: string;
  }[];
}

