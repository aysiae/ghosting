import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicProfileType } from "../../types/profileTypes";
import { setCookie } from "../../utils";
import { getProfileDetails } from "../../helpers/getters/getProfileDetails";

export interface ActiveProfile {
  details: BasicProfileType;
}

// UPDATE THIS
const initialState: ActiveProfile = {
  details: getProfileDetails(),
};

export const ProfileSlice = createSlice({
  name: "ActiveProfileDetails",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<BasicProfileType>) => {
      state.details = action.payload;
      setCookie("active_profile", action.payload.username);
    },
  },
});

export default ProfileSlice;
export const { setProfile } = ProfileSlice.actions;
