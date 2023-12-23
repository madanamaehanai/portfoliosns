import React, { useContext, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import axiosInstance from "../../axios";

function AddCompany() {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCompany = {
      companyname: e.target.elements.companyName.value,
      url: e.target.elements.companyURL.value,
      userId: user._id,
      category: category,
    };

    try {
      await axiosInstance.post("/company/company", newCompany);
      window.location.reload();
      console.log("投稿成功");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>AddCompany</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="companyName" placeholder="企業名" />
        <input type="text" name="companyURL" placeholder="企業URL" />
        <input type="text" name="description" placeholder="概要" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">カテゴリーを選択</option>
          <option value="Inhousedevelopmentcompany">自社開発</option>
          <option value="Contractdevelopmentcompany">受託開発</option>
        </select>
        <button>作成</button>
      </form>
    </div>
  );
}

export default AddCompany;
