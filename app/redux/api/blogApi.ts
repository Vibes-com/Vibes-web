import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { blogApiUrls } from "@/app/constants/apiUrls";
import { BlogResponse } from "@/types/blog.types";


export const blogsApi = createApi({
  reducerPath: "blogApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllBlogs: builder.query<BlogResponse, void>({
      query: () => ({
        url: blogApiUrls.getAllBlogs,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogsApi;
