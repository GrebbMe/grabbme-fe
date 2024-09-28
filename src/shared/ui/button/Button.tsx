import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  isThin?: boolean;
  img?: string;
  width: string;
  label: string;
  onClick: () => void;
}

export const Button = ({ onClick, isThin = false, img, width, label }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} isThin={isThin} width={width} img={img} label={label}>
      {img && <img src={img} />}
      {label}
    </StyledButton>
  );
};
