import { bannerApiUrls } from "@/app/constants/apiUrls";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import {BannerResponse} from "../../../types/banner.types"


export const bannersApi = createApi({
    reducerPath: "bannerApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllBanners: builder.query<BannerResponse, void>({
            query: () => bannerApiUrls.getAllBanners,
        }),
    }),
});

export const { useGetAllBannersQuery } = bannersApi;
