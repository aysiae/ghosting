import { NewPost } from "../../components/newPost/NewPost";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPosts } from "../../store/features/timelineSlice";
import { useEffect } from "react";
import { Post } from "../../components/post/Post";

const logo = require("../../assets/ghost.png");

export function Timeline() {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.timeline.timeline.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);

  return (
    <div
      className="timeline"
      style={{
        borderRight: "1px grey solid",
        borderLeft: "1px grey solid",
      }}
    >
      <NewPost />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          position: "sticky",
        }}
      >
        <h2>What's Spooking?</h2>
        <img
          style={{
            width: "50px",
            height: "50px",
            marginTop: "0.75em",
            marginLeft: "0.5em",
          }}
          src={logo}
          alt="ghost logo"
        />
      </div>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
