import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import styled from "styled-components";

//styled-component
let Bg = styled.div`
  background: url(../../images/board/backgroundImg.svg);
  width: 100vw;
  height: 100vh;
`;
let WrapText = styled.div`
  text-align: center;
`;
let HeadingSmall = styled.p`
  font-family: "EF_Rebecca";
  font-size: var(--title);
  color: #fff;
  display: flex;
  width: fit-content;
  margin: 0.5rem auto;
`;
let HeadingBig = styled.h2`
  font-size: var(--h1);
  color: #fff;
`;
let WrapIcons = styled.div`
  border: 1px solid red;
  color: #fff;
  width: 70%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
//component 뿌려줄 함수
const Icons = (props) => {
  return (
    <div className="IconComponent">
      <img src={props.ctt.img} alt={props.ctt.title} />
      <h3>{props.ctt.title}</h3>
      <p>{props.ctt.explain}</p>
    </div>
  );
};

const CttBoard = () => {
  //useState 사용을 위한 배열
  let [ctt, setCtt] = useState([
    {
      id: 0,
      img: "",
      title: "후원",
      explain: "연극의 미래를 함께 만들어가는",
    },
    {
      id: 1,
      img: "",
      title: "공지사항",
      explain: "국립극단을 찾는 모든 분들에게 알려드리는",
    },
    {
      id: 2,
      img: "",
      title: "푸른티켓",
      explain: "청소년들이 부담없이 즐길 수 있는",
    },
    {
      id: 3,
      img: "",
      title: "어린이연구소",
      explain: "어린시절을 만나 나의 근원을 찾는",
    },
    {
      id: 4,
      img: "",
      title: "성폭력신고",
      explain: "폭력으로부터 안전한 공연예술문화를 만드는",
    },
  ]);
  return (
    <div className="cttBoard" style={{ position: "relative" }}>
      <Bg>
        <WrapText>
          <div
            className="wrapText"
            style={{
              position: "absolute",
              left: "50%",
              top: "38%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <HeadingSmall>
              <p>We, Do it</p>
              <p style={{ marginLeft: "5px", color: "red" }}>.</p>
            </HeadingSmall>
            <HeadingBig>
              <h2 style={{ fontWeight: 100 }}>오늘의 이야기를 발견하고</h2>
              <h2 style={{ fontWeight: 900 }}>
                내일의 연극을 준비하는 연극 플랫폼
              </h2>
            </HeadingBig>
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
        </WrapText>
        <WrapIcons>
          <div
            className="wrapIcons"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {ctt.map((a) => {
              return <Icons ctt={a} key={a.id} />;
            })}
          </div>
        </WrapIcons>
      </Bg>
    </div>
  );
};

export default CttBoard;
