import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryBlue: string;
      pointPink: string;
      white: string;
      black100: string;
      black80: string;
      gray50: string;
      gray30: string;
      blue50: string;
      blue30: string;
      blue10: string;
    };
    typo: {
      title: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      subtitleLarge: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      subtitleMedium: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      bodySemiBold: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      bodyMedium: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      captionLarge: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
      captionSmall: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
    };
    deviceSize: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }
}

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
