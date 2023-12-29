import React from "react";

function Preparation() {
  //投稿
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newPost = {
    //   desc: e.target.elements.companyPostdesc.value,
    //   userId: user._id,
    //   companyid: `${companyId}`,
    //   tag: category,
    // };

    // try {
    //   await axiosInstance.post("/companypost", newPost);
    //   window.location.reload();
    //   console.log("投稿成功");
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div>
      <div>Preparation</div>
      <details>
        <summary>エンジニアを目指した理由は？</summary>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="companyPostdesc" placeholder="企業名" />
          <button>投稿</button>
        </form>
        {/* <div className="PostsComponents">
            {incomes.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div> */}
      </details>
    </div>
  );
}

export default Preparation;
