import axiosInstance from "../../axios";
import React, { useEffect, useState } from "react";
import Delete from '../PostDelete/PostDelete'
import { format } from 'timeago.js';


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
      <div className="postText">{format(post.createdAt)}</div>
      <div className="postText">{user.username}</div>
      <div className="postText">{post.desc}</div>
      <div className="postText">{post.createdAt}</div>
      <Delete post={post} pass={pass} key={post._id}/>
    </div>
  );
}

export default Post;
