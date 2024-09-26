import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.TITLE};
  text-align: center;
  top: 0;
  left: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.TITLE};
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8rem);
  grid-gap: 2.4rem;
  max-width: 122.4rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid black;
  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 2.4rem;
    margin: 2.4rem;
  }
  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
    margin: 1.6rem;
  }
`;
export { HeaderContainer, FooterContainer, Container };
