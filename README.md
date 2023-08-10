![header](https://capsule-render.vercel.app/api?type=waving&color=0:665dff,100:5ee4ff&height=300&section=header&text=고양이%20해적단&fontSize=90&fontColor=ffffff)

# 국립극단 site renewal team project - 고양이 해적단

## 구성원 : 이고운(조장) 김정현 강병찬
![image](https://github.com/Kangbcgit/NationalTheaterCompanyRenewal/assets/93186451/9df76cc5-c4fc-49e3-92c3-8df4ce1e06db)

## 제작 기간: 30일 (2023.08.01 ~ 2023.08.31)

## 프로젝트 설명
  국립극단 홈페이지 리뉴얼 프로젝트 입니다. 국립극단 홈페이지는 연극을 관람하는 관람객 뿐만 아니라, 무대 위에서 자신만의 연기를 펼치고자 하는 배우들에게 오디션 정보를 제공해줍니다. 또한 다양한 연극적 가능성을 살펴보고 무대에서 구체화하는 작품개발사업의 일환으로 작가들의 동시대성 탐구를 통해 새로운 희곡 쓰기를 지향하는 ‘창작공감: 작가’, 주제별로 연출가들이 실험의 장을 펼치는 ‘창작공감: 연출’, 연중 상시로 우수 희곡을 발굴하는 플랫폼 ‘창작공감: 희곡’의 세 가지 사업을 추진합니다. 하지만 이러한 주된 활동을 메인 페이지에 시각적으로 노출시키지 않았으며, 뒷배경과 섹션간의 구분이 가질 않아 가독성이 떨어졌습니다. 이로인해 저희 고양이 해적단은 2023년도 트렌드 UI/UX 디자인을 기반으로 하여 사용자에게 웹 페이지간의 상호작용을 유도하며, 홈페이지의 주된 목적을 메인페이지에 노출시킴으로서 사용자에게 원하는 정보를 제공해주는 리뉴얼 프로젝트를 진행하게되었습니다.

  
## 개발 환경
+ 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
+ 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white"/>  및 클립스튜디오
+ 개발 언어 :
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/Lodash-3492FF?style=flat-square&logo=lodash&logoColor=white"/>

## 주요 기능
1. Scrollytelling
   
    스크롤리텔링은 2023 ui/ux디자인 트렌드 중 하나로서, 스크롤링과 스토리텔링의 조합을 스크롤리텔링이라고 합니다. 사용자가 스크롤할 때 긴 이야기를 동적으로 내레이션하는 기술입니다. 섹션 스크롤, 가로스크롤, 카드슬라이드 스크롤를 구현하여 사용자와 웹 페이지간의 상호작용을 유도함으로써, 몰입형 웹 경험을 제공합니다.
   
2. lodash 라이브러리를 이용한 디바운싱 및 쓰로틀링 작업

    모듈화, 성능 및 기타 기능을 제공하는 자바스크립트 유틸리티 라이브러리 입니다. 불필요한 렌더링을 막기 위해 lodash 라이브러리에 존재하는 _.throttle. 와 _.debounce를 사용 하였습니다. 특히 할당량에 제한이 있는 외부 api(kakao map)를 사용했기 때문에, 과도한 서버 요청을 막을 수 있도록 필수적으로 사용하였습니다.
   
3. Sass(Scss)

    CSS는 규모가 커질수록 코드가 복잡해지고, 유지보수가 불편해 집니다. CSS 코드 내에서 동일한 코드를 재사용하기 위해서 할 수 있는 유일한 조치는 '복사 & 붙여넣기' 뿐이며, 이러한 작업은 사용자에게 불편함과 실수를 유발하게 됩니다. Sass는 CSS의 확장언어로서 치명적 단점을 보완합니다. Sass는 코드 작성에 드는 시간을 줄여주고, 코드를 유지 관리하는 데 도움이 됩니다.

4. styled-components

    CSS를 컴포넌트화 시켜주는 라이브러리 입니다. CSS in JS 라이브러리인 styled-components를 사용하면, CSS도 쉽게 Javascript 안에 넣어줄 수 있습니다. HTML + JS + CSS까지 묶어서 하나의 JS파일 안에서 컴포넌트 단위로 개발을 할 수 있습니다.

## 링크

+  [브레인 스토밍](https://www.figma.com/file/S679fg8JLgH2zA5yGCaeTM/%EC%95%BD%ED%83%88-%EA%B3%B5%EB%AA%A8%EB%8B%A8?type=whiteboard&node-id=0%3A1&t=3retzeLsg7Rb3Ul8-1){: target="_blank"}

+ [와이어프레임 및 디자인](https://www.figma.com/file/MyqF41MZuZjrAp0r1cW8LA/%EA%B3%A0%EC%96%91%EC%9D%B4-%ED%95%B4%EC%A0%81%EB%8B%A8?type=design&node-id=259%3A1457&mode=design&t=O5P9Rev4PQLO8zDh-1){: target="_blank"}

+ 리뉴얼 사이트 - 추후 기입


![footer](https://capsule-render.vercel.app/api?type=rect&color=0:665dff,100:5ee4ff&height=180&section=header&text=읽어주셔서%20감사합니다&fontSize=40&fontColor=ffffff&animation=twinkling)

 
