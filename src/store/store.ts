import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import TimelineSlice from "./features/timelineSlice";
import UserSlice from "./features/userSlice";
import ProfileSlice from "./features/profileSlice";

export const store = configureStore({
  reducer: {
    timeline: TimelineSlice.reducer,
    user: UserSlice.reducer,
    profile: ProfileSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
