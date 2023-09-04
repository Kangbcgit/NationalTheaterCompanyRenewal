import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect,useRef,useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* 

3. 반응형 구조를 안바꾸고 하는 방법 생각해보기
1255 반응형일때 모바일버전으로 변함
*/

const LeftCBox = styled.div``;
const RightCBox = styled.div`
  display: block;
  @media screen and (max-width: 1254px){
    display: none; 
  }
`;

const ArrowImg = `${process.env.PUBLIC_URL}/images/create/arrow.png`;
const MbUl = styled.ul`
  display:${(props) => (props.isVisible ? "none" : "block")};
`;
const ArrowSpan = styled.span`
  display: inline-block;
  background: url(${ArrowImg})no-repeat center center;
  width: 32px;
  height: 18px;
  background-size: cover;
`;
const PoaText = styled.div`
  color:white;
  &>h3{
    font-weight:bold;
    font-size: 34px;
    margin-bottom: 15px;
    @media screen and (max-width: 1427px) and (min-width: 1255px) {
      font-size: 28px;
    }
  }
`;
const CreateAbout = styled.div`
  width: 95%; 
  margin: auto;
  padding: 250px 0 145px;
  &>.SbTit{
    font-size: 100px; font-weight: bold;
    color:black;
    padding-bottom: 0.55em;
    border-bottom: 1px solid #000000;
    margin-bottom: 0.9em;
  }
`;
const Sub01Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Sub01Section = styled.div`
  display: flex;
  &>${LeftCBox}{
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 100px;
    &>.TextTopBox{
      &>h2{
         font-size: 32px;
         line-height: 1.4;
         @media screen and (max-width: 1728px) and (min-width: 1427px){
          font-size: 28px;
        }
        @media screen and (max-width: 1427px) and (min-width: 1255px) {
          font-size: 26px;
        }
        &>strong{

        }
      }
    }
    &>.CircleBotBox{
      max-width: 690px;
      margin-left: 50px;
      @media screen and (max-width: 1728px) and (min-width: 1427px){
        max-width: 580px;
      }
      @media screen and (max-width: 1427px) and (min-width: 1255px) {
        max-width: 480px;
      }
      &>.CircleWrap{
        position: relative;
        background: #fff;
        &>.Bbx{
          width: 455px; height: 455px;
          padding: 2.5rem;
          border-radius: 50%;
          font-size: 20px;
          background: #000;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          flex-direction: column;
          z-index: 5;
          position: relative;
          @media screen and (max-width: 1728px) and (min-width: 1427px) {
            width: 355px; height: 355px;
            font-size: 18px;
          }
          @media screen and (max-width: 1427px) and (min-width: 1255px) {
              width: 300px; height: 300px;
              font-size: 16px;
          }
        }
        &>.RightCir{
          top: 0;
          right: 0%;
          text-align: right;
          mix-blend-mode: difference;
          background: #fff;
          position: absolute;
          &>${PoaText}{
            filter: invert(1);
          }
        }
        &>.MiddleCir{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;

          &>${PoaText}{
            filter: invert(1);
            &>h3{text-align:center;}
            &>p{text-align:center;}
          }
        }
      }
      &>.BoxSearch{
        margin-top: 80px;
        display: flex;
        justify-content: center;
        gap: 140px;
        @media screen and (max-width: 1728px) and (min-width: 1427px){
          gap: 70px;
        }
        @media screen and (max-width: 1427px) and (min-width: 1255px) {
          gap: 40px;
        }
        &>a{
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 24px;
          padding-bottom: .4rem;
          border-bottom: 1px solid #000;
          color:#000;
          @media screen and (max-width: 1728px) and (min-width: 1427px){
          font-size: 20px;
          gap: 10px;
        }
        @media screen and (max-width: 1427px) and (min-width: 1255px) {
          font-size: 18px;
          gap: 10px;
        }
          &>p{
            width: 180px;
            @media screen and (max-width: 1728px) and (min-width: 1427px){
              width: 160px;
            }
            @media screen and (max-width: 1427px) and (min-width: 1255px) {
              width: 140px;
            }
          }
        }
      }
    }
  }

  &>${RightCBox}{
    position: relative;
    flex: 0.7;
    max-width: 580px;
    margin-right: 50px;
    @media screen and (max-width: 1728px) and (min-width: 1427px){
      max-width: 450px;
    }
    @media screen and (max-width: 1427px) and (min-width: 1255px) {
      max-width: 400px;
    }
    &>.ChangeTit{
      position: relative;
      overflow: hidden;
      &>p{
        font-size: 36px;
        font-weight: bold;
        transition: .4s ease-in-out;
        @media screen and (max-width: 1728px) and (min-width: 1427px){
          font-size: 30px;
        }
        @media screen and (max-width: 1427px) and (min-width: 1255px) {
          font-size: 28px;
        }
      }
      &>p.active{
        transform: translateY(0%);
      }
      &>.TitFir{
        position: relative;
        top: auto;
        left: auto;
        transform: translateY(100%);
      }
      &>.TitSec{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        transform: translateY(100%);
      }
      &>.TitTHD{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        transform: translateY(100%);
      }
    }
    &>.ChangeImg{
      margin-top: 40px;
      position: relative;
      width: 580px; 
      height: 700px;
      overflow: hidden;
      @media screen and (max-width: 1728px) and (min-width: 1427px){
          width: 450px; height: 570px;
        }
        @media screen and (max-width: 1427px) and (min-width: 1255px) {
          width: 400px; height: 520px;
        }
      &>img{
        position: absolute;
        background-color: #000 no-repeat;
        object-fit: cover;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        transform-origin: top left;
      }
      &>.ChAuthor{
        z-index: 3;
      }
      &>.ChProduction{
        z-index: 2;
      }
      &>.ChDrama{
        z-index: 1;
      }
    }
    &>.CDWrap{
      position: relative;
      bottom: 20%;
      transform: translateX(-102%);
      color: #000;
      &>.ChangeDesc{
        position: absolute;
        width: 100%;
        line-height: 1.75;
        white-space: nowrap;

        &>div{
          font-size: 30px;
          text-align: right;
          transition: .4s ease-in-out;
          @media screen and (max-width: 1728px) and (min-width: 1427px){
            font-size: 24px;
          }
          @media screen and (max-width: 1427px) and (min-width: 1255px) {
            font-size: 22px;
          }
        }
        &>div.active{
          right: 0%;
        }
        &>.ChFirst{
          position: absolute;
          top: 0;
          right: -100%;
          overflow: hidden;
        }
        &>.ChSec{
          position: absolute;
          top: 0;
          right: -100%;
          overflow: hidden;
        }
        &>.ChThd{
          position: absolute;
          top: 0;
          right: -100%;
          overflow: hidden;
        }
      }
    }
  }
`;


