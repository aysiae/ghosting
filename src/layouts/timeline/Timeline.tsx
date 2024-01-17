import { NewPost } from "../../components/newPost/NewPost";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPosts } from "../../store/features/timelineSlice";
import { useEffect } from "react";
import { Post } from "../../components/post/Post";
import { Box, Typography } from "@mui/material";

const logo = require("../../assets/ghost-2.png");

export function Timeline() {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.timeline.timeline.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);

  return (
    <Box
      sx={{
        borderRight: "1px grey solid",
        borderLeft: "1px grey solid",
      }}
    >
      <NewPost />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          position: "sticky",
        }}
      >
        <Typography variant="h4">What's Spooking?</Typography>
        <img
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "0.5em",
          }}
          src={logo}
          alt="ghost logo"
        />
      </Box>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </Box>
  );
}
