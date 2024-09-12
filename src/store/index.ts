// store/store.js
import { decksApi } from "@/api";
import { configureStore } from "@reduxjs/toolkit";
import { decksReducer } from '@/reducer/Decks'

export const store = configureStore({
  reducer: {
    decks: decksReducer,
    [decksApi.reducerPath]: decksApi.reducer,
  },
  middleware: (getDefauleMiddleware) =>
    getDefauleMiddleware().concat([
      decksApi.middleware,
    ]),
});

export type StoreType = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
