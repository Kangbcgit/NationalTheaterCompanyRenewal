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
  border: 1px solid #000;

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
      props.tossWrapperTopCalc(wrapperElement);
      const RectTop = props.tossWrapperTop;
      if (RectTop > 0) {
        setState(prevState => ({...prevState, transform: 0}));
        return;
      } else if(RectTop - window.innerHeight < -wrapperElement.scrollHeight) {
        setState(prevState => ({...prevState, transform: window.innerWidth > 375 ? -state.calcWidth : -state.calcWidth - ((window.innerWidth - 294))}));
        return;
      }
      setState(prevState => ({...prevState, wrapperTop: RectTop}));
      let calc = RectTop / (wrapperElement.clientHeight - window.innerHeight);
      setState(prevState => ({...prevState, transform: state.calcWidth * calc}));
      console.log('is Mobile: ' + props.isMobile);
      
    }
  };
  const setFirstTouchLocation = e => {
    if (!props.isMobile) return;
    console.log('startX: ' + startX.current);
    startTransform = state.transform;
    startX.current = e.touches[0].pageX - state.transform;
    console.log('e.touches[0].pageX: ' + e.touches[0].pageX);
    console.log('state.transform: ' + state.transform);
  }
  const setMoveTouchLocation = e => {
    if (!props.isMobile) return;
    let moveX = +e.touches[0].pageX;

    let deltaX = (moveX - startX.current);
    if (0 <= deltaX) return;
    if (-items.current.scrollWidth + window.innerWidth - ((window.innerWidth - 294))>= deltaX) return;
    setState(prevState => ({...prevState, transform: deltaX}));
  }
  //translateX 이벤트 + 최초 size측정 + resize 이벤트 할당
  useEffect(() => {
    setState(prevState => ({...prevState, calcWidth: (items.current.clientWidth - wrapper.current.clientWidth)}));
    mountItemsSet();
  },[]);
  useEffect(() => {
    window.addEventListener('scroll', desktopTranslateXEvent);
    return () => {
      window.removeEventListener('scroll', desktopTranslateXEvent);
    }
  },[props.tossWrapperTop, state.transform, props.isMobile]);
  //startX 초기화용
  useEffect(() => {
    startX = 0;
    console.log(startX)
  },[])
  useEffect(() => {
    items.current.addEventListener('touchstart', setFirstTouchLocation);
    items.current.addEventListener('touchmove', setMoveTouchLocation);
    return () => {
      items.current.removeEventListener('touchstart', setFirstTouchLocation);
      items.current.removeEventListener('touchmove', setMoveTouchLocation);
    }
  },[setMoveTouchLocation, startX.current])
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
        </FrameSectionAudition>
        </WrapTopContents>
      </Wrapper>
    </>
  );
}
export default SectionAudition
// export default class SectionAudition1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         {
//           title: '스카팽',
//           ApplicationPeriod: {
//             start: '23.08.10',
//             end: '23.08.24'
//           }, //신청 기간
//           location: '소극장 판',
//           target: {
//             start: 30,
//             end: 40,
//             gender: ['남자','여자'],
//             special: false,
//           }
//         },
//         {
//           title: '소년이 그랬다',
//           ApplicationPeriod: {
//             start: '23.08.10',
//             end: '23.09.10'
//           },
//           location: '소극장 판',
//           target: {
//             start: 20,
//             end: 40,
//             gender: ['남자'],
//             special: false,
//           }
//         },
//         {
//           title: '극동 시베리아 순례길',
//           ApplicationPeriod: {
//             start: '23.08.15',
//             end: '23.09.15'
//           },
//           location: '백성희장민호 극장',
//           target: {
//             start: 20,
//             end: 40, 
//             gender: ['여자'],
//             special: true,
//             hardText: '20대, 40대 여자 배우 각 1명'
//           }
//         },
//         {
//           title: '금조 이야기',
//           ApplicationPeriod: {
//             start: '23.08.20',
//             end: '23.09.20'
//           },
//           location: '명동 예술 극장',
//           target: {
//             start: 20,
//             end: 55,
//             gender: ['남자','여자'],
//             special: false,
//           }
//         },
//         {
//           title: '밤의 사막 너머',
//           ApplicationPeriod: {
//             start: '23.08.24',
//             end: '23.10.10'
//           },
//           location: '명동 예술 극장',
//           target: {
//             start: 20,
//             end: 30,
//             gender: ['남자','여자'],
//             special: false,
//           }
//         },
//       ],
//       year: new Date().getFullYear(),
//       wrapperTop: 0,
//       transform: 0,
//       calcWidth: 0,
//     }
//     this.wrapper = React.createRef();
//     this.items = React.createRef();

//     this.startX = 0;
//     this.startY = 0;
//   }
//   componentDidMount() {
//     window.addEventListener('scroll', this.desktopTranslateXEvent);
//     this.setState({calcWidth: (this.items.current.clientWidth - this.wrapper.current.clientWidth)});
//     this.mountItemsSet();
//   }
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.desktopTranslateXEvent);
//   }
//   mountItemsSet = () => {
//     const newItems = this.state.items;
//     this.state.items.forEach((item, index) => {
//       const src = this.state.items[index].title;
//       newItems[index].tag = `#${src}`;
//       newItems[index].src = `images/audition/0${ 
//         index + 1}${src}.svg`;
//     });
//     this.setState({items: newItems})
//   }
//   desktopTranslateXEvent = () => {
//     if (this.props.isMobile) return;
//     const wrapper = this.wrapper.current;
//     this.props.tossWrapperTopCalc(wrapper);
//     const RectTop = this.props.tossWrapperTop;
//     if (RectTop > 0) {
//       this.setState({transform: 0});
//       return;
//     } else if(RectTop - window.innerHeight < -wrapper.scrollHeight) {
//       this.setState({transform: window.innerWidth > 375 ? -this.state.calcWidth : -this.state.calcWidth - ((window.innerWidth - 294))});
//       return;
//     }
//     this.setState({wrapperTop: RectTop});
//     let calc = RectTop / (wrapper.clientHeight - window.innerHeight);
//     this.setState({transform: this.state.calcWidth * calc});
//   }
//   render() {
//     return (
//       <Wrapper ref={this.wrapper}>
//         <WrapTopContents>
//           <WrapTitle>
//             <span>JOIN US?</span>
//             <h6>국립극단에서 진행하는 오디션에는 배우라면 누구나 지원하실 수 있습니다.</h6>
//           </WrapTitle>
//           <WrapImg>
//             <img src="images/audition/viewMore.svg" alt="" />
//           </WrapImg>
//           <FrameSectionAudition >
//               <Items itemsLenght={this.state.items.length} transform={this.state.transform} ref={this.items}>
//                 {this.state.items.map((item, index) => {
//                   return (<AuditionItem order={`0${index + 1}`} item={item} year={this.state.year}/>)
//                 })}
//               </Items>
//           </FrameSectionAudition>
//         </WrapTopContents>
//       </Wrapper>
//     )
//   }
// }