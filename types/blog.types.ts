export interface Blog {
  blog_thumb_image_alt: string;
  created_on: string;
  blog_id: number;
  banner_img:string;
  blog_title: string;
  blog_slug: string;
  blog_description: string;
  blog_small_description: string;
  blog_thumb_image: string;
  blog_service: string;
}

export interface BlogResponse {
  success: boolean;
  blog_list: Blog[];
}

export interface SingleBlogResponse {
  success: boolean;
  banner_img:string;
  blog: Blog;
  blog_title: string;
  blog_description: string;
  status: number;
  msg: string;
  data: Blog;
  blog_thumb_image_alt?: string;
}