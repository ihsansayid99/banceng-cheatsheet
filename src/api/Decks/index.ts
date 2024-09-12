import { createApi } from "@reduxjs/toolkit/query/react";

import { DECK_URL } from "@/utils/constant";
import { axiosBaseQuery } from "@/utils/network";

export const decksApi = createApi({
  reducerPath: "decksApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    createDeck: build.query({
      query: () => ({
        url: `${DECK_URL}/new/`,
        method: "GET",
      }),
    }),
    getAllCards: build.query({
      query: (id) => ({
        url: `${DECK_URL}/${id}/draw/?count=52`,
        method: "GET",
      }),
    }),
    // changePassword: build.mutation({
    //   query: (data) => ({
    //     url: CHANGE_PASSWORD,
    //     method: "POST",
    //     data,
    //   }),
    // }),
  }),
});

export const { useCreateDeckQuery, useLazyGetAllCardsQuery } = decksApi;
