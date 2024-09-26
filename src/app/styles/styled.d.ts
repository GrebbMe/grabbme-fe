import 'styled-components';
import { color, typo, device } from '@/app/styles/index';

type ColorType = typeof color;
type TypoType = typeof typo;
type DeviceType = typeof device;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    typo: TypoType;
    device: DeviceType;
  }
}
