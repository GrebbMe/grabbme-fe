import axios from 'axios';
import { useCallback } from 'react';

export const useCreateChatRoom = () => {
  return useCallback(async (postId: number, senderId: number, receiverId: number) => {
    const response = await fetch('https://grabbme.store/api/chat/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, senderId, receiverId }),
    });

    const result = await response.json();
    console.log('result', result);
    if (result) {
      console.log(`채팅방 이름 : ${result.data.name}`);
    } else {
      console.error('채팅방 생성에 실패하였습니다.');
    }
  }, []);
};

export const inChatroom = async (postId: number, senderId: number, receiverId: number) => {
  try {
    const response = await axios.post('https://grabbme.store/api/chat/rooms', {
      postId,
      senderId,
      receiverId,
    });

    const result = response.data;

    if (result) {
      console.log(`채팅방 이름 : ${result.data.name}`); // result 구조 확인 필요
      return result.data;
    } else {
      console.error('채팅방 생성에 실패하였습니다.');
    }
  } catch (error) {
    console.error('채팅방 생성 중 오류가 발생하였습니다:', error);
  }
};

export const getChatRooms = async (userId: number) => {
  try {
    const response = await axios.get('http://localhost:3000/api/chat/rooms', {
      params: {
        userId: userId,
      },
    });
    const result = response.data;
    console.log('result:', result.data);
    if (result) {
      console.log(`성공 : ${result.data}`); // result 구조 확인 필요
      return result.data;
    } else {
      console.error('조회 실패');
    }
  } catch (error) {
    console.error('채팅방 목록 조회 중 오류가 발생하였습니다:', error);
  }
};

export const getChatRoom = async (channelId: number, userId: number) => {
  try {
    console.log('in api');
    const response = await axios.get(`http://localhost:3000/api/chat/rooms/${channelId}`, {
      params: { userId },
    });
    const result = response.data;
    console.log('result:', result.data);
    if (result) {
      console.log(`성공 : ${result.data}`); // result 구조 확인 필요
      return result.data;
    } else {
      console.error('조회 실패');
    }
  } catch (error) {
    console.error('채팅방 조회 중 오류가 발생하였습니다:', error);
  }
};

export const useGetChatRooms = () => {
  return useCallback(async (userId: number) => {
    const response = await fetch('http://localhost:3000/api/chat/rooms', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });

    const result = await response.json();
    console.log('result', result);
    if (result) {
      console.log(`채팅방 목록 : ${result}`);
      return result;
    } else {
      console.error('채팅방 목록 조회에 실패하였습니다.');
    }
  }, []);
};

export const useDeleteChatRoom = () => {
  return useCallback(async (chatRoomId: number) => {
    const response = await fetch(`http://localhost:3000/api/chat/rooms/${chatRoomId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(`id가 ${chatRoomId}인 채팅방이 삭제되었습니다.`);
      return response;
    } else {
      console.error('채팅방 삭제에 실패하였습니다.');
    }
  }, []);
};
