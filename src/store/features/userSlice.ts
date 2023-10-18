import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/userTypes';
import { Hera } from '../../mockData/mockUserDetails';

export interface User {
	details: UserType,
}


const initialState: User  = {
	details: {
		signedIn: false,
	},
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