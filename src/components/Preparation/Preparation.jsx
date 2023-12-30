import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";

function Preparation() {
  const { user } = useContext(AuthContext);
  const [typically1, settypically1] = useState(() => []);
  const [typically2, settypically2] = useState(() => []);
  const [typically3, settypically3] = useState(() => []);
  const [typically4, settypically4] = useState(() => []);
  const [typically5, settypically5] = useState(() => []);
  const [typically6, settypically6] = useState(() => []);
  const [typically7, settypically7] = useState(() => []);
  const [typically8, settypically8] = useState(() => []);
  const [typically9, settypically9] = useState(() => []);
  const [typically10, settypically10] = useState(() => []);
  const [typically11, settypically11] = useState(() => []);
  const [typically12, settypically12] = useState(() => []);
  const [typically13, settypically13] = useState(() => []);
  const [typically14, settypically14] = useState(() => []);
  const [engineer1, setengineer1] = useState(() => []);
  const [engineer2, setengineer2] = useState(() => []);
  const [engineer3, setengineer3] = useState(() => []);
  const [engineer4, setengineer4] = useState(() => []);
  const [engineer5, setengineer5] = useState(() => []);
  const [engineer6, setengineer6] = useState(() => []);
  const [engineer7, setengineer7] = useState(() => []);

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
    fetchData("typically3", settypically3);
    fetchData("typically4", settypically4);
    fetchData("typically5", settypically5);
    fetchData("typically6", settypically6);
    fetchData("typically7", settypically7);
    fetchData("typically8", settypically8);
    fetchData("typically9", settypically9);
    fetchData("typically10", settypically10);
    fetchData("typically11", settypically11);
    fetchData("typically12", settypically12);
    fetchData("typically13", settypically13);
    fetchData("typically14", settypically14);
    fetchData("engineer1", setengineer1);
    fetchData("engineer2", setengineer2);
    fetchData("engineer3", setengineer3);
    fetchData("engineer4", setengineer4);
    fetchData("engineer5", setengineer5);
    fetchData("engineer6", setengineer6);
    fetchData("engineer7", setengineer7);
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
        {/* 職務経歴を教えてください。 */}
        <details>
          <summary>職務経歴を教えてください。</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically10")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically10"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically10.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 前職での得意な業務は何ですか？ */}
        <details>
          <summary>前職での得意な業務は何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically14")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically14"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically14.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 前職へ入社した理由は何ですか？ */}
        <details>
          <summary>前職へ入社した理由は何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically11")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically11"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically11.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 自己PRをお願いします。 */}
        <details>
          <summary>自己PRをお願いします。</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically12")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically12"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically12.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 会社選びの軸があれば教えてください */}
        <details>
          <summary>会社選びの軸があれば教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically13")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically13"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically13.map((post) => (
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
        {/* 次の転職先では、どのような環境を求めていますか？ */}
        <details>
          <summary>次の転職先では、どのような環境を求めていますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically3")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically3"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically3.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 前職を退職された理由は何ですか？ */}
        <details>
          <summary>前職を退職された理由は何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically4")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically4"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically4.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* あなたの強み・弱みを教えてください。 */}
        <details>
          <summary>あなたの強み・弱みを教えてください。</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically5")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically5"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically5.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* どのようなキャリアプランを描いていますか？ */}
        <details>
          <summary>どのようなキャリアプランを描いていますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically6")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically6"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically6.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 給与はどのくらいを希望していますか？ */}
        <details>
          <summary>給与はどのくらいを希望していますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically7")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically7"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically7.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 当社以外に応募している企業はありますか？ */}
        <details>
          <summary>当社以外に応募している企業はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically8")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically8"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically8.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 最後に何か質問はありますか？ */}
        <details>
          <summary>最後に何か質問はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically9")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically9"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically9.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </details>
      <details>
        <summary>エンジニア系質疑</summary>
        {/* エンジニアを目指した理由は？ */}
        <details>
          <summary>エンジニアを目指した理由は？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer1")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer1"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer1.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 使用したことのある技術やツールを教えてください */}
        <details>
          <summary>使用したことのある技術やツールを教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer2")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer2"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer2.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* その技術やツールを選んだ理由は何ですか？ */}
        <details>
          <summary>その技術やツールを選んだ理由は何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer3")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer3"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer3.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* これまでどのようなサービスを開発してきましたか？ */}
        <details>
          <summary>これまでどのようなサービスを開発してきましたか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer4")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer4"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer4.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 開発において重要視していることは何ですか？ */}
        <details>
          <summary>開発において重要視していることは何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer5")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer5"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer5.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 担当していたサービスの規模はどのくらいですか？ */}
        <details>
          <summary>担当していたサービスの規模はどのくらいですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer6")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer6"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer6.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* リーダー経験はありますか？ */}
        <details>
          <summary>リーダー経験はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer7")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer7"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer7.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </details>
    </div>
  );
}

export default Preparation;
