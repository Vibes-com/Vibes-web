import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { teamMembersApiUrls } from "@/app/constants/apiUrls";
import { TeamResponse } from "@/types/teammembers.types";


export const teamMembersApi = createApi({
  reducerPath: "teamApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllTeamMembers: builder.query<TeamResponse, void>({
      query: () => ({
        url: teamMembersApiUrls.getAllTeamMembers,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTeamMembersQuery } = teamMembersApi;
