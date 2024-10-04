import CloseIcon from '@/shared/assets/svg/IcClose.svg?react';
import { StyledButton } from '@/shared/ui/button/RemoveStackButton.style';

interface SubButtonProps {
  children: string;
  onClick?: () => void;
}

const RemoveButton = ({ children, onClick }: SubButtonProps) => (
  <StyledButton onClick={onClick}>
    {children}
    <CloseIcon />
  </StyledButton>
);

export default RemoveButton;
