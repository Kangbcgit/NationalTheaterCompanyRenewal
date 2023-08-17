import React, { Component } from 'react'
import { styled } from 'styled-components';
import AuditionItem from './AuditionItem';

const Wrapper = styled.div`
  width: calc(100vw - 10px);
  height: 200vh;
  min-height: 1926px;
  background: #fff;
  &>.wrapTopContents {
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    height: 963px;
    border: 1px solid #000;

    overflow:hidden;

    &>.wrapTitle {
      display: flex;
      flex-direction: column;

      margin: clamp(0px, 4.1667vw, 80px) 0  0 clamp(0px, 7.9167vw, 152px);

      &>.main {
        font-family: EF_Rebecca;
        font-size: var(--create);
      }
      &>.sub {
        font-family: Interop;
        font-size: var(--h6);
        font-weight: 700;
      }
    }
    &>.wrapImg {
      margin: clamp(0px, 4.1667vw, 80px) clamp(0px, 5.8333vw, 112px) 0 0;
    }
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
  gap: clamp(0px, 3.125vw, 60px);
  width: fit-content;
  height: 500px;
  
  transition: transform .1s;
`;

export default class SectionAudition extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      calcWidth: 0.
    }
    this.wrapper = React.createRef();
    this.items = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.event);
    this.setState({calcWidth: (this.items.current.clientWidth - this.wrapper.current.clientWidth)});
    this.mountItemsSet();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.event);
  }
  mountItemsSet = () => {
    const newItems = this.state.items;
    this.state.items.forEach((item, index) => {
      const src = this.state.items[index].title;
      newItems[index].tag = `#${src}`;
      newItems[index].src = `images/audition/0${ 
        index + 1}${src}.svg`;
    });
    this.setState({items: newItems})
  }
  event = () => {
    const wrapper = this.wrapper.current;
    this.props.tossWrapperTopCalc(wrapper);
    const RectTop = this.props.tossWrapperTop;
    console.log(RectTop);
    if (RectTop > 0) {
      this.setState({transform: 0});
      return;
    } else if(RectTop < -1000) {
      return;
    }
    this.setState({wrapperTop: RectTop});
    let calc = RectTop / (wrapper.clientHeight - window.innerHeight);
    this.setState({transform: this.state.calcWidth * calc});
  }
  render() {
    return (
      <Wrapper ref={this.wrapper}>
      <div className="wrapTopContents">
        <div className="wrapTitle">
          <span className='main'>JOIN US?</span>
          <h6 className='sub'>국립극단에서 진행하는 오디션에는 배우라면 누구나 지원하실 수 있습니다.</h6>
        </div>
        <div className="wrapImg">
          <img src="images/audition/viewMore.svg" alt="" />
        </div>
        <FrameSectionAudition >
          <div style={{position: 'absolute', bottom: 'clamp(0px, 4.1667vw, 80px)', left: 0, width:"calc(100vw - 10px)", overflow : 'hidden'}}>
            <Items itemsLenght={this.state.items.length} transform={this.state.transform} ref={this.items}>
              {this.state.items.map((item, index) => {
                return (<AuditionItem order={`0${index + 1}`} item={item} year={this.state.year}/>)
              })}
            </Items>
          </div>
        </FrameSectionAudition>
      </div>
        
      </Wrapper>
    )
  }
}