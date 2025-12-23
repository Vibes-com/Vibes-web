import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./baseQuery"
import { careerApiUrls } from "@/app/constants/apiUrls";
import { JobListResponse } from "@/types/career.types";


export const careerApi = createApi({
    reducerPath: "careerApi",
    baseQuery,
    tagTypes: ["careerApi"],
    endpoints: (builder) => ({
        // get all jobs from api
        getAllJobs: builder.query<JobListResponse, number>({
            query: (jobid) => ({
                url: careerApiUrls.getAllJobs(jobid)
            })
        }),
        //apply to job mutation
        applyToJob: builder.mutation<any, any>({
            query: (body) => ({
                url: careerApiUrls.applyToJob,
                method: "POST",
                body,
            }),
        })
    })
})

export const { useGetAllJobsQuery, useApplyToJobMutation } = careerApi