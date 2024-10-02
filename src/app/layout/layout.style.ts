import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.TITLE};
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
`;

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.color.BLUE_10};
  border-top: 1px solid ${({ theme }) => theme.color.BLUE_30};
  ${({ theme }) => theme.typo.TITLE};
  width: 100%;
  height: 20.1rem;
  position: fixed;
  bottom: 0;
`;

const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  border: 1px solid #000;

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

export { HeaderContainer, FooterContainer, GridContainer };
