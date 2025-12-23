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
export interface SingleCaseStudy extends BaseCaseStudy {
  description: string;
  banner_image?: string;
}

/* ------------------ API RESPONSES ------------------ */
export interface CaseStudyResponse {
  status: number;
  msg: string;
  data: CaseStudy[];
}

export interface SingleCaseStudyResponse {
  status: number;
  msg: string;
  data: SingleCaseStudy;
}
