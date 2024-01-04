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
  const [welfare, setWelfare] = useState(() => []);
  const [thegoal, setthegoal] = useState(() => []);
  const [improvement, setimprovement] = useState(() => []);
  const [whatdoyouthink, setwhatdoyouthink] = useState(() => []);
  const [strength, setstrength] = useState(() => []);
  const [weakness, setweakness] = useState(() => []);
  const [reasonforapplying, setreasonforapplying] = useState(() => []);
  const { companyId } = useParams();
  const [category, setCategory] = useState("free");
  // console.log("Location State:", posts);

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
        const response = await axiosInstance.get(
          `/companypost/${companyId}/free`
        );
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

  //福利厚生データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/welfare`
        );
        setWelfare(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //入社後の目標データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/thegoal`
        );
        setthegoal(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //志望動機データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/reasonforapplying`
        );
        setreasonforapplying(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //志望動機データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/whatdoyouthink`
        );
        setwhatdoyouthink(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //志望動機データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/improvement`
        );
        setimprovement(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //同業他社と比べた強味データの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/strength`
        );
        setstrength(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //同業他社と比べた弱みデータの取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/companypost/${companyId}/weakness`
        );
        setweakness(response.data);
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
          <div className="postText">従業員数：#####</div>
          <div className="postText">年収：#####</div>
          <div className="postText">経営理念：#####</div>
          <div className="postText">資本金：#####</div>
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
        <details>
          <summary>福利厚生</summary>
          <div className="PostsComponents">
            {welfare.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>志望動機</summary>
          <div className="PostsComponents">
            {reasonforapplying.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>入社後の目標</summary>
          <div className="PostsComponents">
            {thegoal.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>当社サービスの改善点を教えてください。</summary>
          <div className="PostsComponents">
            {improvement.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>当社サービスをどう思いますか？</summary>
          <div className="PostsComponents">
            {whatdoyouthink.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>同業他社と比べた強味</summary>
          <div className="PostsComponents">
            {strength.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>同業他社と比べた弱み</summary>
          <div className="PostsComponents">
            {weakness.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </div>
      <div>
        <div>投稿</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="companyPostdesc" placeholder="企業名" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">カテゴリーを選択</option>
            <option value="income">年収</option>
            <option value="welfare">福利厚生</option>
            <option value="thegoal">入社後の目標</option>
            <option value="reasonforapplying">志望理由</option>
            <option value="improvement">サービス改善点</option>
            <option value="whatdoyouthink">当社サービスをどう思うか</option>
            <option value="strength">同業他社と比べた強味</option>
            <option value="weakness">同業他社と比べた弱み</option>
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
