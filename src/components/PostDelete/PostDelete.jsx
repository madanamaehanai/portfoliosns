import React from "react";
import axiosInstance from "../../axios";

function PostDelete({ post }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var result = window.confirm("クリックされました。");

    if (result) {
      try {
        await axiosInstance.post(`/post/delete/${post._id}`);
        window.location.reload();
        console.log("削除成功");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button>削除</button>
    </form>
  );
}

export default PostDelete;
