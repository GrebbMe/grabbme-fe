import { css } from 'styled-components';

export const device = {
  MOBILE: css`
    @media (max-width: 37.5rem);
  `,
  TABLET: css`
    @media (min-width: 37.5rem) and (max-width: 76.5rem);
  `,
  DESKTOP: css`
    @media (min-width: 76.5rem);
  `,
};
