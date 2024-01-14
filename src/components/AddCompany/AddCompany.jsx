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
      desc: e.target.elements.description.value,
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
    <div className="companypost__range">
      <div>AddCompany</div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="form__range">
          <div className="text">企業名：</div>
          <input
            type="text"
            name="companyName"
            placeholder="企業名"
            className="input"
          />
        </div>
        <div className="form__range">
          <div className="text">企業URL：</div>
          <input
            type="text"
            name="companyURL"
            placeholder="企業URL"
            className="input"
          />
        </div>
        <div className="form__range">
          <div className="text">企業概要：</div>
          <input
            type="text"
            name="description"
            placeholder="概要"
            className="input"
          />
        </div>
        <div className="form__range">
          <div className="text">業種を選択：</div>
          <select
            multiple // 複数選択可能にする
            value={categories}
            className="input"
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
        </div>
        <div className="form__range">
          <button className="btn">作成</button>
        </div>
      </form>
    </div>
  );
}

export default AddCompany;
