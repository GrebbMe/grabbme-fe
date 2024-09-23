import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Pretendard from '@/shared/assets/font/PretendardVariable.woff2';

const GlobalStyle: ReturnType<typeof createGlobalStyle> = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(${Pretendard}) format('woff2');
    font-style: normal;
    font-weight: 100 900;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    display: flex;
    flex-direction: column;
  }
  
`;
export default GlobalStyle;
