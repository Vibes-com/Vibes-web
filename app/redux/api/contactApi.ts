import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { contactApiUrls } from "@/app/constants/apiUrls";
import { ContactFormPayload, ContactFormResponse } from "@/types/contact.types";


/* =======================
   API Slice
======================= */

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery,
  endpoints: (builder) => ({submitContactForm: builder.mutation<ContactFormResponse, ContactFormPayload>({
      query: (body) => ({
        url: contactApiUrls.submitContact,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactApi;
