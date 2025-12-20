import { configureStore } from "@reduxjs/toolkit";
import { bannersApi } from "../redux/api/bannerApi";
import { blogsApi } from "../redux/api/blogApi"; 
import { caseStudyApi } from "./api/caseStudyApi";
import { teamMembersApi } from "./api/teamMembersApi";
import { contactApi } from "./api/contactApi";
import { galleryApi } from "./api/galleryApi";
// import { caseStudyApi } from "../redux/api/caseStudyApi";

export const store = configureStore({
  reducer: {
    [bannersApi.reducerPath]: bannersApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer, 
    [caseStudyApi.reducerPath]: caseStudyApi.reducer, 
    [teamMembersApi.reducerPath]: teamMembersApi.reducer, 
    [contactApi.reducerPath]: contactApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannersApi.middleware,
      blogsApi.middleware,
      caseStudyApi.middleware,
      teamMembersApi.middleware,
      contactApi.middleware,
      galleryApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
