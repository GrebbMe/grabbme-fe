import { StyledChatButton } from '@/shared/ui/button/chatFeatureButton.style';

interface ChatFeatureButtonProps {
  img: string;
}

export const ChatFeatureButton = ({ img }: ChatFeatureButtonProps) => {
  return (
    <StyledChatButton>
      <img src={img} />
    </StyledChatButton>
  );
};
