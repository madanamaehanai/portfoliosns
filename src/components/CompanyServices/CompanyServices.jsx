import React from "react";
import ServicesPost from "../ServicesPost/ServicesPost";

function CompanyServices({ post }) {
  return (
    <>
      {/* <div className="postText">{post.service}</div> */}
      <div>
        <ServicesPost post={post.service} />
      </div>
    </>
  );
}

export default CompanyServices;
