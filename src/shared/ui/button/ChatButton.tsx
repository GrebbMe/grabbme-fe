import { useState } from 'react';
import chat from '@/shared/assets/lets-icons_chat-fill.svg';
import close from '@/shared/assets/mingcute_close-fill.svg';
import { StyledFloatingChat, StyledFloatingClose } from '@/shared/ui/button/chatButton.style';

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return isOpen ? (
    <StyledFloatingClose onClick={handleClick}>
      <img src={close} />
    </StyledFloatingClose>
  ) : (
    <StyledFloatingChat onClick={handleClick}>
      <img src={chat} />
    </StyledFloatingChat>
  );
};
