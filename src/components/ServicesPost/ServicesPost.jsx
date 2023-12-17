import axiosInstance from "../../axios";
import React, { useEffect, useState } from "react";

function ServicesPost({ post }) {
  //   console.log("データ", post);

  const [servicesData, setServicesData] = useState([]);
  //   console.log("データ", servicesData);

  useEffect(() => {
    async function fetchServicesData() {
      try {
        // postが複数の場合、Promise.allを使って一括でデータを取得
        const promises = post.map(async (postId) => {
          const response = await axiosInstance.get(
            `/company/company/services/${postId}`
          );
          return response.data.companyservicesPosts;
        });

        // Promise.allで全てのデータの取得が完了するまで待機
        const data = await Promise.all(promises);

        // ステートを更新
        setServicesData(data);
      } catch (error) {
        console.error(error);
      }
    }

    // 関数を呼び出す
    fetchServicesData();
  }, [post]);
  return (
    <div>
      {/* servicesDataが配列の場合、mapを使って各データを表示 */}
      {servicesData.map((data) => (
        <div key={data._id}>
          <div className="postText">{data.servicesname}</div>
          <div className="postText">{data.servicesdesc}</div>
          <a
            href={data.servicesurl}
            target="_blank"
            rel="noopener noreferrer"
            className="postText"
          >
            {data.servicesurl}
          </a>
        </div>
      ))}
      {/* servicesDataが空の場合にメッセージを表示 */}
      {servicesData.length === 0 && <div>No data available</div>}
    </div>
  );
}
export default ServicesPost;
