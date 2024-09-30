import { ButtonProps } from '@/shared/types/ButtonProps';
import { StyledButton } from '@/shared/ui/button/button.style';

export const Button = ({ state, content, size, onClick, icon }: ButtonProps) => {
  return (
    <StyledButton state={state} size={size} content={content} onClick={onClick}>
      {icon}
      {content}
    </StyledButton>
  );
};
