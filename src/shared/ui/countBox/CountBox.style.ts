import { styled } from 'styled-components';

export const Container = styled.div`
  width: 6.4rem;
  height: 2.4rem;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.GRAY_50};
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  background-color: ${({ theme }) => theme.color.BLUE_30};
  ${({ theme }) => theme.typo.CAPTION_10}
  border-radius: 0.4rem;
  gap: 0.4rem;
  white-space: nowrap;
  overflow: hidden;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    height: 1.8rem;
    width: 5.2rem;
    font-size: 0.8rem;
    gap: 0.3rem;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
