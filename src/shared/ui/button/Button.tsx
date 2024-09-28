import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  isThin?: boolean;
  img?: string;
  width: string;
  label: string;
}

export const Button = ({ isThin = false, img, width, label }: ButtonProps) => {
  return (
    <StyledButton isThin={isThin} width={width} img={img} label={label}>
      {img && <img src={img} />}
      {label}
    </StyledButton>
  );
};
