import 'styled-components';
import { ColorType, DeviceType, TypoType, color, typo, device } from '@/app/styles/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    typo: TypoType;
    device: DeviceType;
  }
}
