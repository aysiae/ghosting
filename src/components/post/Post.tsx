import { Avatar, Box, Typography } from "@mui/material";
import { PostType } from "../../types/postTypes";
import { HeartIcon, ReplyIcon, RepostIcon } from "../../assets/icons/postIcons";



type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  return (
    <Box
      sx={{
        marginLeft: "2em",
        marginTop: "1em",
        paddingBottom: "1em",
        color: "white",
        width: "700px",
        display: "flex",
        borderBottom: "1px gray solid",
      }}
    >
      <Avatar sx={{ marginTop: "1em", marginRight: "1em" }}>
        {post.avatar}
      </Avatar>
      <Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginRight: "0.5em",
              color: "#9575cd",
            }}
          >
            {post.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "grey" }}>
            @{post.username}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
          }}
        >
          {post.body}
        </Typography>
        <Box>
          <ReplyIcon sx={{ marginRight: "5em" }} />
          <HeartIcon sx={{ marginRight: "5em" }} />
          <RepostIcon sx={{ marginRight: "5em" }} />
        </Box>
      </Box>
    </Box>
  );
}
