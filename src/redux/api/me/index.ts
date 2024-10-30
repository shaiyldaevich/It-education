import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<Me.GetMeResponse, Me.GetMeRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
  }),
});
export const { useGetMeQuery } = api;
