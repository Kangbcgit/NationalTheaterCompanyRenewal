import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const SectionCatchPhrase = () => {
  //모달창 띄우려는 useState

  return (
    <div className="SectionCatchPhrase">
      <div className="wrapTxt">
        <h2>당연했던 극장에 던진 질문</h2>
        <h1>연극의 또다른 도전</h1>
      </div>
      <div className="wrapLine">
        <img src={`${process.env.PUBLIC_URL}/images/catchPhrase/line.svg`} />
      </div>
    </div>
  );
};
export default SectionCatchPhrase;
