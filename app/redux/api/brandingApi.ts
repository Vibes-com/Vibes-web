import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { brandingApiUrls } from "@/app/constants/apiUrls";
import { BrandingServiceResponse } from "@/types/brandingService.types";

export const brandingApi = createApi({
  reducerPath: "brandingApi",
  baseQuery,
  endpoints: (builder) => ({
    getBrandingServices: builder.query<BrandingServiceResponse, void>({
      query: () => ({
        url: brandingApiUrls.getBrandingServices,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBrandingServicesQuery } = brandingApi;
