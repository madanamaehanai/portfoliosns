import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import CompanyPost from "../CompanyPost/CompanyPost";

function Contracts() {
  const [company, setCompany] = useState(() => ({ companyPosts: [] }));
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/company/company/Contractdevelopmentcompany`
        );
        setCompany(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="PostsComponents">
      {company.companyPosts.map((company) => (
        <CompanyPost post={company} key={company._id} />
      ))}
    </div>
  );
}
// );
// }

export default Contracts;
