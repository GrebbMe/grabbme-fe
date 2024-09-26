import 'styled-components';
import { ColorType } from './color';
import { DeviceType } from './device';
import { TypoType } from './typo';
import { color } from './color';
import { device } from './device';
import { typo } from './typo';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    typo: TypoType;
    device: DeviceType;
  }
}
