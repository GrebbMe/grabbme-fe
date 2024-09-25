import { DefaultTheme } from 'styled-components';

const color = {
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
};

const typo = {
  title: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.5rem; 
    line-height: 140%;
  `,
  subtitleLarge: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 140%;
  `,
  subtitleMedium: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 140%;
  `,
  bodySemiBold: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1rem; 
    line-height: 140%;
  `,
  bodyMedium: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1rem; 
    line-height: 140%;
  `,
  captionLarge: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 0.875rem; 
    line-height: 140%;
  `,
  captionSmall: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 140%;
  `,
};

const device = {
  MOBILE: '@media (max-width: 37.5rem)',
  TABLET: '@media (max-width: 76.5rem)',
  DESKTOP: '@media (min-width: 76.5rem)',
};

export type ColorType = typeof color;
export type TypoType = typeof typo;
export type DeviceType = typeof device;

export const theme: DefaultTheme = {
  color,
  typo,
  device,
};
