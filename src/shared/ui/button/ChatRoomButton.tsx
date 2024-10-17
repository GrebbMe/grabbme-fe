import { inChatroom } from '@/shared/api/chatApi';

export const ChatRoomButton = () => {
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    inChatroom(95, 3, 1);
  };

  return <button onClick={handleClick}>Create Room</button>;
};
