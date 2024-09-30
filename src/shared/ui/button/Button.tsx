import { ButtonProps } from '@/shared/types/ButtonProps';
import { StyledButton } from '@/shared/ui/button/button.style';

export const Button = ({ state, img, content, size, onClick }: ButtonProps) => {
  return (
    <StyledButton state={state} size={size} img={img} content={content} onClick={onClick}>
      {img && <img src={img} />}
      {content}
    </StyledButton>
  );
};
