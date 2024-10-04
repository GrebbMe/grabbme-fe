import PlusIcon from '@/shared/assets/svg/IcPlus.svg?react';
import { StyledButton } from '@/shared/ui/button/AddStackButton.style';

interface AddStackButtonProps {
  children: string;
  onClick?: () => void;
}

const AddStackButton = ({ children, onClick }: AddStackButtonProps) => (
  <StyledButton onClick={onClick}>
    {children}
    <PlusIcon />
  </StyledButton>
);

export default AddStackButton;
