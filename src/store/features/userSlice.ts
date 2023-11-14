import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userTypes";
import { Hera } from "../../mockData/mockUserDetails";

export interface User {
  details: UserType;
}

// UPDATE THIS
const initialState: User = {
  details: {uuid: ''},
};

export const UserSlice = createSlice({
  name: "UserDetails",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction) => {
      state.details = Hera;
    },
    addUUID: (state, action: PayloadAction<string>) => {
      state.details.uuid = action.payload;
    }
  },
});

export default UserSlice;
export const { getUser } = UserSlice.actions;
