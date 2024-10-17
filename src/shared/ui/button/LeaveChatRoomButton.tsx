import { useDeleteChatRoom } from '@/shared/api/chatApi';

export const LeaveChatRoomButton = () => {
  const leaveChatRoom = useDeleteChatRoom();

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    leaveChatRoom(8);
  };

  return <button onClick={handleClick}>Leave Room</button>;
};
