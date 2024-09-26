export const device = {
  MOBILE: '@media (max-width: 37.5rem)',
  TABLET: '@media (min-width: 37.5rem) and (max-width: 76.5rem)',
  DESKTOP: '@media (min-width: 76.5rem)',
};
export type DeviceType = typeof device;
