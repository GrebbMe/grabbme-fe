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
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.TITLE};
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  border: 1px solid #000;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${({ theme }) => theme.device.DESKTOP} {
    grid-template-columns: repeat(12, 8rem);
    gap: 2.4rem;
    max-width: 122.4rem;
  }

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    gap: 2.4rem;
    margin: 2.4rem;
    border: 1px solid #3333;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    margin: 1.6rem;
    border: 1px solid red;
  }
`;

export { HeaderContainer, FooterContainer, Container };
