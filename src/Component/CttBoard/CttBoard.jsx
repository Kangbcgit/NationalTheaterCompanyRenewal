import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

//component 뿌려줄 함수
const Icons = (props) => {
  // id가 2인 경우에만 Link를 추가합니다.
  if (props.ctt.id === 2) {
    return (
      <div className="IconComponent">
        <div className="wrapImgs">
          <Link to="/Sub02GreenTicket">
            <img
              src={`${process.env.PUBLIC_URL}/images/board/${props.ctt.img}`}
              alt={props.ctt.title}
            />
          </Link>
        </div>
        <div className="wrapExplain">
          <Link to="/your-link-here">
            {" "}
            {/* 여기에 링크 경로를 추가하세요 */}
            <h3>{props.ctt.title}</h3>
          </Link>
          <p>{props.ctt.explain}</p>
        </div>
      </div>
    );
  } else {
    // id가 2가 아닌 경우에는 링크를 추가하지 않습니다.
    return (
      <div className="IconComponent">
        <div className="wrapImgs">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/board/${props.ctt.img}`}
              alt={props.ctt.title}
            />
          </Link>
        </div>
        <div className="wrapExplain">
          <h3>{props.ctt.title}</h3>
          <p>{props.ctt.explain}</p>
        </div>
      </div>
    );
  }
};

const CttBoard = () => {
  //useState 사용을 위한 배열
  let [ctt, setCtt] = useState([
    {
      id: 0,
      img: "후원.svg",
      title: "후원",
      explain: "연극의 미래를 함께 만들어가는",
    },
    {
      id: 1,
      img: "공지사항.svg",
      title: "공지사항",
      explain: "국립극단을 찾는 모든 분들에게 알려드리는",
    },
    {
      id: 2,
      img: "푸른티켓.svg",
      title: "푸른티켓",
      explain: "청소년들이 부담없이 즐길 수 있는",
    },
    {
      id: 3,
      img: "어린이연구소.svg",
      title: "어린이연구소",
      explain: "어린시절을 만나 나의 근원을 찾는",
    },
    {
      id: 4,
      img: "성폭력신고.svg",
      title: "성폭력신고",
      explain: "폭력으로부터 안전한 공연예술문화를 만드는",
    },
  ]);
  return (
    <div className="cttBoard">
      <div className="wrapText">
        <div className="HeadingSmall">
          <p>We, Do it</p>
          <p style={{ color: "red", marginLeft: "5px" }}>.</p>
        </div>
        <div className="HeadingBig">
          <h2 style={{ fontWeight: 100 }}>오늘의 이야기를 발견하고</h2>
          <h2 style={{ fontWeight: 900 }}>
            내일의 연극을 준비하는 연극 플랫폼
          </h2>
        </div>
        <h4
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "var(--h6)",
            fontWeight: 600,
            marginTop: "0.5rem",
          }}
        >
          국립극단은 한국연극의 중심에서 그 가치를 드높이겠습니다.
        </h4>
      </div>
      <div className="wrapIcons">
        {ctt.map((a) => {
          return <Icons ctt={a} key={a.id} />;
        })}
      </div>
    </div>
  );
};

export default CttBoard;
