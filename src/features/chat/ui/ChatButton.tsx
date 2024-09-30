import { useState } from 'react';
import { StyledFloatingChat, StyledFloatingClose } from '@/features/chat/ui/chatButton.style';
import Chat from '@/shared/assets/chat-fill.svg?react';
import Close from '@/shared/assets/close.svg?react';
// import Close from '@/shared/assets/mingcute_close-fill.svg?react';

export interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: ChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    onClick();
    setIsOpen((prev) => !prev);
  };

  if (isOpen) {
    return (
      <StyledFloatingClose onClick={handleClick}>
        <Close />
      </StyledFloatingClose>
    );
  } else {
    return (
      <StyledFloatingChat onClick={handleClick}>
        <Chat />
      </StyledFloatingChat>
    );
  }
};
