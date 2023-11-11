import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateNickname from "./pages/CreateNickname";
import Problem from "./pages/Problem";
import Result from "./pages/Result";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;

  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  /* transition: background-color 1s, color 0.1s, border 0.5s; */

  }
  @font-face {
    font-family: 'PartialSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'NanumSquareNeo-Variable';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  body {
    font-family:'NanumSquareNeo-Variable', 'Noto Sans', sans-serif;
    color: #212529;
    background-color: #12E382;
    background-image:
    linear-gradient(rgba(82, 82, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(82, 82, 255, 0.1)  1px, transparent 1px),
    linear-gradient(rgba(82, 82, 255, 0.1)  1px, transparent 1px),
    linear-gradient(90deg, rgba(82, 82, 255, 0.1)  1px, transparent 1px);
    background-size: 20px 20px, 20px 20px, 20px 20px, 20px 20px; 
    background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
    }
  a {
    text-decoration: none;
    color: inherit;
  }

  `;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nick" element={<CreateNickname />} />
        <Route path="/problem/:id" element={<Problem />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
