import type { ChatRoom } from '@/entities/chat/ui/ChatRoomList';

export const sortChatRooms = (rooms: ChatRoom[]): ChatRoom[] => {
  return rooms.sort((a, b) => {
    if (a.isRead === b.isRead) {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    }
    return a.isRead ? 1 : -1;
  });
};
