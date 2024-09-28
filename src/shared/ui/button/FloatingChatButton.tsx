import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { StyledFloatingChat, StyledFloatingClose } from './floatingChatButton.style';

export interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const FloatingChatButton = ({ onClick }: ChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onClick();
  };

  return isOpen ? (
    <StyledFloatingClose onClick={handleClick}>
      <Icon icon="mingcute:close-fill" width="36" height="36" />
    </StyledFloatingClose>
  ) : (
    <StyledFloatingChat onClick={handleClick}>
      <Icon icon="lets-icons:chat-fill" width="44.8" height="44.8" />
    </StyledFloatingChat>
  );
};
