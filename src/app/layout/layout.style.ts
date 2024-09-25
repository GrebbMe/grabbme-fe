import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  text-align: center;
  top: 0;
  left: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 5rem);
  grid-gap: 1.5rem;
  max-width: 76.5rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 76.5rem) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
    margin: 1.5rem;
  }

  ${({ theme }) => theme.device} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 1rem;
  }
`;

const GridItem = styled.div`
  background-color: ${({ theme }) => theme.color.BLUE_30};
  text-align: center;
  border: 1/16rem solid ${({ theme }) => theme.color.GRAY_30};
  box-sizing: border-box;
`;

export { HeaderContainer, FooterContainer, GridContainer, GridItem };
