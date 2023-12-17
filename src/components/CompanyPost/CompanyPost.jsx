import axios from "axios";
import React from "react";
import CompanyService from "../CompanyServices/CompanyServices";

function CompanyPost({ post }) {
  // console.log(post)
  return (
    <div className="PostComponents">
      <div className="postText">{post.companyname}</div>
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="postText">
        {post.url}
      </a>
      <div key={post._id}>
        {/* CompanyServicesコンポーネントにpostを渡す */}
        <CompanyService post={post} />
        {/* {post.service && post.service.map((service) => (
          <CompanyService post={service} key={service._id} />
        ))} */}
      <div className="postText">{post.createdAt}</div>
      </div>
    </div>
  );
}

export default CompanyPost;
