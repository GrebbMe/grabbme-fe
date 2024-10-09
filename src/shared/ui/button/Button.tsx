import { ComponentPropsWithoutRef, ForwardedRef, forwardRef, ReactElement } from 'react';
import { StyledButton } from './Button.style';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'circle' | 'inactivePrimary' | 'inactiveSecondary';
  size?: 'sm' | 'lg';
  icon?: ReactElement;
}

const Button = (
  { variant = 'primary', size = 'sm', icon, children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <StyledButton variant={variant} size={size} icon={icon} {...props} ref={ref}>
      {icon}
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
