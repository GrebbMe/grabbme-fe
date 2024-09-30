import { StyledChatButton } from '@/features/chat/ui/chatFeatureButton.style';

interface ChatFeatureButtonProps {
  img: string;
  onClick: () => void;
}

export const ChatFeatureButton = ({ img, onClick }: ChatFeatureButtonProps) => {
  return (
    <StyledChatButton onClick={onClick}>
      <img src={img} />
    </StyledChatButton>
  );
};
