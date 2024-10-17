import { css, styled } from 'styled-components';

export const Header = styled.div`
  grid-column: 1/ -1;
  margin-block: 6.4rem 2.4rem;
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
`;

export const NickNameContainer = styled.div`
  grid-column: 3/ 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const EmailContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const TextFieldStyle = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 1.4rem 1.6rem;
  ${({ theme }) => css`
    ${theme.typo.CAPTION_14}
  `};
  background-color: ${({ theme }) => theme.color.BLUE_30};
  color: ${({ theme }) => theme.color.BLACK_80};
  border-radius: 0.8rem;
`;

export const PositionContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
export const StackContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
export const CategoryContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
export const CareerContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const ButtonContainer = styled.div`
  grid-column: 1/ -1;
  display: flex;
  justify-content: center;
`;

export const AgreementContainerStyle = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  margin-bottom: 4rem;
  padding: 0;
  ${({ theme }) => css`
    ${theme.typo.BODY_MEDIUM}
  `};
  color: ${({ theme }) => theme.color.GRAY_50};
`;

export const AgreementWrapperStyle = styled.div`
  display: flex;
  margin: 1.6rem 0 0 0;
  align-items: center;
  justify-content: left;
`;

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 0.8rem 0 0;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

export const CustomCheckboxLabel = styled.label`
  cursor: pointer;
`;

export const HrStyle = styled.hr`
  margin: 1.6rem 0;
  border: 0.05rem solid ${({ theme }) => theme.color.BLUE_30};
`;
