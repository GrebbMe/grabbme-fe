import styled from 'styled-components';
import { typo } from '@/app/styles';

export const StackImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 100%;
`;

export const StackName = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  padding: 0.4rem 0rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.color.BLACK_80};
  ${typo.CAPTION_14};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover ${StackImg} {
    border-color: ${({ theme }) => theme.color.BLUE_50};
  }

  &:hover ${StackName} {
    border-color: ${({ theme }) => theme.color.BLUE_50};
  }
`;
