import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";

function LearnComponents() {
  const { user } = useContext(AuthContext);
  const [free, setfree] = useState(() => []);
  const [react, setreact] = useState(() => []);

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await axiosInstance.get(`/learn/${endpoint}`);
      setter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("free", setfree);
    fetchData("react", setreact);
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
      await axiosInstance.post("/learn", newPost);
      window.location.reload();
      // console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="CenterComponents">
      <div>LearnComponents</div>
      <details>
        <summary>マークアップ言語</summary>
        <details>
          <summary>HTML</summary>
        </details>
        <details>
          <summary>CSS</summary>
        </details>
      </details>
      <details>
        <summary>JavaScript</summary>
        <details>
          <summary>フレームワーク</summary>
          <details>
            <summary>React</summary>
            <p>
              採用事例（Facebook, Instagram, Yahoo!, Airbnb, Reddit, Netflix,
              Slack, Uber, Skype）
            </p>
            <p>
              Reactのメリット1
              宣言的でソースの可読性が高い、Reactはページのパーツごとにコードを分けられるので、第三者がソースコードを読んでもコードを理解しやすく、不具合の発券や修復が容易となる。
            </p>
            <p>
              Reactのメリット2
              コンポーネント管理の為、拡張性が容易であり、コンポーネント指向でないプログラムはコードの全体に変更時の影響が発生しうるが、コンポーネント管理の場合は局所的な変更対応で済む。
            </p>
            <p>
              Reactのメリット3 仮想ＤＯＭ採用の為、処理が高速
              仮想DOMの為、Web描画時等に変更箇所のみ反映されるので、ページ全体を再描画するよりも局所的な処理で済むため、処理が高速
            </p>
            <form onSubmit={(e) => handleSubmit(e, "react")}>
              <input
                type="text"
                name="companyPostdesc"
                placeholder="回答内容"
              />
              <input type="hidden" name="category" value="react"></input>
              <button>投稿</button>
            </form>
              <div className="PostsComponents">
                {react.map((post) => (
                  <Post post={post} key={post._id} />
                ))}
              </div>
          </details>
          <details>
            <summary>React Native</summary>
          </details>
          <details>
            <summary>Vue.js</summary>
          </details>
        </details>
      </details>
      <form onSubmit={(e) => handleSubmit(e, "free")}>
              <input
                type="text"
                name="companyPostdesc"
                placeholder="回答内容"
              />
              <input type="hidden" name="category" value="free"></input>
              <button>投稿</button>
            </form>
              <div className="PostsComponents">
                {free.map((post) => (
                  <Post post={post} key={post._id} />
                ))}
              </div>
    </div>
  );
}

export default LearnComponents;
