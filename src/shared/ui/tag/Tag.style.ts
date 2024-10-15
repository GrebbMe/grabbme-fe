import { styled } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.CAPTION_14}

  ${({ theme }) => theme.device.MOBILE} {
    height: 2rem;
    padding: 0.3rem 0.4rem;
    ${({ theme }) => theme.typo.CAPTION_10}
  }
`;
