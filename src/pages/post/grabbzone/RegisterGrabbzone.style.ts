import { styled } from 'styled-components';

export const Header = styled.header`
  grid-column: 1/ -1;
  margin: 6.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-height: 7.2rem;
  span.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${({ theme }) => theme.typo.TITLE}
    color:${({ theme }) => theme.color.BLACK_100}
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${({ theme }) => theme.typo.BODY_SEMIBOLD}
    color: ${({ theme }) => theme.color.GRAY_50};
  }
`;

export const TitleInput = styled.div`
  grid-row: 2;
  grid-column: 3;
`;

export const EditorContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const JobContainer = styled.div`
  grid-column: 3 / span 3;
  margin-top: 3.2rem;
`;

export const CareerContainer = styled.div`
  display:flex
  flex-direction:column;  
  grid-column: 8 / span 3;
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const CategorySelectContainer = styled.div`
  grid-column: 3 / 11;
  grid-row: 5;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
export const StackSelectContainer = styled.div`
  grid-column: 3 / 11;
  grid-row: 6;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 22.1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;
