import React, { Component } from 'react'
import { styled } from 'styled-components';
import AuditionItem from './AuditionItem';

const Wrapper = styled.div`
  width: calc(100vw - 10px);
  height: 200vh;
  background: #fff;
  
`;
const FrameSectionAudition = styled.div`
  position: sticky;
  top: 0;

  width: 100%;
  height: 50%;
`;

//총 길이를 어떤 기준으로 선정해야할지 > ?  감으로 200vh정도롤 설정함
const Items = styled.div`
  /* position: absolute;
  left: 0;
  bottom: 10%; */
  transform: translateX(${props => (props.transform + 'px') || 0});

  display: grid;
  grid-template-columns: repeat(${props => props.itemsLenght}, clamp(0px, 26.0417vw, 500px));
  grid-auto-rows: clamp(0px, 26.0417vw, 500px);
  gap: clamp(0px, 3.125vw, 60px);
  width: fit-content;
  height: clamp(0px, 26.0417vw, 500px);
`;

export default class SectionAudition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        (<></>),
        (<></>),
        (<></>),
        (<></>),
        (<></>),
        (<></>)
      ],
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
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.event);
  }
  event = () => {
    const wrapper = this.wrapper.current;
    const RectTop = wrapper.getBoundingClientRect().top;
    if (RectTop > 0) return;
    this.setState({wrapperTop: RectTop});
    let calc = RectTop / (wrapper.clientHeight - window.innerHeight);
    this.setState({transform: this.state.calcWidth * calc});
  }
  render() {
    return (
      <Wrapper ref={this.wrapper}>
        <FrameSectionAudition >
          <div style={{position: 'absolute', bottom: '10%', left: 0, width:"calc(100vw - 10px)", overflow : 'hidden'}}>
            <Items itemsLenght={this.state.items.length} transform={this.state.transform} ref={this.items}>
            <AuditionItem/>
            <AuditionItem/>
            <AuditionItem/>
            <AuditionItem/>
            <AuditionItem/>
            <AuditionItem/>
            </Items>
          </div>
        </FrameSectionAudition>
      </Wrapper>
    )
  }
}
