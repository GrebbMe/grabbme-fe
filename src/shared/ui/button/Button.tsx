import { ReactElement } from 'react';
import * as S from './Button.style';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactElement;
  iconType?: 'bookmark' | 'list';
}

export const Button = ({ children, onClick, disabled = false, icon, iconType }: ButtonProps) => (
  <S.StyledButton onClick={onClick} disabled={disabled} icon={icon}>
    {icon && <S.IconWrapper iconType={iconType}>{icon}</S.IconWrapper>}
    {children}
  </S.StyledButton>
);
