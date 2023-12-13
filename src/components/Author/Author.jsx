// import React from "react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import Authorpost from "../AuthorPost/Authorpost"

function Author() {
  const [posts, setPosts] = useState(() => []);
  // console.log(posts);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          // "/post/timeline/65758f3199f189d46a3204a7"
          `/post/author`
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>Author</div>
      <div>
      {posts.map((post) => (
        <Authorpost post={post} key={post.username} />
      ))}
      </div>
    </>
  );
}

export default Author;
