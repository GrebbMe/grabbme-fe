import * as S from './FloatingButton.style';
import { IcChat, IcClose } from '@/shared/assets';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';
import { Button } from '@/shared/ui';

const FloatingButton = () => {
  const { openChatRoomList, isChatRoomListOpen, closeChatRoomList } = useChatNavigationStore();

  const handleClick = () => {
    if (isChatRoomListOpen) {
      closeChatRoomList();
    } else {
      openChatRoomList();
    }
  };
  return (
    <S.ButtonWrapper>
      <Button
        variant="circle"
        size="lg"
        icon={isChatRoomListOpen ? <IcClose /> : <IcChat />}
        onClick={handleClick}
      />
    </S.ButtonWrapper>
  );
};

export default FloatingButton;
