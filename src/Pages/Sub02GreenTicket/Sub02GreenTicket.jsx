import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ReserveInfo = (props) => {
  return <li>{props.reserveInfo.list}</li>;
};
const NanumNotice = (props) => {
  return <li>{props.nanumNotice.list}</li>;
};
const Btn = (props) => {
  return (
    <Link>
      <h6>{props.btn.title}</h6>
      <img
        src={`${process.env.PUBLIC_URL}/images/sub02GreenTicket/${props.btn.img}`}
        alt={props.btn.title}
      />
    </Link>
  );
};

const Sub02GreenTicket = () => {
  //goReserve의 list
  let [reserveInfo, setReserveInfo] = useState([
    {
      id: 0,
      list: "푸른티켓 예매 문의 및 학생 단체 할인은 국립극단 홈페이지 또는 고객센터(1644-2003)로 연락주시기 바랍니다.",
    },
    {
      id: 1,
      list: "공연별 판매수량은 한정되어 있습니다. (명동예술극장은 S석에 한함)",
    },
    {
      id: 2,
      list: "공연 당일 매표소에서 티켓수령 시 예매자 본인의 생년월일을 확인 할 수 있는 신분증을 지참하시기 바랍니다. (증빙 확인, 양도 불가)",
    },
    {
      id: 3,
      list: " 신분증 미지참 혹은 예약시 정보와 다를 경우 차액을 지불하셔야 합니다.",
    },
  ]);
  //nanumNotice의 list
  let [nanumNotice, setNanumNotice] = useState([
    {
      id: 0,
      list: "개인 예매시, 예매 페이지에서 ‘문화누리카드 소지자’를 선택하시거나, 나눔티켓(https://www.nanumticket.or.kr/)홈페이지에서 국립극단의 공연을 선택하여 예매시 문화나눔 혜택을 받으실 수 있습니다.",
    },
    {
      id: 1,
      list: "문화누리카드 소지자 본인에 한하여 1매 할인이 적용됩니다.",
    },
    {
      id: 2,
      list: "할인 증빙을 위해 문화누리카드(실물)와 신분증을 필수로 지참하셔야 합니다.",
    },
    {
      id: 3,
      list: "반드시 문화누리카드 소지자 본인 이름(아이디)으로 직접 예매 및 관람 하셔야 합니다.",
    },
    {
      id: 4,
      list: "할인 증빙 자료 미지참 시 정가 기준의 차액을 지불하셔야 합니다.",
    },
    {
      id: 5,
      list: "양도 및 대리수령이 불가합니다.",
    },
    {
      id: 6,
      list: "관람 당일 할인 변경은 불가하며 1인 다수 할인 동시 적용이 불가합니다.",
    },
  ]);
  //바로가기 버튼
  let [btn, setBtn] = useState([
    {
      id: 0,
      title: "예매 바로가기",
      img: "goArrow.svg",
    },
    {
      id: 1,
      title: "한글파일 신청서 다운로드",
      img: "goArrow.svg",
    },
    {
      id: 2,
      title: "워드파일 신청서 다운로드",
      img: "goArrow.svg",
    },
  ]);
  return (
    <div className="Sub02GreenTicket">
      <div className="innerGreenTicket">
        <div className="GreenTicket">
          {/* 헤딩 텍스트 */}
          <div className="wrapTextGreenTicket">
            <div className="wrapTextGreenTicketTitle">
              <h1>푸른티켓</h1>
              <img
                src={`${process.env.PUBLIC_URL}/images/sub02GreenTicket/Sub02GreenTicketIcon.svg`}
                alt=""
              />
            </div>
            <div className="wrapTextGreenTicketInfo">
              <h4>[모두가 향유하는 문화예술]</h4>
              <p>
                청소년들이 부담 없이 연극을 즐길 수 있도록 관람비용을 지원하는
                푸른티켓과 공연관람기회 증대를 위해 예술을 함께 나누는
                문화나눔을 운영합니다.
              </p>
            </div>
          </div>
          <div className="titleGreenTicket">
            <p>01.</p>
            <h3>관람비가 부담되어 공연장에 들어서기 어려웠나요?</h3>
            <p>국립극단은 청소년 관객을 위한 ‘푸른티켓’을 운영합니다.</p>
          </div>
          <div className="detailGreenTicket">
            <div className="goReserve">
              <div className="goReserveBtn">
                {btn.map((i) => {
                  return <div key={i.id}>{i.id === 0 && <Btn btn={i} />}</div>;
                })}
              </div>
              <p>
                국립극단 홈페이지에서 예매하고자 하는 공연 선택 후 ‘할인/쿠폰’
                단계에서 ‘푸른티켓’ 권종선택
              </p>
              <ul>
                {reserveInfo.map((a) => {
                  return <ReserveInfo reserveInfo={a} key={a.id} />;
                })}
              </ul>
            </div>
            <div className="infoTicket">
              <ul>
                <li>대상: 관람일 기준 24세까지의 청소년</li>
                <li>지원내용 : 국립극단 공연 1만5천원에 관람 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Nanum">
        <div className="blackBg">
          <div className="innerNanum">
            <div className="wrapTextNanum">
              <p>02.</p>
              <h3>함께 나누는 예술의 즐거움</h3>
              <p>
                문화 향유의 기회가 닿지 않는 일부 관객층을 위해 일정 비율의
                좌석을 '문화나눔' 좌석으로 운영하고 있습니다.
              </p>
              <div className="goApply">
                <p>
                  참가를 원하시는 단체는 아래 신청서를 메일( jin0@ntck.or.kr )로
                  보내주시면 단체의 설립 목적, 참가취지 등을 확인 후 문화나눔
                  참가여부를알려드리겠습니다.
                </p>
                <div className="goApplyBtn">
                  {btn.map((i) => {
                    return <div>{i.id !== 0 ? <Btn btn={i} /> : null}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="innerNanum">
          <ul className="nanumNotice">
            {nanumNotice.map((b) => {
              return <NanumNotice nanumNotice={b} key={b.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sub02GreenTicket;
