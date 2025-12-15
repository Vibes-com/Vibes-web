import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { caseStudyApiUrls } from "@/app/constants/apiUrls";
import { CaseStudyResponse } from "@/types/casestudy.types";


export const caseStudyApi = createApi({
  reducerPath: "caseStudyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllCaseStudies: builder.query<CaseStudyResponse, void>({
      query: () => ({
        url: caseStudyApiUrls.getAllCasestudy,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCaseStudiesQuery } = caseStudyApi;
