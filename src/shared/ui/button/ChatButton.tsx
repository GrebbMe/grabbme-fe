import { StyledChatButton, StyledIcon } from '@/shared/ui/button/chatButton.style';

interface ChatButtonProps {
  onClick?: () => void;
  type: 'message' | 'image' | 'github';
}

const iconMap = {
  message: 'iconamoon:send',
  image: 'tabler:photo',
  github: 'mingcute:github-line',
};

export const ChatButton = ({ onClick, type }: ChatButtonProps) => {
  return (
    <StyledChatButton onClick={onClick}>
      <StyledIcon icon={iconMap[type]} />
    </StyledChatButton>
  );
};
