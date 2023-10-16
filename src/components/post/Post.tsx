import { Avatar } from "@mui/material"
import { PostType } from "../../types/postTypes"

type PostProps = {
    post: PostType
}

export function Post({ post }: PostProps) {
    return (
        <div style={{
            marginLeft: '2em',
            marginTop: '1em',
            paddingBottom: '1em',
            color: 'white',
            width: '700px',
            display: 'flex',
            borderBottom: '1px gray solid',
        }}>
            <Avatar sx={{marginTop: '1em', marginRight: '1em'}}>{post.avatar}</Avatar>
            <div>
                <div  style={{
                    display: 'flex',
                }}>
                    <p style={{
                        marginRight: '0.5em',
                        color: '#9575cd'
                    }}>{post.name}</p>
                    <p style={
                        {color: 'grey'}}>
                            @{post.username}
                    </p>
                </div>
                <p style={{
                    marginTop: '-0.5em'
                }}>{post.body}</p>
            </div>
        </div>
    )
}