import { create } from 'zustand';

interface ChatNavigationStore {
  isChatRoomOpen: boolean;
  isChatRoomListOpen: boolean;
  currentChatRoomId: string | null;
  openChatRoom: (chatRoomId: string) => void;
  closeChatRoom: () => void;
  openChatRoomList: () => void;
  closeChatRoomList: () => void;
}

export const useChatNavigationStore = create<ChatNavigationStore>((set) => ({
  isChatRoomOpen: false,
  isChatRoomListOpen: false,
  currentChatRoomId: null,

  openChatRoom: (chatRoomId: string) =>
    set(() => ({
      isChatRoomOpen: true,
      isChatRoomListOpen: false,
      currentChatRoomId: chatRoomId,
    })),

  closeChatRoom: () =>
    set(() => ({
      isChatRoomOpen: false,
      currentChatRoomId: null,
    })),

  openChatRoomList: () =>
    set(() => ({
      isChatRoomListOpen: true,
      isChatRoomOpen: false,
      currentChatRoomId: null,
    })),

  closeChatRoomList: () =>
    set(() => ({
      isChatRoomListOpen: false,
    })),
}));
