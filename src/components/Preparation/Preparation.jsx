import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";

function Preparation() {
  const { user } = useContext(AuthContext);
  const [reasonforapplication, setReasonforapplication] = useState(() => []);
  //投稿
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      desc: e.target.elements.companyPostdesc.value,
      userId: user._id,
      category: e.target.elements.category.value,
    };

    try {
      await axiosInstance.post("/preparation", newPost);
      window.location.reload();
      // console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };

  //エンジニアを目指した理由は？：回答データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/preparation/Reasonforapplication`
        );
        setReasonforapplication(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>Preparation</div>
      <details>
        <summary>エンジニアを目指した理由は？</summary>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="companyPostdesc" placeholder="回答内容" />
          <input
            type="hidden"
            name="category"
            value="Reasonforapplication"
          ></input>
          <button>投稿</button>
        </form>
        <div className="PostsComponents">
          {reasonforapplication.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </details>
    </div>
  );
}

export default Preparation;
