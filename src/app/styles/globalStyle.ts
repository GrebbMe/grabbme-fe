import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Pretendard from '@/shared/assets/font/PretendardVariable.woff2';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard';
    src: url(${Pretendard}) format('woff2');
    font-weight: 100 900;
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
