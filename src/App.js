import { Component } from 'react';
import './App.css';
import { GlobalStyle } from './Component/Common/Common';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import SectionPlay from './Component/SectionPlay/SectionPlay';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      WrapperTop: 0,
    }
  }

  componentDidMount() {

  }
  /** audition section에서 사용중 */
  propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    this.setState({WrapperTop: WrapperTop});
  }

  render () {
    return (
      <>
        <GlobalStyle/>
        <SectionPlay/>
        <SectionAudition tossWrapperTopCalc={this.propsRectTop} tossWrapperTop={this.state.WrapperTop}/>
      </>
    );
  }
}
