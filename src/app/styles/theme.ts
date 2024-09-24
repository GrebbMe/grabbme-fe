import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primaryBlue: '#1D3152',
    pointPink: '#F14F4F',
    white: '#FFFFFF',
    black100: '#121212',
    black80: '#4D4D4DE',
    gray50: '#8a8888',
    gray30: '#D9D9D9',
    blue50: '#8E98A9',
    blue30: '#EDF0F5',
    blue10: '#FAFBFD',
  },
  typo: {
    title: {
      fontFamily: "'Pretendard'",
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '140%',
    },
    subtitleLarge: {
      fontFamily: "'Pretendard'",
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '140%',
    },
    subtitleMedium: {
      fontFamily: "'Pretendard'",
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '140%',
    },
    bodySemiBold: {
      fontFamily: "'Pretendard'",
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '140%',
    },
    bodyMedium: {
      fontFamily: "'Pretendard'",
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '140%',
    },
    captionLarge: {
      fontFamily: "'Pretendard'",
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '140%',
    },
    captionSmall: {
      fontFamily: "'Pretendard'",
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '140%',
    },
  },
  deviceSize: {
    mobile: '@media screen and max-width: 599px',
    tablet: '@media screen and min-width: 600px and max-width: 1023px',
    desktop: '@media screen and min-width: 1024px',
  },
};