gsap.registerPlugin(ScrollTrigger);

function Sub01Create() {
  const targetDesc01 = useRef(null);
  const targetTit01 = useRef(null);

  const targetTit02 = useRef(null);
  const targetDesc02 = useRef(null);

  const targetTit03 = useRef(null);
  const targetDesc03 = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const getWindowWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  useEffect(()=>{
    const handleResize = ()=>{
        setWindowInnerWidth(getWindowWidth());
        setIsVisible(getWindowWidth() >= 1255);
        // 창 크기를 조정할 때 ScrollTrigger를 초기화
        ScrollTrigger.getAll().forEach((instance) => {
          instance.kill();
        });
        initScrollTrigger();
    }

    const initScrollTrigger = ()=>{
      if(isVisible){
          gsap.fromTo('.SbTit', {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.easeOut"
          });
        
          gsap.fromTo('.TextTopBox', {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.13,
            ease: "power2.easeIn"
          });
      
          gsap.fromTo('.RightCir',{
            opacity: 0,
            xPercent: -40,
            
          },{
            opacity: 1,
            xPercent: 0,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});
      
          gsap.fromTo('.LeftCir',{
            opacity: 0,
            xPercent: 40,
          },{
            opacity: 1,
            xPercent: 0,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});
      
          gsap.fromTo('.MiddleCir',{
            opacity: 0,
            yPercent: 0,
          },{
            opacity: 1,
            yPercent: -40,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});   
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: `${Sub01Wrap}`, 
              pin: true,
              scrub: 0.3,
              start: "top-=10% top",
              end: "bottom+=400% bottom"
            }
          });
          tl.to('.ChAuthor', {
            yPercent: 100,
            duration:2,
            onComplete: () => {
              targetTit01.current.classList.remove('active');
              targetDesc01.current.classList.remove('active');
      
              targetTit02.current.classList.add('active');
              targetDesc02.current.classList.add('active');
            },
            onReverseComplete: () => {
              targetTit01.current.classList.add('active');
              targetDesc01.current.classList.add('active');
      
              targetTit02.current.classList.remove('active');
              targetDesc02.current.classList.remove('active');
            },
          },">2");
      
          tl.to('.ChProduction', {
            yPercent: 100,
            duration:2,
            onComplete: () => {
              targetTit02.current.classList.remove('active');
              targetDesc02.current.classList.remove('active');
      
              targetTit03.current.classList.add('active');
              targetDesc03.current.classList.add('active');
            },
            onReverseComplete: () => {
              targetTit02.current.classList.add('active');
              targetDesc02.current.classList.add('active');
      
              targetTit03.current.classList.remove('active');
              targetDesc03.current.classList.remove('active');
            },
          },">2");
      
          tl.to('.ChDrama',{
            opacity:1,
          },">2");
      }
      else if(!isVisible){
          gsap.fromTo('.SbTit', {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.easeOut"
          });
        
          gsap.fromTo('.TextTopBox', {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.13,
            ease: "power2.easeIn"
          });
      
          gsap.fromTo('.RightCir',{
            opacity: 0,
            xPercent: -40,
            
          },{
            opacity: 1,
            xPercent: 0,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});
      
          gsap.fromTo('.LeftCir',{
            opacity: 0,
            xPercent: 40,
          },{
            opacity: 1,
            xPercent: 0,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});
      
          gsap.fromTo('.MiddleCir',{
            opacity: 0,
            yPercent: 0,
          },{
            opacity: 1,
            yPercent: -40,
            duration: .8,
            scrollTrigger: {
              trigger: '.CircleBotBox', 
              start: "top-=100% top",
              toggleActions: "play pause none none" 
          }});   
      }
    }
    initScrollTrigger();
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      handleResize();
       window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  },[isVisible]);
  /////정현 추가 : header 스크롤 이벤트를 위한 컴포넌트 높이측정
  const sub01WrapRef = useRef(null); // Sub01Wrap 요소에 대한 참조
  ////// Sub01Wrap의 offsetTop 값을 계산하는 함수
  const getSub01WrapOffsetTop = () => {
    if (sub01WrapRef.current) {
      return sub01WrapRef.current.offsetTop;
    }
    return 0;
  };
  const getSub01WrapOffsetHeight = () => {
    if (sub01WrapRef.current) {
      console.log("창작공감 총 높이:", sub01WrapRef.current.scrollHeight);
      return sub01WrapRef.current.scrollHeight;
    }
    return 0;
  };

  useEffect(() => {
    // Header 컴포넌트에 offsetTop 값을 전달
    const header = document.getElementById("Header");
    const headerOffsetTop = getSub01WrapOffsetTop();
    const headerOffsetHeight = getSub01WrapOffsetHeight();
    // Header 컴포넌트로 offsetTop 값을 전달
    header.setAttribute("data-sub01-wrap-offset-top", headerOffsetTop);
    header.setAttribute("data-sub01-wrap-scroll-height", headerOffsetHeight);
  }, []);

  return (
    <>
      <CreateAbout>
        <h1 className="SbTit">창작공감</h1>
        <div ref={sub01WrapRef}>
          <Sub01Wrap>
            <Sub01Section>
              <LeftCBox>
                <div className="TextTopBox">
                  <h2>
                    <strong>&#91;창작공감&#93;</strong>은 다양한 <strong>연극적 가능성</strong>을 살펴보고 <br></br>
                    <strong>무대에서 구체화</strong>하는 <strong>작품개발사업</strong>입니다.
                  </h2>
                </div>

                <div className="CircleBotBox">
                  <div className="CircleWrap">
                    <div className="LeftCir Bbx">
                      <PoaText>
                        <h3>작가</h3>
                        <p>동시대적 질문 탐구</p>
                      </PoaText>
                    </div>

                    <div className="RightCir Bbx">
                      <PoaText>
                        <h3>희곡</h3>
                        <p>교감과 연대</p>
                      </PoaText>
                    </div>

                    <div className="MiddleCir">
                      <PoaText>
                        <h3>연출</h3>
                        <p>연극적 실험</p>
                      </PoaText>
                    </div>
                    
                  </div>

                  <div className="BoxSearch">
                    <Link to='/Sub01Create' className="PriBtn">
                      <p>국립극단 출판물</p>
                      <ArrowSpan></ArrowSpan>
                    </Link>
                    <Link to='/Sub01Create' className="AchBtn">
                      <p>디지털 아카이브</p>
                      <ArrowSpan></ArrowSpan>
                    </Link>
                  </div>

                </div>
              </LeftCBox>

              <RightCBox isVisible={isVisible}>
                <div className="ChangeTit">
                  <p className="TitFir active" ref={targetTit01}>01_창작공감, 작가</p>
                  <p className="TitSec" ref={targetTit02}>02_창작공감, 연출</p>
                  <p className="TitTHD" ref={targetTit03}>03_창작공감, 희곡</p>
                </div>

                <div className="ChangeImg">
                  <img className="ChAuthor" src={`${process.env.PUBLIC_URL}/images/create/작가.png`}/>
                  <img className="ChProduction" src={`${process.env.PUBLIC_URL}/images/create/연출.png`}/>
                  <img className="ChDrama" src={`${process.env.PUBLIC_URL}/images/create/희곡.png`}/>
                </div>
                
                <div className="CDWrap">
                  <div className="ChangeDesc">
                    <div className="ChFirst active" ref={targetDesc01}>
                      <p>#동시대성 탐구</p>
                      <p>#새로운 희곡 쓰기</p>
                      <p>#스터디, 워크숍, 합평회</p>
                    </div>
                    <div className="ChSec" ref={targetDesc02}>
                      <p>#자유로운 형식</p>
                      <p>#다양한 논의</p>
                      <p>#연극적 실험의 장</p>
                    </div>
                    <div className="ChThd" ref={targetDesc03}>
                      <p>#연극의 새로운 가능성 제시</p>
                      <p>#온라인 상시투고</p>
                      <p>#우수희곡 발굴</p>
                    </div>
                  </div>
                </div>
              </RightCBox>

            </Sub01Section>
            {/* 모바일 버전일때 영역 제대로 잘 나오도록  수정 */}
            <MbUl isVisible={isVisible}>
              <li>
                <p>01_창작공감, 작가</p>
                <img className="mobAuthor" src={`${process.env.PUBLIC_URL}/images/create/작가.png`}/>
                <div className="mobFirst">
                  <p>#동시대성 탐구</p>
                  <p>#새로운 희곡 쓰기</p>
                  <p>#스터디, 워크숍, 합평회</p>
                </div>
              </li>
              <li>
                <p>02_창작공감, 연출</p>
                <img className="mobAuthor" src={`${process.env.PUBLIC_URL}/images/create/연출.png`}/>
                <div className="mobFirst">
                  <p>#자유로운 형식</p>
                  <p>#다양한 논의</p>
                  <p>#연극적 실험의 장</p>
                </div>
              </li>
              <li>
                <p>03_창작공감, 희곡</p>
                <img className="mobAuthor" src={`${process.env.PUBLIC_URL}/images/create/희곡.png`}/>
                <div className="mobFirst">
                  <p>#연극의 새로운 가능성 제시</p>
                  <p>#온라인 상시투고</p>
                  <p>#우수희곡 발굴</p>
                </div>
              </li>
            </MbUl>

          </Sub01Wrap>
        </div>

      </CreateAbout>
    </>
  )
}

export default Sub01Create