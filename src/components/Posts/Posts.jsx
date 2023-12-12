import axiosInstance from "../../axios";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

function Posts() {
  const { user } = useContext(AuthContext);
  // console.log(user._id);
  const [posts, setPosts] = useState(() => []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          // "/post/timeline/65758f3199f189d46a3204a7"
          `/post/timeline/${user._id}`
          );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="PostsComponents">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}


export default Posts;
