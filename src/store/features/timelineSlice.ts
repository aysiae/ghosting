import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../types/postTypes';
import { mockTimelineData } from '../../mockData/mockTimeLineData';

export interface TimelinePosts {
	posts: PostType[]
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
		getPosts: (state, action: PayloadAction) => {
			state.timeline.posts = mockTimelineData;
		},
	},
});

export default TimelineSlice;
export const { getPosts } = TimelineSlice.actions;