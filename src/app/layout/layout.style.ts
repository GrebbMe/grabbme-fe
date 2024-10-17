import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 27.3rem);
`;

export const GridWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 1.6rem;
  }
`;

export const DashboardGridWrapper = styled.div`
  margin: 0 auto;
  column-gap: 2.4rem;
`;

export const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 1.6rem;
  }
`;
