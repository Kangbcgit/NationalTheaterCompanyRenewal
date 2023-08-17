/* eslint-disable */
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect,useRef,useState } from "react";
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
*/
const DivBar = styled.div``;
const CreateTitle = styled.div``;
const CardUl = styled.ul``;
const CreateDesc = styled.ul``;
const CreateWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: 5px solid black;
  font-size: 5rem;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  &>${DivBar}{
    width: 100%;
    height: 8px;
    background-color: #efefef;
    transform: translateY(50vh);
  }
  &>${CreateTitle}{
    position: absolute;
    left: 10%;
    top: 47%;
    width: 95%;
    transform: translateY(-50%);
    font-size: var(--createrem);
    font-family: "EF_Rebecca";
    color:var(--gray1);
  }
  &>${CardUl}{
    position: absolute;
    left: 49%;
    top: 21%;
    transform: translate(-50%,-21%);
    width: 45%;
    max-width: 540px;
    &>li{
      position: absolute;
        &>img{

        }
      }
  }
  &>${CreateDesc}{
    position: absolute;
    right: 10%;
    top: 47%;
    width: 24%;
    height: fit-content;
    max-width: 1600px;
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
/* styled component end */
gsap.registerPlugin(ScrollTrigger);

function Create() {
  const targetDesc01 = useRef(null);
  const targetDesc02 = useRef(null);
  const targetDesc03 = useRef(null);
  /* gsap start */
  useEffect(()=>{
    let windowWidth = gsap.matchMedia();
    windowWidth.add(
      "(min-width: 800px)",()=>{
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
            end: "bottom+=400% bottom",
          }
        });
        
        tl.to(".Author",{
          opacity:0,
          transformOrigin:'bottom left',
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

        tl.to(".Production",{
          opacity:0,
          transformOrigin:'bottom left',
          rotate:-10,
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

        tl.to(".Drama",{
          opacity:0,
          transformOrigin:'bottom left',
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
        },">2");



      },

    );

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  },[]);


  /* html start */
  return (
      <CreateWrap>
        <DivBar></DivBar>
        <CreateTitle><h2>"창작공감,</h2></CreateTitle>
        <CardUl>
          <li className="Drama"><img src={`${process.env.PUBLIC_URL}/create/poster-희곡.png`} /></li>
          <li className="Production"><img src={`${process.env.PUBLIC_URL}/create/poster-연출.png`} /></li>
          <li className="Author"><img src={`${process.env.PUBLIC_URL}/create/poster-작가.png`} /></li>
        </CardUl>
        <CreateDesc>
          <li className="active" ref={targetDesc01}><p>동시대적 질문 탐구</p></li>
          <li ref={targetDesc02}><p>연극적 실험</p></li>
          <li ref={targetDesc03}><p>교감과 연대</p></li>
        </CreateDesc>
    </CreateWrap>
  )
}

export default Create