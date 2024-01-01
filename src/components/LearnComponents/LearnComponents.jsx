import React from "react";

function LearnComponents() {
  return (
    <div className="CenterComponents">
      <div>LearnComponents</div>
      <details>
        <summary>マークアップ言語</summary>
        <details>
          <summary>HTML</summary>
        </details>
        <details>
          <summary>CSS</summary>
        </details>
      </details>
      <details>
        <summary>JavaScript</summary>
        <details>
          <summary>フレームワーク</summary>
          <details>
            <summary>React</summary>
            <p>
              採用企業例（Facebook, Instagram, Yahoo!, Airbnb, Reddit, Netflix,
              Slack, Uber）
            </p>
          </details>
          <details>
            <summary>React Native</summary>
          </details>
          <details>
            <summary>Vue.js</summary>
          </details>
        </details>
      </details>
    </div>
  );
}

export default LearnComponents;
