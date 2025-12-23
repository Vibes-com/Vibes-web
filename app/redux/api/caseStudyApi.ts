// redux/api/caseStudyApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { caseStudyApiUrls } from "@/app/constants/apiUrls";
import {
  CaseStudyResponse,
  SingleCaseStudyResponse,
} from "@/types/casestudy.types";

export const caseStudyApi = createApi({
  reducerPath: "caseStudyApi",
  baseQuery,
  endpoints: (builder) => ({
    // 🔹 ALL CASE STUDIES
    getAllCaseStudies: builder.query<CaseStudyResponse, void>({
      query: () => ({
        url: caseStudyApiUrls.getAllCasestudy,
        method: "GET",
      }),
    }),

    // 🔹 SINGLE CASE STUDY (BY SLUG)
    getSingleCaseStudy: builder.query<SingleCaseStudyResponse, string>({
      query: (slug) => ({
        url: `${caseStudyApiUrls.getSingleCasestudy}/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCaseStudiesQuery,
  useGetSingleCaseStudyQuery,
} = caseStudyApi;
