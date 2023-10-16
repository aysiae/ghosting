import { Avatar } from "@mui/material"
import { createSvgIcon } from '@mui/material/utils';
import { PostType } from "../../types/postTypes"

const HeartIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" fill="#9575cd" stroke='#9575cd' viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg>,
    'Heart'
    )

const RepostIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg"  fill="#9575cd" stroke='#9575cd' viewBox="0 0 24 24"><title>repeat-variant</title><path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" /></svg>,
    'Repost'
)

const ReplyIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg"  fill="#9575cd" stroke='#9575cd' viewBox="0 0 24 24"><title>message-reply-outline</title><path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z" /></svg>,
    'Reply'
)

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
            <Avatar sx={
                {marginTop: '1em', 
                marginRight: '1em'}}>
                {post.avatar}
            </Avatar>
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
                <div>
                    <ReplyIcon sx={{marginRight: '5em'}} />
                    <HeartIcon sx={{marginRight: '5em'}} />
                    <RepostIcon sx={{marginRight: '5em'}}/>                
                </div>
            </div>
        </div>
    )
}