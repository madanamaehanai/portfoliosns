import React from "react";

function Authorpost({ post }) {
    console.log(post);
  return (
    <>
      <div className="postText">ユーザー: {post.username}</div>
    </>
  );
}

export default Authorpost;
