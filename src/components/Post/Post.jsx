import React from "react";

function Post({ post }) {
    console.log(post.userId);
  return (
    <div className="PostComponents">
      <div className="postText">{post.desc}</div>
      <div className="postText">{post.createdAt}</div>
    </div>
  );
}

export default Post;
