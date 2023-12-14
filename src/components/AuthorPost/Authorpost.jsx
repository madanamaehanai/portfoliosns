import React from "react";
import axiosInstance from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

function Authorpost({ post }) {
    const { user } = useContext(AuthContext);
    
    // console.log(post);

    const handleFollowToggle = async () => {

        try {
            await axiosInstance.post(`/user/forrow/${user._id}/${post._id}`);

          } catch (err) {
            console.log(err);
          }
      };
  return (
    <>
      <div className="postText">ユーザー: {post.username}</div>
      <button onClick={handleFollowToggle}>フォロー：アンフォロー</button>
    </>
  );
}

export default Authorpost;
