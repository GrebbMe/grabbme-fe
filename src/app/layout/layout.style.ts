import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.title};
  text-align: center;
  top: 0;
  left: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.title};
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 5rem);
  grid-gap: 1.5rem;
  max-width: 76.5rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid black;
  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
    margin: 1.5rem;
  }
  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 1rem;
  }
`;

export { HeaderContainer, FooterContainer, Container };
