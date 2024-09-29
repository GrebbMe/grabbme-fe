import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  isThin?: boolean;
  img?: string;
  type: 'default' | 'clicked';
  width: string;
  label: string;
}

export const Button = ({ type, isThin = false, img, width, label }: ButtonProps) => {
  return (
    <StyledButton type={type} isThin={isThin} width={width} img={img} label={label}>
      {img && <img src={img} />}
      {label}
    </StyledButton>
  );
};
