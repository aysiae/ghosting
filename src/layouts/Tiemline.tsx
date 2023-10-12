import { NewPost } from "../components/newPost/NewPost";

export function Timeline() {
    return (
        <div className='timeline' style={{borderRight: '1px grey solid'}}>
            <NewPost />
        </div>
    )
}