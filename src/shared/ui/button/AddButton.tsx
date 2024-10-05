import PlusIcon from '@/shared/assets/svg/IcPlus.svg?react';
import { StyledButton } from '@/shared/ui/button/AddButton.style';

interface AddButtonProps {
  children: string;
  onClick?: () => void;
}

export const AddButton = ({ children, onClick }: AddButtonProps) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
    <PlusIcon />
  </StyledButton>
);
