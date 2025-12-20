export interface Blog {
  blog_id: number;
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
  blog: Blog;
  blog_title: string;
  blog_description: string;
  status: number;
  msg: string;
  data: Blog;
}
