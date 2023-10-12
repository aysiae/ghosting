import { Avatar } from "@mui/material"
import { PostType } from "../../types/postTypes"

type PostProps = {
    post: PostType
}

export function Post({ post }: PostProps) {
    return (
        <div>
            <div>
            <Avatar>{post.avatar}</Avatar>
            <div>
                <p>{post.name}</p>
                <p>@{post.username}</p>
            </div>
            </div>
            <div>
                {post.body}
            </div>
        </div>
    )
}