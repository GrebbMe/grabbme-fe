import { StyledButton } from '@/shared/ui/button/button.style';

export interface ButtonProps {
  img?: string;
  state: 'default' | 'clicked';
  width: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({ state, img, width, label, onClick }: ButtonProps) => {
  return (
    <StyledButton state={state} width={width} img={img} label={label} onClick={onClick}>
      {img && <img src={img} />}
      {label}
    </StyledButton>
  );
};
