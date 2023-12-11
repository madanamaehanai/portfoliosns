import React, { useRef } from "react";
import Posts from "../../components/Posts/Posts";
import axios from "axios";

function Posting() {

    const desc = useRef();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const newPost = {
        userId: "65758f3199f189d46a3204a7",
        desc: desc.current.value,
      };
  
      try {
        await axios.post("/post", newPost);
        window.location.reload();
        console.log("投稿成功");
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div className="PostingComponents">
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" ref={desc} />
      <button></button>
    </form>
  </div>
  )
}

export default Posting