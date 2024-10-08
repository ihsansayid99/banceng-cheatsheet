import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { StoreDispatch, StoreType } from "@/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
