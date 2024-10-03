import { styled } from 'styled-components';
import { TextFieldSize } from '@/shared/ui/textfield/Textfield.types';

export const Container = styled.div<{ size: TextFieldSize }>`
  ${({ size }) => `
    width: ${size === 'sm' ? '28.8rem' : size === 'md' ? '49.6rem' : '80.8rem'};
  `}
  margin-bottom: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
`;

export const CharCount = styled.span`
  color: ${({ theme }) => theme.color.GRAY_50};
  ${({ theme }) => theme.typo.CAPTION_12};
`;

export const Input = styled.input<{ hasValue: boolean }>`
  width: 100%;
  height: 4.8rem;
  outline: none;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.color.GRAY_50};
  ${({ theme }) => theme.typo.CAPTION_14};

  ${({ hasValue, theme }) =>
    hasValue &&
    `
      border-color: ${theme.color.BLUE_50};
      color: ${theme.color.BLACK_80};
    `}

  &:focus {
    border-color: ${({ theme }) => theme.color.BLUE_50};
    color: ${({ theme }) => theme.color.BLACK_80};
  }
`;
