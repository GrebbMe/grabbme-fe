import { ReactNode } from 'react';
import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  type: 'recruitcompleted' | 'default' | 'aplycompleted';
  isThin?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ type = 'default', onClick, isThin = false, children }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} isThin={isThin}>
      {children}
    </StyledButton>
  );
};
