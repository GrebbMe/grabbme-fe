import { styled } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.GRAY_50};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 27.9rem;
  user-select: none;
`;

const InputBox = styled.div`
  width: 12.8rem;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  border: 0.1rem solid #ddd;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.WHITE};
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export { Container, InputBox };
