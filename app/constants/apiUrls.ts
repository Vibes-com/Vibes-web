export const bannerApiUrls = {
  getAllBanners: "/banners",

};

export const blogApiUrls = {
  getAllBlogs: "/blogs?limit=all",
  getSingleBlog: "/single-blog-detail"
};

export const caseStudyApiUrls = {
  getAllCasestudy: "/casestudy",
    getSingleCasestudy: "/single-casestudy/"
};

export const teamMembersApiUrls = {
  getAllTeamMembers: "/our-team",

};

export const contactApiUrls = {
  submitContact: "/contact-enquiry",
};

export const galleryApiUrls = {
  getGallery: "/image-gallery",
};

export const technologyApiUrls = {
  getTechnologyServices: "/services/technology",
};

export const digitalApiUrls = {
  getDigitalServices: "/services/digital",
};

export const brandingApiUrls = {
  getBrandingServices: "/services/branding",
};


export const careerApiUrls = {
  getAllJobs: (jobid: number) => `/getJob?job_type=${jobid}`,
  applyToJob: "/jobApply",
};
