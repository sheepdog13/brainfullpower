import { createGlobalStyle } from "styled-components";
import NanumSquareNeo from "./fonts/NanumSquareNeo-bRg.ttf";
import PartialSansKRRegular from "./fonts/PartialSansKR-Regular.otf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "NanumSquareNeo";
    src: local("NanumSquareNeo"), local("NanumSquareNeo");
    font-weight: normal;
    src: url(${NanumSquareNeo}) format("truetype");
  }

  @font-face {
    font-family: "PartialSansKR-Regular";
    src: local("PartialSansKR-Regular"), local("PartialSansKR-Regular");
    font-weight: normal;
    src: url(${PartialSansKRRegular}) format("opentype");
  }
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
  body {
    font-family:'NanumSquareNeo','PartialSansKR', 'Noto Sans', sans-serif;
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
