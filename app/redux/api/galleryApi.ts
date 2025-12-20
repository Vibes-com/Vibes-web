// redux/api/galleryApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { galleryApiUrls } from "@/app/constants/apiUrls";
import { GalleryResponse } from "@/types/gallery.types";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery,
  endpoints: (builder) => ({
    getGallery: builder.query<GalleryResponse, void>({
      query: () => ({
        url: galleryApiUrls.getGallery,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
