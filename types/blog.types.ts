export interface Blog {
  id: string;
  blog_title: string;
  slug: string;
  blog_main_image: string;
  short_description: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
   blog_service: string;
}


export interface BlogResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: Blog[];
  blog_list: Blog[];
}