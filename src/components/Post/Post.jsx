import axiosInstance from "../../axios";
import React, { useEffect, useState } from "react";
import Delete from "../PostDelete/PostDelete";
import { format } from "timeago.js";

function Post({ post, pass }) {
  const [user, setUser] = useState(() => []);
  // console.log("de-ta", user);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/user/username/${post.userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="PostComponents">
      <div className="toptitle">
        <div className="icon"></div>
        <div className="postText">:{user.username}</div>
        <div className="postText">{format(post.createdAt)}</div>
      </div>
      <div className="description">
        <div className="postTexttitle">投稿内容：</div>
        <div className="postText">{post.desc}</div>
      </div>
      <div className="option">
        <Delete post={post} pass={pass} key={post._id} />
      </div>
    </div>
  );
}

export default Post;
