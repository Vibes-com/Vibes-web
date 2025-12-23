import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { blogApiUrls } from "@/app/constants/apiUrls";
import { SingleBlogResponse, BlogResponse } from "@/types/blog.types";

export const blogsApi = createApi({
  reducerPath: "blogApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllBlogs: builder.query<BlogResponse, void>({
      query: () => ({
        url: blogApiUrls.getAllBlogs,
        method: "GET",
      }),
    }),

    
    // ✅ SINGLE BLOG BY SLUG
    getSingleBlog: builder.query<SingleBlogResponse, string>({
      query: (slug) => ({
        url: `${blogApiUrls.getSingleBlog}/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
} = blogsApi;
