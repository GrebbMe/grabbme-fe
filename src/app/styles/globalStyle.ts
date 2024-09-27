import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { PretendardMedium, PretendardRegular, PretendardSemibold } from '@/shared';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemibold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  html{
    font-size:62.5% !important
  }
  *{
        box-sizing: border-box;
    }
  body {
      font-family: "Pretendard-Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    padding: 0;
    margin: 0;
  }
 
  
`;
