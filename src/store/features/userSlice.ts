import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/userTypes';
import { Hera } from '../../mockData/mockUserDetails';

export interface User {
	details: UserType,
}

// UPDATE THIS
const initialState: User  = {
	details: Hera,
};

export const UserSlice = createSlice({
	name: 'UserDetails',
	initialState,
	reducers: {
		getUser: (state, action: PayloadAction) => {
			state.details = Hera;
		},
	},
});

export default UserSlice;
export const { getUser } = UserSlice.actions;