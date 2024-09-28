import { StyledChatButton } from '@/shared/ui/button/chatFeatureButton.style';

interface ChatFeatureButtonProps {
  onClick: () => void;
  img: string;
}

export const ChatFeatureButton = ({ onClick, img }: ChatFeatureButtonProps) => {
  return (
    <StyledChatButton onClick={onClick}>
      <img src={img} />
    </StyledChatButton>
  );
};
