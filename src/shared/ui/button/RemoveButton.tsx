import CloseIcon from '@/shared/assets/svg/IcClose.svg?react';
import { StyledButton } from '@/shared/ui/button/RemoveButton.style';

interface RemoveButtonProps {
  children: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const RemoveButton = ({ children, onClick }: RemoveButtonProps) => (
  <StyledButton onClick={onClick}>
    {children}
    <CloseIcon />
  </StyledButton>
);
