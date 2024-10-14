import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: ${({ theme }) => theme.color.BLUE_30};
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  width: 6.4rem;
  height: 2.4rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`;

export const Text = styled.span`
  ${({ theme }) => theme.typo.CAPTION_10};
  color: ${({ theme }) => theme.color.GRAY_50};
  display: flex;
  align-items: center;
`;
