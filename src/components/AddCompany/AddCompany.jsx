import React, { useContext, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import axiosInstance from "../../axios";

function AddCompany() {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCompany = {
      companyname: e.target.elements.companyName.value,
      url: e.target.elements.companyURL.value,
      userId: user._id,
      category: categories,
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
        <select
          multiple // 複数選択可能にする
          value={categories}
          onChange={(e) =>
            setCategories(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="Inhousedevelopmentcompany">自社開発</option>
          <option value="Contractdevelopmentcompany">受託開発</option>
          <option value="sescompany">SES</option>
        </select>
        <button>作成</button>
      </form>
    </div>
  );
}

export default AddCompany;
