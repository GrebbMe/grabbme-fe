import 'styled-components';
import { ColorType } from './color';
import { DeviceType } from './device';
import { TypoType } from './typo';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    typo: TypoType;
    device: DeviceType;
  }
}
