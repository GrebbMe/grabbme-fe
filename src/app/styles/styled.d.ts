import 'styled-components';

interface TypoProperties {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
}

type TypoKeys =
  | 'title'
  | 'subtitleLarge'
  | 'subtitleMedium'
  | 'bodySemiBold'
  | 'bodyMedium'
  | 'captionLarge'
  | 'captionSmall';

interface DeviceSize {
  desktop: string;
  tablet: string;
  mobile: string;
}

type ColorKeys =
  | 'white'
  | 'black100'
  | 'black80'
  | 'gray50'
  | 'gray30'
  | 'blue50'
  | 'blue30'
  | 'blue10'
  | 'primaryBlue'
  | 'pointPink';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      [key in ColorKeys]: string;
    };
    typo: {
      [key in TypoKeys]: { [key in keyof TypoProperties]: TypoProperties[key] };
    };
    deviceSize: {
      [key in keyof DeviceSize]: string;
    };
  }
}
