import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { AuthContext } from "../../state/AuthContext";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";

function Preparation() {
  const pass = "preparetion";
  const { user } = useContext(AuthContext);
  const [free, setfree] = useState(() => []);
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
  const [typically15, settypically15] = useState(() => []);
  const [typically16, settypically16] = useState(() => []);
  const [typically17, settypically17] = useState(() => []);
  const [typically18, settypically18] = useState(() => []);
  const [typically19, settypically19] = useState(() => []);
  const [typically20, settypically20] = useState(() => []);
  const [typically21, settypically21] = useState(() => []);
  const [typically22, settypically22] = useState(() => []);
  const [typically23, settypically23] = useState(() => []);
  const [typically24, settypically24] = useState(() => []);
  const [typically25, settypically25] = useState(() => []);
  const [typically26, settypically26] = useState(() => []);
  const [typically27, settypically27] = useState(() => []);
  const [engineer1, setengineer1] = useState(() => []);
  const [engineer2, setengineer2] = useState(() => []);
  const [engineer3, setengineer3] = useState(() => []);
  const [engineer4, setengineer4] = useState(() => []);
  const [engineer5, setengineer5] = useState(() => []);
  const [engineer6, setengineer6] = useState(() => []);
  const [engineer7, setengineer7] = useState(() => []);
  const [engineer8, setengineer8] = useState(() => []);
  const [engineer9, setengineer9] = useState(() => []);
  const [engineer10, setengineer10] = useState(() => []);
  const [engineer11, setengineer11] = useState(() => []);
  const [engineer12, setengineer12] = useState(() => []);
  const [engineer13, setengineer13] = useState(() => []);
  const [engineer14, setengineer14] = useState(() => []);

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
    fetchData("free", setfree);
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
    fetchData("typically15", settypically15);
    fetchData("typically16", settypically16);
    fetchData("typically17", settypically17);
    fetchData("typically18", settypically18);
    fetchData("typically19", settypically19);
    fetchData("typically20", settypically20);
    fetchData("typically21", settypically21);
    fetchData("typically22", settypically22);
    fetchData("typically23", settypically23);
    fetchData("typically24", settypically24);
    fetchData("typically25", settypically25);
    fetchData("typically26", settypically26);
    fetchData("typically27", settypically27);
    fetchData("engineer1", setengineer1);
    fetchData("engineer2", setengineer2);
    fetchData("engineer3", setengineer3);
    fetchData("engineer4", setengineer4);
    fetchData("engineer5", setengineer5);
    fetchData("engineer6", setengineer6);
    fetchData("engineer7", setengineer7);
    fetchData("engineer8", setengineer8);
    fetchData("engineer9", setengineer9);
    fetchData("engineer10", setengineer10);
    fetchData("engineer11", setengineer11);
    fetchData("engineer12", setengineer12);
    fetchData("engineer13", setengineer13);
    fetchData("engineer14", setengineer14);
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
        {/* 業務中判断に迷った時はどう対処していましたか？ */}
        <details>
          <summary>業務中判断に迷った時はどう対処していましたか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically15")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically15"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically15.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 社内の方との折衝の経験はありますか？ */}
        <details>
          <summary>社内の方との折衝の経験はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically24")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically24"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically24.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 会社の方針と自分の考えが合わなかったことはありますか？ */}
        <details>
          <summary>
            会社の方針と自分の考えが合わなかったことはありますか？
          </summary>
          <form onSubmit={(e) => handleSubmit(e, "typically25")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically25"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically25.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 外部の方との折衝の経験はありますか？ */}
        <details>
          <summary>外部の方との折衝の経験はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically16")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically16"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically16.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 外部の方と折衝する際に、意識していたことはありますか？ */}
        <details>
          <summary>
            外部の方と折衝する際に、意識していたことはありますか？
          </summary>
          <form onSubmit={(e) => handleSubmit(e, "typically17")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically17"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically17.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 周囲の人に助けてもらった経験はありますか？ */}
        <details>
          <summary>周囲の人に助けてもらった経験はありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically18")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically18"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically18.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 業務中失敗した経験とそのリカバリー方法を教えてください */}
        <details>
          <summary>
            業務中失敗した経験とそのリカバリー方法を教えてください
          </summary>
          <form onSubmit={(e) => handleSubmit(e, "typically19")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically19"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically19.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* どのようなときにモチベーションが下がりますか？ */}
        <details>
          <summary>どのようなときにモチベーションが下がりますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically22")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically22"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically22.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* やりがいを感じたときのエピソードはありますか？ */}
        <details>
          <summary>やりがいを感じたときのエピソードはありますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically23")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically23"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically23.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* これまでで最もうまく解決できた問題は何ですか？ */}
        <details>
          <summary>これまでで最もうまく解決できた問題は何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically20")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically20"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically20.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 最も裁量を与えられた経験を教えてください */}
        <details>
          <summary>最も裁量を与えられた経験を教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically21")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically21"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically21.map((post) => (
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
        {/* 入社可能時期を教えてください */}
        <details>
          <summary>入社可能時期を教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically26")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically26"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically26.map((post) => (
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
        {/* 他社の選考状況を教えてください */}
        <details>
          <summary>他社の選考状況を教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "typically27")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="typically27"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {typically27.map((post) => (
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
          <details>
            <summary>ヒント</summary>
            <div>
              <p>何故、エンジニアになりたいと思ったのか前向きな理由</p>
              <p>
                他業種に比べ、自己学習が必要な業種で、新たな技術や知識を吸収できる人間なのか
              </p>
              <p>
                なりたいと思った理由が、持続可能な理由か、持続性が薄い理由なのか、業界と人間性のマッチング確認
              </p>
            </div>
          </details>
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
          <details>
            <summary>ヒント</summary>
            <div>
              <p>どの様に考えて、技術を取り入れているか？</p>
              <p>
                例えば、どのような機能を実装するためや、どのようなサイトで利用されていて、将来的に流行る、シェアを獲得している（為、勉強の必要があると考えた）、保守性やセキュリティの問題などを考慮したなどの回答が良いと思う。
              </p>
              <p>
                理解度が高ければ高いほど、問題解決能力や課題への対応力があると考えられる。
              </p>
            </div>
          </details>
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
        {/* 最近興味のある技術や、勉強していることは何ですか？ */}
        <details>
          <summary>最近興味のある技術や、勉強していることは何ですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer10")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer10"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer10.map((post) => (
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
        {/* どのような開発の進め方を経験してこられましたか？ */}
        <details>
          <summary>どのような開発の進め方を経験してこられましたか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer8")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer8"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer8.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* あなたはどのようなエンジニアになりたいですか？ */}
        <details>
          <summary>あなたはどのようなエンジニアになりたいですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer11")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer11"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer11.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 将来的には何をやりたいですか？ */}
        <details>
          <summary>将来的には何をやりたいですか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer13")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer13"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer13.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* IT知識や情報のキャッチアップ方法を教えてください */}
        <details>
          <summary>IT知識や情報のキャッチアップ方法を教えてください</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer12")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer12"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer12.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 技術の動向についてどのように思いますか */}
        <details>
          <summary>技術の動向についてどのように思いますか</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer14")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer14"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer14.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
        {/* 今までの経験は弊社でどう活かせると思いますか？ */}
        <details>
          <summary>今までの経験は弊社でどう活かせると思いますか？</summary>
          <form onSubmit={(e) => handleSubmit(e, "engineer9")}>
            <input type="text" name="companyPostdesc" placeholder="回答内容" />
            <input type="hidden" name="category" value="engineer9"></input>
            <button>投稿</button>
          </form>
          <div className="PostsComponents">
            {engineer9.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        </details>
      </details>
      <details>
        <summary>逆質問</summary>
      </details>
      <div>
        <p>フリールーム</p>
        <form onSubmit={(e) => handleSubmit(e, "free")}>
          <input type="text" name="companyPostdesc" placeholder="回答内容" />
          <input type="hidden" name="category" value="free"></input>
          <button>投稿</button>
        </form>
        <div className="PostsComponents">
          {free.map((post) => (
            <Post post={post} pass={pass} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preparation;
