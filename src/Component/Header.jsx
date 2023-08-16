import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Header = () => {
  //모달창 띄우려는 useState
  const [modal, setModal] = useState(0);

  //햄버거메뉴 클릭시 .gnbMenu-mobile이 나오도록 + 햄버거메뉴에는 .on을 추가/제거
  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

  //햄버거 버튼에 나중에 className={'wrapToggleBtn ${isOpen == true ? "on":""}'} 추가

  // //menuHoverBall-mobile 클래스추가
  const [isActive, setIsActive] = useState(
    Array(9).fill(false) // false값을 갖는 배열이 총 9개(.gnbMenu-mobile 개수만큼)
  );
  // //.gnbMenu-mobile 클릭시 서브메뉴 토글
  const [menuToggle, setMenuToggle] = useState(Array(9).fill(false)); //false값을 갖는 배열이 총 9개(.gnbMenu-mobile 개수만큼)
  const menuOnOffAndToggleClass = (idx) => {
    const newMenuToggle = menuToggle.map((value, j) =>
      j === idx ? !value : false
    );

    const newIsActive = isActive.map((value, i) =>
      i === idx ? !value : false
    );

    setMenuToggle(newMenuToggle);
    setIsActive(newIsActive);
  };
  return (
    <div className="header">
      <header>
        <div className="inner">
          <div className="logo">
            <img src="../images/로고수정04.svg" alt="" />
          </div>
          {/* 데스크탑 메뉴 */}
          <ul className="gnb">
            <li className="gnbMenu">
              <Link to="/">공연안내</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">공연소개</Link>
                  </li>
                  <li>
                    <Link to="/">월간일정</Link>
                  </li>
                  <li>
                    <Link to="/">연간일정</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">온라인 극장</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">관객참여</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">오디션</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">오디션 게시판</Link>
                  </li>
                  <li>
                    <Link to="/">오디션 지원</Link>
                  </li>
                  <li>
                    <Link to="/">지원내역확인</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">커뮤니티</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">관람후기</Link>
                  </li>
                  <li>
                    <Link to="/">자유게시판 </Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">이용안내</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">예매안내</Link>
                  </li>
                  <li>
                    <Link to="/">좌석배치도</Link>
                  </li>
                  <li>
                    <Link to="/">오시는길</Link>
                  </li>
                  <li>
                    <Link to="/">시설안내</Link>
                  </li>
                  <li>
                    <Link to="/">제휴할인</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">고객센터</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">공지사항</Link>
                  </li>
                  <li>
                    <Link to="/">언론보도</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Q&A</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">정보공개</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">정보공개안내</Link>
                  </li>
                  <li>
                    <Link to="/">사전정보공개</Link>
                  </li>
                  <li>
                    <Link to="/">정보공개자료</Link>
                  </li>
                  <li>
                    <Link to="/">아카이브</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
            <li className="gnbMenu">
              <Link to="/">국립극단</Link>
              <div className="menuHoverBall">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wrapSubMenu">
                <ul>
                  <li>
                    <Link to="/">개요</Link>
                  </li>
                  <li>
                    <Link to="/">운영목표</Link>
                  </li>
                  <li>
                    <Link to="/">조직도</Link>
                  </li>
                  <li>
                    <Link to="/">작품개발</Link>
                  </li>
                  <li>
                    <Link to="/">어린이청소년극연구소</Link>
                  </li>
                  <li>
                    <Link to="/">시즌단원</Link>
                  </li>
                  <li>
                    <Link to="/">출판물</Link>
                  </li>
                </ul>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
                <div className="subMenuLine"></div>
              </div>
            </li>
          </ul>
          <ul className="wrapSign">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <img
                  src="../../images/catchPhrase/MagnifyingGlass.svg"
                  alt=""
                />
              </Link>
              {
                modal == true ? <Modal /> : null //기계역할
              }
              <div className="signHoverBall forSearch">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <Link to="/">로그인</Link>
              <div className="signHoverBall forSignIn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <Link to="/">회원가입</Link>
              <div className="signHoverBall forSignUp">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
          {/* 모바일 메뉴 */}
          <div className="wrapMobileLeft">
            <Link to="/">
              <div
                className={`wrapToggleBtn ${isOpen ? "on" : ""}`}
                onClick={() => {
                  setIsOpen(!isOpen); // isOpen 상태 토글
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
            <div className="search-mobile">
              <Link
                to="/"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <img
                  src="../../images/catchPhrase/MagnifyingGlass.svg"
                  alt=""
                />
              </Link>
              {
                modal == true ? <Modal /> : null //기계역할
              }
            </div>
          </div>
          <div className={`wrapGnb-mobile ${isOpen ? "view" : ""}`}>
            <ul className="gnb-mobile">
              <li
                className={`gnbMenu-mobile ${isActive[0] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(0)}
              >
                <Link to="/">공연안내</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[0] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[0] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">공연소개</Link>
                    </li>
                    <li>
                      <Link to="/">월간일정</Link>
                    </li>
                    <li>
                      <Link to="/">연간일정</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="gnbMenu-mobile"
                onClick={() => menuOnOffAndToggleClass(1)}
              >
                <Link to="/">온라인 극장</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[1] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[2] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(2)}
              >
                <Link to="/">관객참여</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[2] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[3] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(3)}
              >
                <Link to="/">오디션</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[3] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[3] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">오디션 게시판</Link>
                    </li>
                    <li>
                      <Link to="/">오디션 지원</Link>
                    </li>
                    <li>
                      <Link to="/">지원내역확인</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[4] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(4)}
              >
                <Link to="/">커뮤니티</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[4] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[4] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">관람후기</Link>
                    </li>
                    <li>
                      <Link to="/">자유게시판 </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[5] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(5)}
              >
                <Link to="/">이용안내</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[5] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[5] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">예매안내</Link>
                    </li>
                    <li>
                      <Link to="/">좌석배치도</Link>
                    </li>
                    <li>
                      <Link to="/">오시는길</Link>
                    </li>
                    <li>
                      <Link to="/">시설안내</Link>
                    </li>
                    <li>
                      <Link to="/">제휴할인</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[6] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(6)}
              >
                <Link to="/">고객센터</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[6] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[6] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">공지사항</Link>
                    </li>
                    <li>
                      <Link to="/">언론보도</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Q&A</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[7] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(7)}
              >
                <Link to="/">정보공개</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[7] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[7] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">정보공개안내</Link>
                    </li>
                    <li>
                      <Link to="/">사전정보공개</Link>
                    </li>
                    <li>
                      <Link to="/">정보공개자료</Link>
                    </li>
                    <li>
                      <Link to="/">아카이브</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={`gnbMenu-mobile ${isActive[8] ? "active" : ""}`}
                onClick={() => menuOnOffAndToggleClass(8)}
              >
                <Link to="/">국립극단</Link>
                <div
                  className={`menuHoverBall-mobile ${
                    isActive[8] ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`wrapSubMenu-mobile ${
                    menuToggle[8] ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">운영목표</Link>
                    </li>
                    <li>
                      <Link to="/">조직도</Link>
                    </li>
                    <li>
                      <Link to="/">작품개발</Link>
                    </li>
                    <li>
                      <Link to="/">어린이청소년극연구소</Link>
                    </li>
                    <li>
                      <Link to="/">시즌단원</Link>
                    </li>
                    <li>
                      <Link to="/">출판물</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <ul className="wrapSign-mobile">
            <li>
              <Link to="/">
                <img src="../../images/catchPhrase/UserCircle.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="../../images/catchPhrase/UserCirclePlus.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
function Modal() {
  //code ref: https://velog.io/@uni/React-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0
  return (
    <div className="modal">
      <input type="search" placeholder="검색어를 입력하세요." />
    </div>
  );
}
export default Header;
