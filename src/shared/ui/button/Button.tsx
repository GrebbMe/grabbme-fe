import { ComponentPropsWithoutRef, forwardRef, ReactElement } from 'react';
import { StyledButton } from './Button.style';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'circle' | 'inactivePrimary' | 'inactiveSecondary';
  size: 'sm' | 'lg';
  icon?: ReactElement;
}

const Button = forwardRef<HTMLButtonElement>(({ variant, size, icon, children, ...props }, ref) => {
  return (
    <StyledButton variant={variant} size={size} icon={icon} {...props} ref={ref}>
      {icon}
      {children}
    </StyledButton>
  );
});

export default Button;
