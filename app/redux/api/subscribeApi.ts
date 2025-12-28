import { subscribeApiUrls } from "@/app/constants/apiUrls";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

/* ---------- TYPES ---------- */

interface SubscribeRequest {
  email: string;
}

interface SubscribeResponse {
  success: boolean;
  message: string;
  subscriber_id?: number; // optional (only on success)
}

/* ---------- API ---------- */

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery,
  endpoints: (builder) => ({
    subscribeNow: builder.mutation<SubscribeResponse, SubscribeRequest>({
      query: ({ email }) => {
        const formData = new FormData();
        formData.append("email", email);

        return {
          url: subscribeApiUrls.subscribeNow,
          method: "POST",
          body: formData, // ✅ FormData (IMPORTANT)
        };
      },
    }),
  }),
});

export const { useSubscribeNowMutation } = subscribeApi;
