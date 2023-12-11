import axios from "axios";
import React, { useEffect, useState } from "react";

function Post({ post }) {
  const [user, setUser] = useState(() => []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/user/username/${post.userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="PostComponents">
      <div className="postText">{user.username}</div>
      <div className="postText">{post.desc}</div>
      <div className="postText">{post.createdAt}</div>
    </div>
  );
}

export default Post;
