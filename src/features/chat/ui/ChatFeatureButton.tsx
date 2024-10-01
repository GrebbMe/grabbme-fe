import { StyledChatButton } from '@/features/chat/ui/chatFeatureButton.style';
import Github from '@/shared/assets/github.svg?react';
import Image from '@/shared/assets/photo.svg?react';
import Send from '@/shared/assets/send.svg?react';

type ChatFeature = 'send' | 'github' | 'image';

interface ChatFeatureButtonProps {
  icon: ChatFeature;
  onClick: () => void;
}

export const ChatFeatureButton = ({ icon, onClick }: ChatFeatureButtonProps) => {
  if (icon === 'send') {
    return (
      <StyledChatButton onClick={onClick}>
        <Send />
      </StyledChatButton>
    );
  } else if (icon === 'github') {
    return (
      <StyledChatButton onClick={onClick}>
        <Github />
      </StyledChatButton>
    );
  } else {
    return (
      <StyledChatButton onClick={onClick}>
        <Image />
      </StyledChatButton>
    );
  }
};
