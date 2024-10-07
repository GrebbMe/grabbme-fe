import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

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
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.color.BLUE_10}
  }
 
  
`;
