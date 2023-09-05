/* eslint-disable */
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import React, { useEffect,useRef ,useState } from "react";
import styled from "styled-components";
/* 
1.크리에이트 섹션 도달하면 고정되고
2.고정된 상태에서 스크롤 하면
3.포스터가 한장씩 날라감
4.단 날라가는 효과는 스크롤 내리면서 같이 날라가는게 아니라, 스크롤하고 한장 바로 날라가게

add class를 사용 해야 할지도 모름..

gsap onEnter : () =>{
  $('#header').addClass('none');
  $('._m .s_4 .bt .t, ._m .s_4 .count dl').removeClass('active');
  $('._m .s_4 .bt .t').eq(0).addClass('active');
  $('._m .s_4 .count dl').eq(0).addClass('active');
}
이런식으로 스크롤시 저렇게 행동시키도록 해야할듯??
리액트로 어떻게 해야할까?
--> ref로 해결
*/
/* 
--> gsap.pause() 이용해서 반응형일때 일시정지 되게 해야할듯???
연구 필요.

*/
const DivBar = styled.div``;
const CreateTitle = styled.div``;
const CardUl = styled.ul``;
const CreateDesc = styled.ul``;
const CreateWrap = styled.div`
 display: ${(props) => (props.isVisible ? "block" : "none")};
  width: 100%;
  height: 100vh;
  font-size: 5rem;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  &>${DivBar}{
    width: 100vw;
    height: 8px;
    background-color: #efefef;
    transform: translateY(50vh);
  }
  &>${CreateTitle}{
    position: absolute;
    left: 7%;
    top: 47%;
    transform: translateY(-50%);
    font-size: var(--catchrem);
    font-family: "EF_Rebecca";
    color:var(--gray1);
    @media screen and (max-width: 1579px) and (min-width: 758px) {
    font-size: clamp(3.5rem, 4.05vw, 4rem);
  }
  }
  &>${CardUl}{
    position: absolute;
    left: 50%;
    top: 21%;
    transform: translate(-50%,-21%);
    width: 45%;
    max-width: 540px;
    &>a{display:block;}
    &>a>li{
      position: absolute;
        &>img{
          width: 500px;
          height: 605px;
          object-fit: contain;
        }
      }
    &>a:nth-of-type(1)>li{
      transform: rotate(-4.51deg);
    }
    &>a:nth-of-type(2)>li{
      transform: rotate(5.63deg);
    }
    &>a:nth-of-type(3)>li{
      transform: rotate(15.58deg);
    }
  }
  &>${CreateDesc}{
    position: absolute;
    right: 10%;
    top: 47%;
    width: 22%;
    height: auto;
    transform: translate(10%,-50%);
    text-align: right;
    &>li{
      position: absolute;
      right: 0;
      font-size: 46px;
      color:var(--gray1);
      transform: translateY(-12%);
      overflow: hidden;
      @media screen and (max-width: 1579px) and (min-width: 758px) {
      font-size: clamp(24px, 2.28vw, 35px);
      }

      &>p{
        text-align: right;  
        transform: translateY(150%);
        transition: .4s ease-in-out
      }
    }
    &>li.active p{
      transform: translateY(-10%);
    }
  }
`;

/* 모바일 버전 */
const MobileCreateCards = styled.ul``;
const MobileCardsUL = styled.ul``;
const MobileCreateDesc = styled.div``;
const MobileBar = styled.div``;

const MobileCreateWrap = styled.div`
display: ${(props) => (props.isVisible ? 'none' : 'block')};
width: 100%; height: auto;
position: relative;
  &>h2{
    margin: 200px 0 ;
    font-size: clamp(4.4rem, 8.48vw, 5rem);
    font-family: "EF_Rebecca";
    color:var(--gray1);
    text-align: center;
  }
  &>${MobileBar}{
    width: 4px; height: 3500px;
    background-color: #f4f4f4;
    position: absolute;
    left: 50%;
    top: 7%;
    z-index: -1;
  }
  &>${MobileCreateCards}{
    position: relative;
    text-align: center;
  }
  &>${MobileCreateCards}>li{
    margin-bottom: 380px;
  }
  &>${MobileCreateCards}>li>a{
    display: block;
  }
  &>${MobileCreateCards}>li>a>${MobileCreateDesc}{
    font-size: var(--h6rem);
    font-weight: bold;
    margin: 3rem 0;
    &>.CardFirst{
      position: absolute;
      right: 10%; transform:translateY(-60px);
    }
    &>.CardThird{
      position: absolute;
      right: 10%; transform:translateY(-60px);
    }
    &>.CardSecond{position: absolute; left:10%; transform:translateY(-60px);}
  }
  &>${MobileCreateCards}>li>a>${MobileCardsUL}{
    position: relative;
    &>li{&>img{
          width: clamp(375px,59.36vw,420px);
          height: 505px;
          object-fit: contain;
        }}
    &>li:nth-of-type(1){
      position: relative;
      z-index:1;
      top: 0;
      left: 0;
      width: 100%;
      transform: rotate(-4.51deg);
    }
    &>li:nth-of-type(2){
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: rotate(5.63deg);
      z-index:2;
    }
    &>li:nth-of-type(3){
      z-index:3;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: rotate(15.58deg);
    }
  }
`;


/* styled component end */
gsap.registerPlugin(ScrollTrigger);

