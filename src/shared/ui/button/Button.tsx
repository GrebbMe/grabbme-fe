import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  img?: string;
  type: 'default' | 'clicked';
  width: string;
  label: string;
}

export const Button = ({ type, img, width, label }: ButtonProps) => {
  return (
    <StyledButton type={type} width={width} img={img} label={label}>
      {img && <img src={img} />}
      {label}
    </StyledButton>
  );
};
