import React, { useEffect, useState } from "react";
import axios from "axios";

function Inhouse() {
  const [company, setcompany] = useState(() => []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/company/company/Inhousedevelopmentcompany`
        );
        setcompany(response.data);
        // console.log(company);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(company);
  }, [company]);

  return (
    <div className="Postcompany">
      {company.map((item, index) => (
        <div key={index}>
          <div className="postText">{item.companyname}</div>
          <a href={item.url} className="postLink" target="_blank" rel="noopener noreferrer">
            {item.url}
          </a>
          <div className="postText">{item.createdAt}</div>
        </div>
      ))}
    </div>
  );
}

export default Inhouse;