function Create() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const getWindowWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };
  const [isVisible, setIsVisible] = useState(true);
  const targetDesc01 = useRef(null);
  const targetDesc02 = useRef(null);
  const targetDesc03 = useRef(null);
  /* gsap start */


    useEffect(()=>{
      const handleResize = () => {
        setWindowInnerWidth(getWindowWidth());
        setIsVisible(getWindowWidth() >= 1082);
        // 창 크기를 조정할 때 ScrollTrigger를 초기화
        ScrollTrigger.getAll().forEach((instance) => {
          instance.kill();
        });
        initScrollTrigger();
      };


      const initScrollTrigger=()=>{
        if(isVisible){      
            const tl = gsap.timeline({
              default : {
                duration : 6,
                ease : "none"
            },
              scrollTrigger: {
                trigger: `${CreateWrap}`,
                pin: true,
                scrub: true,
                start: "top top",
                end: "bottom+=300% bottom",
              }
            });
           
            tl.to(`${CardUl} >a >.Author`,{
              opacity:0,
              transformOrigin:'bottom left-10px',
              rotate:10,
              xPercent:-5,
              yPercent:-5,
              duration: 0.8,
              onComplete: () =>{
                targetDesc01.current.classList.remove('active');
                targetDesc02.current.classList.add('active');
              },
              onReverseComplete : ()=>{
                targetDesc01.current.classList.add('active');
                targetDesc02.current.classList.remove('active');
              }
            },">2");
   
            tl.to( `${CardUl} >a >.Production`,{
              opacity:0,
              transformOrigin:'bottom left-10px',
              rotate:10,
              xPercent:-5,
              yPercent:-5,
              duration: 0.8,
              onComplete: () =>{
                targetDesc02.current.classList.remove('active');
                targetDesc03.current.classList.add('active');
              },
              onReverseComplete : ()=>{
                targetDesc02.current.classList.add('active');
                targetDesc03.current.classList.remove('active');
              }
            },">2");
   
            tl.to(`${CardUl} >a >.Drama`,{
              opacity:0,
              transformOrigin:'bottom left-10px',
              rotate:10,
              xPercent:-5,
              yPercent:-5,
              duration: 0.8,
              onComplete: () =>{
                targetDesc03.current.classList.remove('active');
              },
              onReverseComplete : ()=>{
                targetDesc03.current.classList.add('active');
              }
            },">2")

            ;}

        else if(!isVisible){
            const tl2 = gsap.timeline();

            tl2.to(`${MobileCardsUL}>li:nth-of-type(3)`,{
            rotate : 5,
            ease : "power2.inOut",
            duration : 5,
            yoyo : true,
            repeat : -1,
            });
            
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


  /* html start */
  return (
    <>
    {/* 데스크톱용 */}
    <CreateWrap isVisible={isVisible}>
        <DivBar></DivBar>
        <CreateTitle><h2>"창작공감,</h2></CreateTitle>
        <CardUl>
          <Link to='/Sub01Create'><li className="Drama"><img src={`${process.env.PUBLIC_URL}/images/create/poster-희곡.png`} /></li></Link>
          <Link to='/Sub01Create'><li className="Production"><img src={`${process.env.PUBLIC_URL}/images/create/poster-연출.png`} /></li></Link>
          <Link to='/Sub01Create'><li className="Author"><img src={`${process.env.PUBLIC_URL}/images/create/poster-작가.png`} /></li></Link>
        </CardUl>
        <CreateDesc>
          <li className="active" ref={targetDesc01}><p>동시대적 질문 탐구</p></li>
          <li ref={targetDesc02}><p>연극적 실험</p></li>
          <li ref={targetDesc03}><p>교감과 연대</p></li>
        </CreateDesc>
    </CreateWrap>
    {/* 모바일용 */}
    <MobileCreateWrap isVisible={isVisible}>
      <h2>"창작공감,</h2>
      <MobileBar></MobileBar>
      <MobileCreateCards>
        <li>
          <Link to='/Sub01Create'>
            <MobileCardsUL>
              <li className="Drama"><img src={`${process.env.PUBLIC_URL}/images/create/poster-희곡.png`} /></li>
              <li className="Production"><img src={`${process.env.PUBLIC_URL}/images/create/poster-연출.png`} /></li>
              <li className="Author"><img src={`${process.env.PUBLIC_URL}/images/create/poster-작가.png`} /></li>
            </MobileCardsUL>
            <MobileCreateDesc>
              <p className="CardFirst">동시대적 질문 탐구</p>
            </MobileCreateDesc>
          </Link>
        </li>
        <li>
          <Link to='/Sub01Create'>
            <MobileCardsUL>
              <li className="Author"><img src={`${process.env.PUBLIC_URL}/images/create/poster-작가.png`} /></li>
              <li className="Drama"><img src={`${process.env.PUBLIC_URL}/images/create/poster-희곡.png`} /></li>
              <li className="Production"><img src={`${process.env.PUBLIC_URL}/images/create/poster-연출.png`} /></li>
            </MobileCardsUL>
            <MobileCreateDesc>
              <p className="CardSecond">연극적 실험</p>
            </MobileCreateDesc>
          </Link>
        </li>
        <li>
          <Link to='/Sub01Create'>
            <MobileCardsUL>
              <li className="Production"><img src={`${process.env.PUBLIC_URL}/images/create/poster-연출.png`} /></li>
              <li className="Author"><img src={`${process.env.PUBLIC_URL}/images/create/poster-작가.png`} /></li>
              <li className="Drama"><img src={`${process.env.PUBLIC_URL}/images/create/poster-희곡.png`} /></li>
            </MobileCardsUL>
            <MobileCreateDesc>
              <p className="CardThird">교감과 연대</p>
            </MobileCreateDesc>
          </Link>
        </li>
      </MobileCreateCards>

    </MobileCreateWrap>
  </>
  )
}

export default Create