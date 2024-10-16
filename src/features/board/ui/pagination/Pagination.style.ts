import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PrevButton = styled.button<{ disabled: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-radius: 0.2rem 0 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.BLUE_10};
  margin-right: 1.6rem;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.color.BLUE_50};
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
    border-color: ${theme.color.GRAY_30};
    svg{
    fill: ${theme.color.GRAY_30}; 
    }
  `}
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-radius: 0 0.2rem 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.BLUE_10};
  margin-left: 1.6rem;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.color.BLUE_50};
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
    border-color: ${theme.color.GRAY_30};
    svg{
    fill: ${theme.color.GRAY_30};
    }
  `}
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const PageLink = styled(Link)<{ $isCurrent: boolean }>`
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.GRAY_30};
  text-decoration: none;

  ${({ $isCurrent, theme }) =>
    $isCurrent ? `color: ${theme.color.PRIMARY_BLUE} ;` : `color : ${theme.color.GRAY_30};`}

  &:hover {
    ${({ $isCurrent, theme }) =>
      !$isCurrent &&
      `
      color: ${theme.color.BLUE_50};
      text-decoration: none;
      `}
  }
`;
