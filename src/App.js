//Component
import Header from "./Component/Header/Header";
import SectionCatchPhrase from "./Component/CatchPhrase/SectionCatchPhrase";
import Play from "./Component/Play/Play";
import Audition from "./Component/Audition/Audition";
import Create from "./Component/Create/Create";
import CttBoard from "./Component/CttBoard/CttBoard";
import Sub02GreenTicket from "./Pages/Sub02GreenTicket/Sub02GreenTicket";
import Footer from "./Component/Footer/Footer";
//SCSS
import "./App.css";
import "./Component/Header/Header.scss";
import "./Component/CatchPhrase/SectionCatchPhrase.scss";
import "./Component/CttBoard/CttBoard.scss";
import "./Pages/Sub02GreenTicket/Sub02GreenTicket.scss";
import { useState, useEffect, useRef } from "react";
import {
  Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";

export default function App() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  const catchRef = useRef(null);
  const noneHeader = useRef(null);
  const cttRef = useRef(null);

  // handleScroll 함수
  const handleScroll = () => {
    if (
      window.scrollY > noneHeader.current.offsetTop &&
      window.scrollY < cttRef.current.offsetTop
    ) {
      setHeaderVisible(false);
      console.log("false");
    } else if (window.scrollY < noneHeader.current.offsetTop) {
      setHeaderVisible(true);
      console.log("true");
    } else if (window.scrollY > cttRef.current.offsetTop) {
      setHeaderVisible(true);
      console.log("true");
    } else {
      setHeaderVisible(null);
      console.log("n");
    }
    console.log("스크롤양: ", window.scrollY);
    console.log("headerVisible: ", headerVisible);
  };

  useEffect(() => {
    if (catchRef.current) {
      const height = catchRef.current.offsetTop;
      console.log("catchRef 시작점:", height);
    }

    if (noneHeader.current) {
      const height = noneHeader.current.offsetTop;
      console.log("noneHeader 시작점:", height);
    }
    if (cttRef.current) {
      const height = cttRef.current.offsetTop;
      console.log("cttRef 시작점:", height);
    }
  }, []);

  //서브페이지는 스크롤이벤트 없음
  useEffect(() => {
    // pathname이 "/Sub02GreenTicket"이 아닌 경우에만 스크롤 이벤트 리스너를 등록합니다.
    if (location.pathname !== "/Sub02GreenTicket") {
      window.addEventListener("scroll", handleScroll);
    }

    // 컴포넌트가 언마운트되거나 pathname이 "/Sub02GreenTicket"으로 변경될 때 스크롤 이벤트 리스너를 해제합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // location.pathname을 의존성으로 추가합니다.

  return (
    <div className="App">
      <Header headerVisible={headerVisible} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={catchRef}>
                <SectionCatchPhrase />
              </div>
              <div ref={noneHeader}>
                <Play />
                <Audition />
                <Create />
              </div>
              <div ref={cttRef}>
                <CttBoard />
              </div>
            </>
          }
        />
        <Route path="/Sub02GreenTicket" element={<Sub02GreenTicket />} />
      </Routes>
      <Footer />
    </div>
  );
}
