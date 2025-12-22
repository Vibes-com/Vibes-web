import { configureStore } from "@reduxjs/toolkit";
import { bannersApi } from "../redux/api/bannerApi";
import { blogsApi } from "../redux/api/blogApi";
import { caseStudyApi } from "./api/caseStudyApi";
import { teamMembersApi } from "./api/teamMembersApi";
import { contactApi } from "./api/contactApi";
import { galleryApi } from "./api/galleryApi";
import { technologyApi } from "./api/technologyApi";
import { digitalApi } from "./api/digitalApi";
import { brandingApi } from "./api/brandingApi";
import { careerApi } from "./api/careerApi";
// import { caseStudyApi } from "../redux/api/caseStudyApi";

export const store = configureStore({
  reducer: {
    [bannersApi.reducerPath]: bannersApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [caseStudyApi.reducerPath]: caseStudyApi.reducer,
    [teamMembersApi.reducerPath]: teamMembersApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [technologyApi.reducerPath]: technologyApi.reducer,
    [digitalApi.reducerPath]: digitalApi.reducer,
    [brandingApi.reducerPath]: brandingApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannersApi.middleware,
      blogsApi.middleware,
      caseStudyApi.middleware,
      teamMembersApi.middleware,
      contactApi.middleware,
      galleryApi.middleware,
      technologyApi.middleware,
      digitalApi.middleware,
      brandingApi.middleware,
      careerApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
