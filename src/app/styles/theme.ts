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
  TITLE: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 2.4rem; 
    line-height: 140%;
  `,
  SUBTITE_20: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 2.0rem;
    line-height: 140%;
  `,
  SUBTITLE_14: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 140%;
  `,
  BODY_SEMIBOLD: `
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.6rem; 
    line-height: 140%;
  `,
  BODY_MEDIUM: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1.6rem; 
    line-height: 140%;
  `,
  CAPTION_14: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1.4rem; 
    line-height: 140%;
  `,
  CAPTION_12: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 140%;
  `,
  CAPTION_10: `
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1.0rem;
    line-height: 140%;
  `,
};

const device = {
  MOBILE: '(max-width: 60rem)',
  TABLET: '(min-width: 60rem) and (max-width: 122.3rem)',
  DESKTOP: '(min-width: 122.4rem)',
};
export type ColorType = typeof color;
export type TypoType = typeof typo;
export type DeviceType = typeof device;

export const theme: DefaultTheme = {
  color,
  typo,
  device,
};
