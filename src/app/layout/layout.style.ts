import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.SUBTITLE_20};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_30};

  width: 100%;
  height: 7.2rem;
  padding: 1.7rem 0;
`;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.BLUE_10};
  border-top: 1px solid ${({ theme }) => theme.color.BLUE_30};
  ${({ theme }) => theme.typo.TITLE};
  width: 100%;
  height: 20.1rem;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.BLUE_10};
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

export const Margin = styled.div`
  background-color: ${({ theme }) => theme.color.BLUE_10};
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
    border: 1px solid blue;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    margin: 1.6rem;
    border: 1px solid red;
  }
`;

export { HeaderContainer, FooterContainer, GridContainer, Container };
