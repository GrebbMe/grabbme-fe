import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Pretendard from '@/shared/assets/font/PretendardVariable.woff2';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(${Pretendard}) format('woff2');
    font-weight: 100 900;
  }
  
  html{
    font-size:62.5%;
  }
  *{
        box-sizing: border-box;
    }
  body {
    font-family: 'Pretendard';
    padding: 0;
    margin: 0;
  }
 
  
`;
