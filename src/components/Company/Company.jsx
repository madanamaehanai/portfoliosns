import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";
import ServicesPost from "../ServicesPost/ServicesPost";

function Company() {
  const pass = "company";
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

  //会社情報の更新
  const handleupdateSubmit = async (e) => {
    e.preventDefault();

    const updatedata = {
      userId: user._id,
      // companyname: e.target.elements.companyName.value.trim() !== "" ? e.target.elements.companyName.value : undefined,
      // url: e.target.elements.companyURL.value.trim() !== "" ? e.target.elements.companyURL.value : undefined,
      desc:
        e.target.elements.description.value.trim() !== ""
          ? e.target.elements.description.value
          : undefined,
      // language: e.target.elements.uselanguage.value.trim() !== "" ? [e.target.elements.uselanguage.value] : undefined,
      employees:
        e.target.elements.companyemployees.value.trim() !== ""
          ? e.target.elements.companyemployees.value
          : undefined,
      // income: e.target.elements.annualincome.value.trim() !== "" ? e.target.elements.annualincome.value : undefined,
      // salary: e.target.elements.startingsalary.value.trim() !== "" ? e.target.elements.startingsalary.value : undefined,
      // philosophy: e.target.elements.managementphilosophy.value.trim() !== "" ? e.target.elements.managementphilosophy.value : undefined,
      // capital: e.target.elements.companycapital.value.trim() !== "" ? e.target.elements.companycapital.value : undefined,
      founding:
        e.target.elements.companyfounding.value.trim() !== ""
          ? e.target.elements.companyfounding.value
          : undefined,
      listed:
        e.target.elements.listedcompany.value.trim() !== ""
          ? e.target.elements.listedcompany.value
          : undefined,
      office:
        e.target.elements.companyoffice.value.trim() !== ""
          ? e.target.elements.companyoffice.value
          : undefined,
      banks:
        e.target.elements.mainbanks.value.trim() !== ""
          ? [e.target.elements.mainbanks.value]
          : undefined,
    };

    try {
      await axiosInstance.post(`/company/update/${companyId}`, updatedata);
      window.location.reload();
      console.log("会社情報修正成功");
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
          <div className="postText">従業員数：{company.employees}</div>
          <div className="postText">年収：{company.income}</div>
          <div className="postText">初任給：{company.salary}</div>
          <div className="postText">理念：{company.philosophy}</div>
          <div className="postText">資本金：{company.capital}</div>
          <div className="postText">創業：{company.founding}</div>
          <div className="postText">上場：{company.listed}</div>
          <div className="postText">事業所：{company.office}</div>
          <div className="postText">主要取引銀行：{company.banks}</div>
        </div>
      </div>
      <div>
        <details>
          <summary>編集</summary>
          <form onSubmit={(e) => handleupdateSubmit(e)}>
            <input type="text" name="companyName" placeholder="企業名" />
            <br></br>
            <input type="text" name="companyURL" placeholder="企業URL" />
            <br></br>
            <input type="text" name="description" placeholder="会社概要" />
            <br></br>
            <input type="text" name="uselanguage" placeholder="使用言語" />
            <br></br>
            <input type="text" name="companyemployees" placeholder="従業員数" />
            <br></br>
            <input type="text" name="annualincome" placeholder="年収" />
            <br></br>
            <input type="text" name="startingsalary" placeholder="初任給" />
            <br></br>
            <input type="text" name="managementphilosophy" placeholder="理念" />
            <br></br>
            <input type="text" name="companycapital" placeholder="資本金" />
            <br></br>
            <input type="text" name="companyfounding" placeholder="創業" />
            <br></br>
            <input type="text" name="listedcompany" placeholder="上場" />
            <br></br>
            <input type="text" name="companyoffice" placeholder="事業所" />
            <br></br>
            <input type="text" name="mainbanks" placeholder="主要取引銀行" />
            <br></br>
            <button>編集</button>
          </form>
        </details>
      </div>
      <div>
        <details>
          <summary>サービス</summary>
          <ServicesPost post={company.service} />
        </details>
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
          <input type="text" name="companyPostdesc" placeholder="情報を入力" />
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
            <Post post={post} pass={pass} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
