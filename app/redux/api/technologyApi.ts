import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { technologyApiUrls } from "@/app/constants/apiUrls";
import { TechnologyServiceResponse } from "@/types/technologyService.types";

export const technologyApi = createApi({
  reducerPath: "technologyApi",
  baseQuery,
  endpoints: (builder) => ({
    getTechnologyServices: builder.query<TechnologyServiceResponse, void>({
      query: () => ({
        url: technologyApiUrls.getTechnologyServices,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTechnologyServicesQuery } = technologyApi;
