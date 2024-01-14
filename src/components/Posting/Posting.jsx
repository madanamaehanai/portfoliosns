import React, { useRef } from "react";
import Posts from "../../components/Posts/Posts";
import axiosInstance from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

function Posting() {
  const { user } = useContext(AuthContext);
  // console.log(user._id);

  const desc = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axiosInstance.post("/post", newPost);
      window.location.reload();
      console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="PostingComponents">
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea  ref={desc} className="post" />
        <div className="option">
          <button>投稿</button>
        </div>
      </form>
    </div>
  );
}

export default Posting;
