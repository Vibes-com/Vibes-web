import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseQuery = fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//     credentials: "include",
// });

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    headers.set("VIBES-API-KEY",`${process.env.NEXT_PUBLIC_API_TOKEN}`);
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

