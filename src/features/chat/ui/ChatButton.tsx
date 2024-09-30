import { useState } from 'react';
import { StyledFloatingChat, StyledFloatingClose } from '@/features/chat/ui/chatButton.style';
import chat from '@/shared/assets/lets-icons_chat-fill.svg';
import close from '@/shared/assets/mingcute_close-fill.svg';

export interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
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
        <img src={close} />
      </StyledFloatingClose>
    );
  } else {
    return (
      <StyledFloatingChat onClick={handleClick}>
        <img src={chat} />
      </StyledFloatingChat>
    );
  }
};
