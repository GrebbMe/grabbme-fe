import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Pretendard from '@/shared/assets/font/PretendardVariable.woff2';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(${Pretendard}) format('woff2');
    font-weight: 100 900;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    font-family: 'Pretendard'
  }
  
`;
