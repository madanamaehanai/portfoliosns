import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";

function Preparation() {
  const { user } = useContext(AuthContext);
  const [engineer1, setengineer1] = useState(() => []);
  const [typically1, settypically1] = useState(() => []);
  const [typically2, settypically2] = useState(() => []);

  // 投稿データの取得
  const fetchData = async (endpoint, setter) => {
    try {
      const response = await axiosInstance.get(`/preparation/${endpoint}`);
      setter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // エンドポイントの変数
  useEffect(() => {
    fetchData("typically1", settypically1);
    fetchData("typically2", settypically2);
    fetchData("engineer1", setengineer1);
  }, []);

  // 投稿
  const handleSubmit = async (e, category) => {
    e.preventDefault();
    const newPost = {
      desc: e.target.elements.companyPostdesc.value,
      userId: user._id,
      category: category,
    };
    try {
      await axiosInstance.post("/preparation", newPost);
      window.location.reload();
      // console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>Preparation</div>
      <details>
        <summary>一般的な質疑</summary>
        {/* 自己紹介をお願いします。 */}
        <details>
          <summary>自己紹介をお願いします。</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically1")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically1"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically1.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* これまでの職務経歴で最も成果を上げたこと/苦労したことを教えてください。 */}
        <details>
          <summary>
            これまでの職務経歴で最も成果を上げたこと/苦労したことを教えてください。
          </summary>
          <form onSubmit={(e) => handleSubmit(e, "typically2")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically2"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically2.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </details>
      <details>
        <summary>エンジニア系質疑</summary>
        <details>
          <summary>エンジニアを目指した理由は？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer1")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input
              type="hidden"
              name="category"
              value="engineer1"
            ></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer1.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </details>
    </div>
  );
}

export default Preparation;
