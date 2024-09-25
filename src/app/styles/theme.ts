import { DefaultTheme } from 'styled-components';

interface TypoProperties {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
}

const typoStyles = ({ fontFamily, fontWeight, fontSize, lineHeight }: TypoProperties): string => {
  return `
    fontFamily : "${fontFamily}";
    fontWeight : ${fontWeight};
    fontSize : ${fontSize}rem;
    lineHeight : ${lineHeight}%;
    `;
};

export const theme: DefaultTheme = {
  color: {
    PRIMARY_BLUE: '#1D3152',
    POINT_PINK: '#F14F4F',
    WHITE: '#FFFFFF',
    BLACK_100: '#121212',
    BLACK_80: '#4D4D4DE',
    GRAY_50: '#8a8888',
    GRAY_30: '#D9D9D9',
    BLUE_50: '#8E98A9',
    BLUE_30: '#EDF0F5',
    BLUE_10: '#FAFBFD',
  },
  typo: {
    title: typoStyles({ fontFamily: 'Pretendard', fontWeight: 600, fontSize: 24, lineHeight: 140 }),
    subtitleLarge: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 140,
    }),
    subtitleMedium: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 140,
    }),
    bodySemiBold: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 140,
    }),
    bodyMedium: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 140,
    }),
    captionLarge: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 140,
    }),
    captionSmall: typoStyles({
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 140,
    }),
  },
  device: {
    MOBILE: '@media (max-width: 37.5rem)',
    TABLET: '@media (max-width: 76.5rem)',
    DESKTOP: '@media (min-width: 76.5rem)',
  },
};
export type ThemeType = typeof theme;
