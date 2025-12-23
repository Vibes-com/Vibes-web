import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { digitalApiUrls } from "@/app/constants/apiUrls";
import { DigitalServiceResponse } from "@/types/digitalService.types";

export const digitalApi = createApi({
  reducerPath: "digitalApi",
  baseQuery,
  endpoints: (builder) => ({
    getDigitalServices: builder.query<DigitalServiceResponse, void>({
      query: () => ({
        url: digitalApiUrls.getDigitalServices,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDigitalServicesQuery } = digitalApi;
