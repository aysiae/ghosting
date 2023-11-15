import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicProfileType } from "../../types/profileTypes";
import { p1 } from '../../mockData/MockProfilesData';

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
    getProfile: (state, action: PayloadAction) => {
      state.details = p1;
    },
  },
});

export default ProfileSlice;
export const { getProfile } = ProfileSlice.actions;
