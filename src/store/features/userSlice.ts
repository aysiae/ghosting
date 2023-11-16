import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userTypes";
import { Hera } from "../../mockData/mockUserDetails";
import { getCookie, setCookie } from "../../utils";

export interface User {
  details: UserType;
}

// UPDATE THIS
const initialState: User = {
  details: {uuid: getCookie('auth_user')},
};

export const UserSlice = createSlice({
  name: "UserDetails",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction) => {
      state.details = Hera;
    },
    setUUID: (state, action: PayloadAction<string>) => {
      state.details.uuid = action.payload;
      setCookie('auth_user', action.payload);
    }
  },
});

export default UserSlice;
export const { getUser, setUUID } = UserSlice.actions;
