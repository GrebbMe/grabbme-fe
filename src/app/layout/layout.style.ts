import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;
  min-height: calc(100vh - 7.2rem - 20.1rem);

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    margin: 1.6rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    margin: 1.6rem;
  }
`;

export { GridContainer, Container };
