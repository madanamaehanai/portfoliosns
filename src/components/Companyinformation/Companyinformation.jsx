import React from "react";
import AddCompany from "../AddCompany/AddCompany";
import { Link } from "react-router-dom";

function Companyinformation() {
  return (
    <div className="companypage">
        <div>Companyinformation</div>
      <div className="companypost">
        <AddCompany />
      </div>
      <div className="companygroup">
      <div className="companygroup__range">
        <div className="companygroup__post">
          <p className="maintext">自社開発企業</p>
          <p className="subtext">自社でサービスの企画、開発を行うビジネス企業</p>
          <Link
            to="/inhouse"
            className="topbarLink"
            style={{ textDecoration: "none" }}
          >
            自社開発企業ルームへ
          </Link>
        </div>
        <div className="companygroup__post">
          <p className="maintext">受託開発企業</p>
          <p className="subtext">企業からのサービス開発依頼に対して、開発を行う企業</p>
          <Link
            to="/outhouse"
            className="topbarLink"
            style={{ textDecoration: "none" }}
          >
            受託開発企業ルームへ
          </Link>
        </div>
        <div className="companygroup__post">
          <p className="maintext">SES企業</p>
          <p className="subtext">
            各企業の要望に対して、エンジニアを派遣して開発サポートを行う企業
          </p>
          <Link
            to="/ses"
            className="topbarLink"
            style={{ textDecoration: "none" }}
          >
            SES企業ルームへ
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Companyinformation;
