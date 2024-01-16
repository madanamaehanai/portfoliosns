import React from "react";
import axiosInstance from "../../axios";

function PostDelete({ post, pass }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pass == "home") {
        // console.log("homeから",pass);
        await axiosInstance.post(`/post/delete/${post._id}`);
      } else if (pass == "company") {
        // console.log("companyから",pass);
        await axiosInstance.post(`/companypost/delete/${post._id}`);
      } else if (pass == "learn") {
        // console.log("learnから",pass);
        await axiosInstance.post(`/learn/delete/${post._id}`);
      } else if (pass == "preparetion") {
        console.log("preparetionから",pass);
      }
      window.location.reload();
      console.log("削除成功");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button type="submit">削除</button>
    </form>
  );
}

export default PostDelete;
