import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ headerVisible, headerColor }) => {
  //모달창 띄우려는 useState
  const [modal, setModal] = useState(0);

  //햄버거버튼 클릭시 .gnbMenu-mobile이 나오도록 + 햄버거메뉴에는 .on을 추가/제거
  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정
  // 이 트리거 함수는 .gnbMenu-mobile이 isOpen된 상태에서 서브메뉴들을 클릭하여 각각 toggle된 상태에서 x를 눌러 다시 닫았다가 열었을 때, 열려있던 서브메뉴들이 다 닫힌 상태가 되도록 하기 위한 함수이다.
  const trigger = () => {
    if (!isOpen) {
      //각각 9개의 요소를 가진 배열들(li)이기 때문에 set으로 9개의 상태를 모두 false로 초기화해주어야 한다. 그렇지 않고 그냥 false만 쓰면 적용되지 않는다.
      setIsActive(Array(9).fill(false));
      setMenuToggle(Array(9).fill(false));
    }
  };

  //menuHoverBall-mobile 클래스추가
  const [isActive, setIsActive] = useState(
    Array(9).fill(false) // false값을 갖는 배열이 총 9개(.gnbMenu-mobile 개수만큼)
  );
  //.gnbMenu-mobile 클릭시 서브메뉴 토글
  const [menuToggle, setMenuToggle] = useState(Array(9).fill(false)); //false값을 갖는 배열이 총 9개(.gnbMenu-mobile 개수만큼)
  const menuOnOffAndToggleClass = (idx, e) => {
    //아래의 if문은 .wrapSubMenu-mobile의 각각의 li들을 클릭했을 때 상위 요소의 클릭이벤트가 함께 적용되어 토글이 닫히는 오류를 막기위한 코드로, li 안의 Link들에 각각 클래스를 따로 주어 선택된 타겟이 menulink라는 클래스를 가지고 있지 않을 때에만, 즉 서브메뉴의 하위 li들을 클릭했을 때에는 토글이 닫히지 않고 상위 메뉴인 .gnbMenu-mobile의 li를 클릭했을 때에만 클릭이벤트가 적용되어 토글이 닫히도록 하기 위함이다.
    if (!e.target.classList.contains("menulink")) {
      return;
    }
    //.gnbMenu-mobile > ul > li에 적용
    const newMenuToggle = menuToggle.map((value, j) =>
      j === idx ? !value : false
    );
    //.menuHoverBall-moblie에 적용
    const newIsActive = isActive.map((value, i) =>
      i === idx ? !value : false
    );

    setMenuToggle(newMenuToggle);
    setIsActive(newIsActive);
  };

  //createRef에서 헤더 색 바뀌고 cttRef에서 원상복귀
  const createHeaderColor = headerColor === true ? "black" : "";
  console.log("color props :", headerColor);

  //서브페이지 나누면서 헤더 색이 바뀜
  const location = useLocation();
  const subHeaderColor =
    location.pathname === "/Sub02GreenTicket" ? "black" : "";
  const subHeaderColor2 = location.pathname === "/Sub01Create" ? "black" : "";
  /*
  //주소가 /Sub01Create 일 때, 헤더 스크롤 이벤트
  const location2 = useLocation();
  const headerRef = useRef(null);
  useEffect(() => {
    const headerScrollSub01 = () => {
      if (location2.pathname === "/Sub01Create") {
        if (window.scrollY > 500 && window.scrollY < 5570) {
          // 스크롤 Y 위치가 500을 넘으면 hidden 클래스를 추가합니다.
          headerRef.current.classList.add("hidden");
        } else {
          // 스크롤 Y 위치가 500 이하이면 hidden 클래스를 제거합니다.
          headerRef.current.classList.remove("hidden");
        }
      }
    };
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", headerScrollSub01);

    // 컴포넌트가 언마운트 될 때 리스너 제거
    return () => {
      window.removeEventListener("scroll", headerScrollSub01);
    };
  }, [location.pathname]);
*/
  ///// 서브01창작공감 스크롤 이벤트 핸들러
  const headerScrollSub01 = () => {
    console.log("서브01 스크롤 양:", window.scrollY);
    const header = document.getElementById("Header");
    const getSub01WrapOffsetTop = parseInt(
      header.getAttribute("data-sub01-wrap-offset-top"),
      10
    );
    const getSub01WrapOffsetHeight = parseInt(
      header.getAttribute("data-sub01-wrap-scroll-height"),
      10
    );

    if (window.scrollY < getSub01WrapOffsetTop ) {
      // 스크롤 Y 위치가 Sub01Create 페이지의 시작이나 끝 지점보다 작거나 크면 헤더 표시
      header.classList.remove("hidden");
    } else {
      // 그 외의 경우에는 헤더 숨김
      header.classList.add("hidden");
    }
  };

  ///// 서브01창작공감 스크롤 이벤트 리스너 등록
  useEffect(() => {
    if (location.pathname == "/Sub01Create") {
      window.addEventListener("scroll", headerScrollSub01);
    }

    // 컴포넌트가 언마운트 될 때 리스너 제거
    return () => {
      window.removeEventListener("scroll", headerScrollSub01);
    };
  }, [location.pathname]);

  // 헤더가 보이지 않을 때 headerVisible은 false이므로 hidden 클래스를 추가
  const headerClass = headerVisible === true ? "" : "hidden";
  console.log("props:", headerVisible);

  return (
    <div>
      <header
        id="Header"
        className={`${headerClass} ${createHeaderColor} ${subHeaderColor} ${subHeaderColor2}`}
      >
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/로고수정04.svg`}
                alt=""
              />
            </Link>
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
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/catchPhrase/MagnifyingGlass.svg`}
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
            <Link>
              <div
                className={`wrapToggleBtn ${isOpen ? "on" : ""}`}
                onClick={() => {
                  setIsOpen(!isOpen); // isOpen 상태 토글
                  trigger();
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
            <div className="search-mobile">
              <Link
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(0, e)}
              >
                <Link className="menulink">공연안내</Link>
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
                onClick={(e) => menuOnOffAndToggleClass(1, e)}
              >
                <Link className="menulink">온라인 극장</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(2, e)}
              >
                <Link className="menulink">관객참여</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(3, e)}
              >
                <Link className="menulink">오디션</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(4, e)}
              >
                <Link className="menulink">커뮤니티</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(5, e)}
              >
                <Link className="menulink">이용안내</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(6, e)}
              >
                <Link className="menulink">고객센터</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(7, e)}
              >
                <Link className="menulink">정보공개</Link>
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
                className="gnbMenu-mobile"
                onClick={(e) => menuOnOffAndToggleClass(8, e)}
              >
                <Link className="menulink">국립극단</Link>
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/catchPhrase/UserCircle.svg`}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}images/catchPhrase/UserCirclePlus.svg`}
                />
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
