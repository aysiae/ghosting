import { NewPost } from "../components/newPost/NewPost";
import { useAppDispatch, useAppSelector } from '../store/store';
import { getPosts } from "../store/features/timelineSlice";
import { useEffect } from "react";
import { Post } from "../components/post/Post";


export function Timeline() {
    const dispatch = useAppDispatch();
    
    const posts = useAppSelector((state) => state.timeline.timeline.posts);


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, posts])

    return (
        <div className='timeline' style={{borderRight: '1px grey solid'}}>
            <NewPost />
            {posts.map(post => {
                return (
                    <Post post={post} />
                )
            })}
        </div>
    )
}