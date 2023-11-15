import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicProfileType } from "../../types/profileTypes";

export interface ActiveProfile {
  details: BasicProfileType;
}

// UPDATE THIS
const initialState: ActiveProfile = {
  details: {displayName: '', username: ''},
};

export const ProfileSlice = createSlice({
  name: "ActiveProfileDetails",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<BasicProfileType>) => {
      state.details = action.payload;
    },
  },
});

export default ProfileSlice;
export const { setProfile } = ProfileSlice.actions;
