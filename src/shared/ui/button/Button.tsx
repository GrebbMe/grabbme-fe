import { ReactNode } from 'react';
import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  type: 'recruitcompleted' | 'default' | 'aplycompleted';
  isThin?: boolean;
  children: ReactNode;
  width: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'default',
  onClick,
  isThin = false,
  children,
  width,
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} isThin={isThin} width={width}>
      {children}
    </StyledButton>
  );
};
