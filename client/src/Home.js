import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function Home() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}
