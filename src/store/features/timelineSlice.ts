import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/postTypes';

export interface TimelinePosts {
	posts: Post[]
}

interface TimelineState {
	timeline: TimelinePosts;
}

const initialState: TimelineState  = {
	timeline: {
		posts: [],
	},
};

export const TimelineSlice = createSlice({
	name: 'timelinePosts',
	initialState,
	reducers: {
		// toggleDarkMode: (state, action: PayloadAction) => {
		// 	state.interfaceColor.darkMode = !state.interfaceColor.darkMode;
		// },
		// toggleUnicornMode: (state, action: PayloadAction) => {
		// 	state.interfaceColor.unicornMode = !state.interfaceColor.unicornMode;
		// },
	},
});

export default TimelineSlice;
// export const { toggleDarkMode, toggleUnicornMode } = ColorModeSlice.actions;