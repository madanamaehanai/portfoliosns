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
              採用事例（Facebook, Instagram, Yahoo!, Airbnb, Reddit, Netflix,
              Slack, Uber, Skype）
            </p>
            <p>
              Reactのメリット1
              宣言的でソースの可読性が高い、Reactはページのパーツごとにコードを分けられるので、第三者がソースコードを読んでもコードを理解しやすく、不具合の発券や修復が容易となる。
            </p>
            <p>
              Reactのメリット2
              コンポーネント管理の為、拡張性が容易であり、コンポーネント指向でないプログラムはコードの全体に変更時の影響が発生しうるが、コンポーネント管理の場合は局所的な変更対応で済む。
            </p>
            <p>
              Reactのメリット3 仮想ＤＯＭ採用の為、処理が高速
              仮想DOMの為、Web描画時等に変更箇所のみ反映されるので、ページ全体を再描画するよりも局所的な処理で済むため、処理が高速
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
