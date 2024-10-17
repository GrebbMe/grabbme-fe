import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.TITLE};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80.8rem;
  height: 6.4rem;
  padding: 0 3.2rem 0 4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-radius: 10rem;
  box-shadow: 0rem 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;
  outline: none;
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
  ::placeholder {
    color: ${({ theme }) => theme.color.GRAY_50};
  }
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const Submit = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;
