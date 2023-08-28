import React, { Component } from 'react'
import { styled } from 'styled-components'
import MapNaver from './MapNaver';
import { Link } from 'react-router-dom';

const sizes = {
  mobile: 375,
}
const media = {
  mobile: `(max-width: ${sizes.mobile}px)`,
}

const FrameFooter = styled.footer`
  position: relative;
  background: #000;
  overflow: hidden;
`;
const WrapMaps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, clamp(0px, 42.1875vw, 810px));
  grid-auto-rows: 466px;
  column-gap: clamp(0px, 3.0208vw, 58px);

  width: fit-content;

  margin: 120px auto 100px;

  @media ${media.mobile} {
    grid-template-columns: 295px;
    grid-auto-rows: 188px;
    gap: 40px;
  }

`;
const WrapInfoCompany = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1678px;
  
  margin: 0 auto;
  padding-bottom: 25px;
  border-bottom: 1px solid #fff;
  @media ${media.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
const WrapLeftInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 900px;
  &>.wrapDesc {
    color: var(--white);
  }
  @media ${media.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
const WrapLogoLeft = styled(Link)`
  width: 133px;
  height: 133px;
  @media ${media.mobile} {
    margin-bottom: 30px;
  }
`;
const WrapDescLeft = styled.div`
  color: var(--white);
  &>h3 {
    font-size: var(--h4);
  }
  @media ${media.mobile} {
    width: 300px;
    &>h3 {
      font-family: EF_Rebecca;
      font-size: var(--h6);
      text-align: center;
      margin-bottom: 10px;
    }
    &>p {
      font-size: var(--xSmall);
      line-height: 1.7;
    }
  }
`;
const WrapRightInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;
  gap: 20px;
  

  /* border: 1px solid #fff; */
  width: 30%;

  &>.wrapGoTop {
    width: fit-content;
    cursor: pointer;
  }
  &>.wrapSns {
    display: flex;
    justify-content: space-between;

    width: 360px;
  }
  @media ${media.mobile} {
    width: 100%;
    align-items: center;
    &>.wrapSns {
      width: 280px;
      margin: 70px 0;
    }
    &>.wrapGoTop {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 40px;
      &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
`;

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 1678px;
  height: 100px;
  margin: 0 auto;


  color: var(--white);

  @media ${media.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    width: 312px;
    height: fit-content;
    font-size: var(--min);
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  color: inherit;

  /* border: 1px solid #fff; */
  &>a {
    color: var(--white);
  }
  @media ${media.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 312px;
    margin-bottom: 44px;
  }
`;
const Box = styled.div`
&>select {
  width:243px;
  height: 51px;
  background: var(--primary);
  border: none;
  color: var(--white);

  font-size: vaR(--title);
  text-align: center;
  &>option {
    background: var(--white);
    color: var(--primary);
    height: 51px;
  }
}
@media ${media.mobile} {
  overflow: hidden;
  &>select {
    font-size: var(--title);
    margin: 39px 0;
  }
}
`;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: [
        ['백성희장민호 극장 · 소극장 판', 37.552830916828576, 126.96829664985077],
        ['명동예술극장', 37.563999, 126.9841738]
      ]
    }
  }
  goTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  render() {
    return (
      <FrameFooter>
        <WrapMaps>
        {this.state.mapList.map((item, index) => {
          return (<MapNaver mapList={item}></MapNaver>)
        })}
        </WrapMaps>
        <WrapInfoCompany>
          <WrapLeftInfo>
            <WrapLogoLeft to='#none'>
              <img src={`${process.env.PUBLIC_URL}/images/footer/logoWhite.svg`} alt="" />
            </WrapLogoLeft>
            <WrapDescLeft>
              <h3>재단법인 국립극단</h3>
              <p>
                04302 서울특별시 용산구 청파로373 | 대표 : 김광보 <br/>
                이메일 : cs@ntck.or.kr | 유선번호 : 1644-2003 <br/>
                사업자등록번호 201-82-07107 | 통신판매업신고번호 제2012-서울용산-00305<br/>
                COPYRIGHT 2014 NATIONAL THEATER COMPANY OF KOREA RIGHTS RESERVED.
              </p>
            </WrapDescLeft>
          </WrapLeftInfo>
          <WrapRightInfo>
            <div className="wrapGoTop" onClick={this.goTop}>
              <img src={`${process.env.PUBLIC_URL}/images/footer/topBtn.svg`} alt="" />
            </div>
            <div className="wrapSns">
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/facebook.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/twitter.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/youtube.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/blog.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/instagram.svg`} alt="" />
              </a>
            </div>
          </WrapRightInfo>
        </WrapInfoCompany>
        <FooterLink>
          <Links>
            <Link to={'#none'}>회원서비스약관</Link>
            <Link to={'#none'}>개인정보처리방침</Link>
            <Link to={'#none'}>영상정보처리기기 운영방침</Link>
            <Link to={'#none'}>저작권정책</Link>
            <Link to={'#none'}>이메일무단수집거부</Link>
            <Link to={'#none'}>민원신청</Link>
            <Link to={'#none'}>CONTACT US</Link>
            <Link to={'#none'}>사이트맵</Link>
          </Links>
          <Box>
            <select name="" id="" placeholder='여기저기고르세요'>
              <option value="">관련기관 바로가기</option>
              <option value="">저기</option>
              <option value="">아무데나</option>
            </select>
          </Box>
        </FooterLink>
      </FrameFooter>
    )
  }
}
