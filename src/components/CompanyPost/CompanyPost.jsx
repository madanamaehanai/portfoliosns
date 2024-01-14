import axiosInstance from "../../axios";
import React, { useContext, useState } from "react";
import CompanyService from "../CompanyServices/CompanyServices";
import { AuthContext } from "../../state/AuthContext";
import { Link } from "react-router-dom";

function CompanyPost({ post }) {
  // console.log("POST_ID", post);
  // const { user } = useContext(AuthContext);
  // console.log(post._id)
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newService = {
  //     servicesname: e.target.elements.serviceName.value,
  //     servicesurl: e.target.elements.serviceURL.value,
  //     userId: user._id,
  //     servicesdesc: e.target.elements.description.value,
  //     category: e.target.elements.category.value,
  //     companyid: post._id,
  //   };

  //   console.log("New Service:", newService);

  //   try {
  //     await axiosInstance.post(
  //       `/company/company/services/${post._id}`,
  //       newService
  //     );
  //     window.location.reload();
  //     console.log("投稿成功");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="PostComponents">
      <div className="postText">{post.companyname}</div>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="postText"
      >
        {post.url}
      </a>
      <div className="postText">{post.desc}</div>
      {/* <div key={post._id}> */}
        {/* CompanyServicesコンポーネントにpostを渡す */}
        {/* <CompanyService post={post} /> */}
        {/* {post.service && post.service.map((service) => (
          <CompanyService post={service} key={service._id} />
        ))} */}
        {/* <div className="postText">{post.createdAt}</div> */}
      {/* </div> */}
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="serviceName" placeholder="サービス名" />
        <input type="text" name="serviceURL" placeholder="サービスURL" />
        <input type="text" name="description" placeholder="概要" />
        <input type="text" name="category" placeholder="業種" />
        <button>作成</button>
      </form> */}
      <button>
        <Link
           to={`/CompanyRoom/${post._id}`}
          className="topbarLink"
          style={{ textDecoration: "none" }
        }
        >
          会社情報へ
        </Link>
      </button>
    </div>
  );
}

export default CompanyPost;
