import IcCloseSmall from '@/shared/assets/svg/IcCloseSmall.svg?react';
import { StyledButton } from '@/shared/ui/select/RemoveButton.style';

interface RemoveButtonProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

export const RemoveButton = ({ children, onClick }: RemoveButtonProps) => (
  <StyledButton onClick={onClick}>
    {children}
    <IcCloseSmall />
  </StyledButton>
);
