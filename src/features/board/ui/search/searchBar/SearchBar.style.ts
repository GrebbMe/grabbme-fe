import { styled } from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  box-shadow: 0rem 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  border-radius: 10rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  width: 80.8rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  padding: 0 3.2rem 0 4rem;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) => theme.device.MOBILE} {
    width: 100%;
    height: 4.8rem;
    padding: 0 1.6rem;
  }
`;
export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};

  svg {
    cursor: pointer;
  }

  ${({ theme }) => theme.device.MOBILE} {
   svg{
   width: 2.4rem;
   height: 2.4rem;v}
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.typo.SUBTITLE_20}
  color: ${({ theme }) => theme.color.BLACK_100};
  width: 100%;
  flex-grow: 1;
  outline: none;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.GRAY_50};
  }

  ${({ theme }) => theme.device.MOBILE} {
    ${({ theme }) => theme.typo.CAPTION_14}
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`;
