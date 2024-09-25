import 'styled-components';
import { ColorType, TypoType, DeviceType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    typo: TypoType;
    device: DeviceType;
  }
}
