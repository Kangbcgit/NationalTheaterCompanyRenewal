import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    /* size */
    /* body 기본 16px 기준 */
    --create: 6rem; /* 96px */
    --catch: 5.25rem; /* 84px */
    --h1: 4rem; /* 64px */
    --h2: 3rem; /* 48px */
    --h3: 2.25rem; /* 36px */
    --h4: 2rem; /* 32px */
    --h5: 1.88rem; /* 30px */
    --h6: 1.5rem; /* 24px */
    --title: 1.25rem; /* 20px */
    --baseSize: 1rem; /* 16px */
    --small: 0.88rem; /* 14px */
    --xSmall: 0.75rem; /* 12px */
    --min: 0.63rem; /* 10px */
    /* color */
    --primary: #D62424;
    --black1: #000;
    --black2: #333;
    --white: #fff;
    --gray1: #333;
    --gray2: #DEDCDC;
    --gray3: #EFEFEF;
    --gray4: #F9F9F9;
    ::-webkit-scrollbar {
      width: 10px; /* 스크롤바 너비 조정 */
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {background-color: #2B2E31}
    scroll-behavior: smooth;
  } 
  /* Reset */
* {
  outline: 0 !important;
}
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"); */
@font-face {
  font-family: "Interop";
  src: url("https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff2")
      format("woff2"),
    url("https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
@font-face {
  font-family: "EF_Rebecca";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_Rebecca.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
* {
  box-sizing: border-box;
}
a {
  color: inherit;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
blockquote,
pre,
code,
address,
ul,
ol,
li,
menu,
nav,
section,
article,
aside,
dl,
dt,
dd,
table,
thead,
tbody,
tfoot,
label,
caption,
th,
td,
form,
fieldset,
legend,
hr,
input,
button,
textarea,
object,
figure,
figcaption {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
}
html {
  /* font-size: 20px; */
}
body {
  width: 100%;
  min-width: 320px;
  -webkit-text-size-adjust: none;
  word-wrap: break-word;
  word-break: break-all;
  line-height: 1.2;
  font-family: "Interop";
  /* font-size: 20px; */
}
body,
input,
select,
textarea,
button {
  border: none;
  font-family: "Interop";
  color: #3B3B3B;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: inherit;
}
a {
  color: inherit;
}

ul,
ol,
li {
  list-style: none;
}
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
img,
fieldset {
  border: none;
}
address,
cite,
code,
em {
  font-style: normal;
  font-weight: normal;
}
label,
img,
input,
select,
textarea,
button {
  vertical-align: middle;
}
.hide,
caption,
legend {
  line-height: 0;
  overflow: hidden;
}
hr {
  display: none;
}
main,
header,
section,
nav,
footer,
aside,
article,
figure {
  display: block;
}
a {
  color: #262626;
  text-decoration: none;
}
/* Form */
textarea {
  border: 1px solid #DBDBDB;
}
select {
  height: 32px;
  /* font-size: 0.7rem; */
  color: #373737;
  border: 1px solid #E9E9E9;
  background: #fff;
  border-radius: 5px;
}
input[type="tel"],
input[type="time"],
input[type="text"],
input[type="password"],
input[type="search"],
input[type="email"],
input[type="file"],
input[type="url"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  height: 34px;
  color: #484848;
  border: none;
  background: #F2F2F2;
  text-indent: 17px;
  border-radius: 20px;
  vertical-align: middle;
}
input::-webkit-input-placeholder {
  color: #979797;
  line-height: 1;
}
textarea {
  padding: 5px 0;
}
select:focus,
textarea:focus,
input:focus {
  border: none;
}
input[type="tel"][readonly],
input[type="text"][readonly],
input[type="password"][readonly],
input[type="email"][readonly],
input[type="search"][readonly],
input[type="tel"][disabled],
input[type="text"][disabled],
input[type="password"][disabled],
input[type="search"][disabled],
input[type="email"][disabled] {
  background: #EAEAEA;
  border-color: #C0C0C0;
  color: #666;
}
textarea[readonly],
textarea[disabled] {
  padding: 11px;
  color: #666;
  font-weight: normal;
  height: 78px;
  background: #EAEAEA;
  border: 1px solid #C0C0C0;
}
`;