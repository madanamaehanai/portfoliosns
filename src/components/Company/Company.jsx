import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";

function Company() {
  const { user } = useContext(AuthContext);
  const [company, setCompany] = useState(() => ({ companyPosts: [] }));
  const [posts, setPosts] = useState(() => []);
  const [incomes, setIncomes] = useState(() => []);
  const { companyId } = useParams();
  const [category, setCategory] = useState("");
  // console.log("Location State:", companyId);

  //会社情報の取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/company/companyinfo/${companyId}`
        );
        setCompany(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (companyId) {
      fetchData();
    }
  }, [companyId]);

  //会社Chatの投稿
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      desc: e.target.elements.companyPostdesc.value,
      userId: user._id,
      companyid: `${companyId}`,
      tag: category,
    };

    try {
      await axiosInstance.post("/companypost", newPost);
      window.location.reload();
      console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };

  //Chatデータの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`/companypost/${companyId}`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //年収データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/income`
        );
        setIncomes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Company">
      <p>Company</p>
      <div>
        <div>会社情報</div>
        <div>
          <div className="postText">会社名：{company.companyname}</div>
          <div className="postText">会社URL：{company.url}</div>
          <div className="postText">会社概要：{company.desc}</div>
          <div className="postText">使用言語等：{company.language}</div>
        </div>
      </div>
      <div>
        <details>
          <summary>年収</summary>
          <div className="PostsComponents">
            {incomes.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <div>投稿</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="companyPostdesc" placeholder="企業名" />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">カテゴリーを選択</option>
          <option value="income">年収</option>
          {/* <option value="Contractdevelopmentcompany">受託開発</option> */}
          {/* <option value="sescompany">SES</option> */}
        </select>
          <button>作成</button>
        </form>
      </div>
      <div>
        <div className="PostsComponents">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
