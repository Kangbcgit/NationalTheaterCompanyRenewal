import React, { Component, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import AuditionItem from './AuditionItem';

const sizes = {
  mobile: 375,
}
const media = {
  mobile: `(max-width: ${sizes.mobile}px)`,
}

const Wrapper = styled.div`
  width: ${props=> props.isMobile ? '100vw' : 'calc(100vw - 10px)'};
  height: ${props => props.isMobile ? '100vh' : '200vh'};
  /* min-height: 1926px; */
  background: #fff;
`;  
const WrapTopContents = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  height: 100vh;

  overflow:hidden;
  @media ${media.mobile} {
    align-items: center;
  }
`;
const WrapTitle = styled.div`display: flex;
  flex-direction: column;

  margin: clamp(0px, 4.1667vw, 80px) 0  0 clamp(0px, 7.9167vw, 152px);
  
  &>span {
    font-family: EF_Rebecca;
    font-size: var(--create);
  }
  &>h6 {
    font-family: Interop;
    font-size: var(--h6);
    font-weight: 700;
  }
  @media ${media.mobile} {
    &>span {
      font-size: var(--h3);
    }
    &>h6 {
      width: 183px;
      margin-left: 37px;
      font-size: var(--xSmall);
    }
  }
`;
const WrapImg = styled.div`
  margin: clamp(0px, 4.1667vw, 80px) clamp(0px, 5.8333vw, 112px) 0 0;
  width: fit-content;
  height: fit-content;
  &>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${media.mobile} {
    width: 60px;
    height: 60px;
  }
`;
const FrameSectionAudition = styled.div`

  width: 100%;
`;

//총 길이를 어떤 기준으로 선정해야할지 > ?  감으로 200vh정도롤 설정함
const Items = styled.div`
  transform: translateX(${props => (props.transform + 'px') || 0});

  display: grid;
  grid-template-columns: repeat(${props => props.itemsLenght}, 500px);
  grid-auto-rows: 500px;
  gap: 60px;
  width: fit-content;
  height: 500px;
  
  transition: transform .1s;
  @media ${media.mobile} {
    grid-template-columns: repeat(${props => props.itemsLenght}, 294px);
    gap: 15px;
    margin-left: ${props => `${(props.currentWindowWidth - 294) / 2}px`};
  }
`;
const PageNation = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  &>.pageNationDot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #D9D9D9;
    &.activeDot {
      background: #666666;
    }
  }
`;

const SectionAudition = props => {
  const [ state, setState ] = useState({
    items: [
      {
        title: '스카팽',
        ApplicationPeriod: {
          start: '23.08.10',
          end: '23.08.24'
        }, //신청 기간
        location: '소극장 판',
        target: {
          start: 30,
          end: 40,
          gender: ['남자','여자'],
          special: false,
        }
      },
      {
        title: '소년이 그랬다',
        ApplicationPeriod: {
          start: '23.08.10',
          end: '23.09.10'
        },
        location: '소극장 판',
        target: {
          start: 20,
          end: 40,
          gender: ['남자'],
          special: false,
        }
      },
      {
        title: '극동 시베리아 순례길',
        ApplicationPeriod: {
          start: '23.08.15',
          end: '23.09.15'
        },
        location: '백성희장민호 극장',
        target: {
          start: 20,
          end: 40, 
          gender: ['여자'],
          special: true,
          hardText: '20대, 40대 여자 배우 각 1명'
        }
      },
      {
        title: '금조 이야기',
        ApplicationPeriod: {
          start: '23.08.20',
          end: '23.09.20'
        },
        location: '명동 예술 극장',
        target: {
          start: 20,
          end: 55,
          gender: ['남자','여자'],
          special: false,
        }
      },
      {
        title: '밤의 사막 너머',
        ApplicationPeriod: {
          start: '23.08.24',
          end: '23.10.10'
        },
        location: '명동 예술 극장',
        target: {
          start: 20,
          end: 30,
          gender: ['남자','여자'],
          special: false,
        }
      },
    ],
    MobileItemsCenterAlignmentData: [],
    currentActivePageNationDot: 0,
    year: new Date().getFullYear(),
    wrapperTop: 0,
    transform: 0,
    calcWidth: 0,
  })
  const wrapper = useRef(null);
  const items = useRef(null);
  let startTransform = 0;
  let startX = useRef(0);

  const mountItemsSet = () => {
    const newItems = state.items;
    state.items.forEach((item, index) => {
      const src = state.items[index].title;
      newItems[index].tag = `#${src}`;
      newItems[index].src = `images/audition/0${ 
        index + 1}${src}.svg`;
    });
    setState(prevState => ({...prevState, items: newItems}));
  };

  const desktopTranslateXEvent = () => {
    //모바일시 함수 발동 X
    if (props.isMobile) {
      return;
    } else {
      const wrapperElement = wrapper.current;
      const RectTop = wrapperElement.getBoundingClientRect().top;
      console.log('width' + props.currentWindowWidth)
      if (RectTop > 0) {
        setState(prevState => ({...prevState, transform: 0}));
        return;
      } else if(RectTop - window.innerHeight < -wrapperElement.scrollHeight) {
        setState(prevState => ({...prevState, transform: props.currentWindowWidth > 375 ? -state.calcWidth : -state.calcWidth - ((props.currentWindowWidth - 294))}));
        return;
      }
      setState(prevState => ({...prevState, wrapperTop: RectTop}));
      let calc = RectTop / (wrapperElement.clientHeight - window.innerHeight);
      setState(prevState => ({...prevState, transform: state.calcWidth * calc || 0}));
      console.log('is Mobile: ' + props.isMobile);
    }
  };
  const setFirstTouchLocation = e => {
    if (!props.isMobile) return;
    console.log('startX: ' + startX.current);
    console.log('state.transform: ' + state.transform);
    startTransform = state.transform;
    console.log('startTransform : ' + startTransform);
    startX.current = e.touches[0].pageX - state.transform;
    console.log('e.touches[0].pageX: ' + e.touches[0].pageX);
  }
  const setMoveTouchLocation = e => {
    if (!props.isMobile) return;
    let moveX = +e.touches[0].pageX;

    let deltaX = (moveX - startX.current);
    if (0 <= deltaX) return;
    if (-items.current.scrollWidth + props.currentWindowWidth - ((props.currentWindowWidth - 294))>= deltaX) return;
    setState(prevState => ({...prevState, transform: deltaX}));
  }
  const firstRenderingDataSet = () => {
    state.items.forEach((item, index) => {
      if (state.MobileItemsCenterAlignmentData.length >= state.items.length) return;
      let newArr = state.MobileItemsCenterAlignmentData;
      let data = items.current.scrollWidth / 5;
      let dataMinus = data - (data / 2);
      newArr.push([(data * index) - dataMinus, (data * (index + 1) - dataMinus)]);
      setState(prevState => ({...prevState, MobileItemsCenterAlignmentData: newArr}));
      console.log(state.MobileItemsCenterAlignmentData);
      console.log(items.current.scrollWidth);
    })
  }
  const setCurrentActivePageNationDot = (index = 0) => {
    setState(prevState => ({...prevState, transform: (-items.current.scrollWidth / 5 * index) - (3.75 * index)}));
    setState(prevState => ({...prevState, currentActivePageNationDot: (index) + 1}));
  }
  const clickPageNationDot = (index) => {
    setCurrentActivePageNationDot(index);
  }
  const mobileItemsCenterAlignment = () => {
    state.MobileItemsCenterAlignmentData.forEach((item, index) => {
      if (-state.transform >= item[0] && state.transform <= item[1]) {
        if (index === 0) {
          setState(prevState => ({...prevState, transform: (-items.current.scrollWidth / 5 * index)}));
          setCurrentActivePageNationDot(index);
          console.log('첫번째임')
          return;
        }
        setState(prevState => ({...prevState, transform: (-items.current.scrollWidth / 5 * index) - (3.75 * index)}));
        setCurrentActivePageNationDot(index);
      }
    })
    // state.MobileItemsCenterAlignmentData
  }

  //translateX 이벤트 + 최초 size측정 + resize 이벤트 할당
  useEffect(() => {
    setState(prevState => ({...prevState, calcWidth: (items.current.clientWidth - wrapper.current.clientWidth)}));
    setCurrentActivePageNationDot();
    mountItemsSet();
  },[props.currentWindowWidth]);
  useEffect(() => {
    window.addEventListener('scroll', desktopTranslateXEvent);
    return () => {
      window.removeEventListener('scroll', desktopTranslateXEvent);
    }
  },[props.isMobile,props.currentWindowWidth]);
  useEffect(() => {
    items.current.addEventListener('touchstart', setFirstTouchLocation);
    items.current.addEventListener('touchmove', setMoveTouchLocation);
    items.current.addEventListener('touchend', mobileItemsCenterAlignment);
    return () => {
      items.current.removeEventListener('touchstart', setFirstTouchLocation);
      items.current.removeEventListener('touchmove', setMoveTouchLocation);
      items.current.removeEventListener('touchend', mobileItemsCenterAlignment);
    }
  },[setMoveTouchLocation, startX.current, state.transform, props.currentWindowWidth]);
  useEffect(() => {
    firstRenderingDataSet();
  },[])
  return (
    <>
      <Wrapper ref={wrapper} isMobile={props.isMobile}>
      <WrapTopContents>
        <WrapTitle>
          <span>JOIN US?</span>
          <h6>국립극단에서 진행하는 오디션에는 배우라면 누구나 지원하실 수 있습니다.</h6>
        </WrapTitle>
        <WrapImg>
          <img src="images/audition/viewMore.svg" alt="" />
        </WrapImg>
        <FrameSectionAudition >
          <Items itemsLenght={state.items.length} transform={state.transform} ref={items} currentWindowWidth={props.currentWindowWidth}>
            {state.items.map((item, index) => {
              return (<AuditionItem order={`0${index + 1}`} item={item} year={state.year}/>)
            })}
          </Items>
          <PageNation>
          {props.isMobile ? state.MobileItemsCenterAlignmentData.map((item, index) => {
            return (<div className={`pageNationDot ${state.currentActivePageNationDot - 1 === index ? 'activeDot' : ''}`} onClick={() => {clickPageNationDot(index)}}></div>)
          }) : null}
          </PageNation>
        </FrameSectionAudition>
        </WrapTopContents>
      </Wrapper>
    </>
  );
}
export default SectionAudition
