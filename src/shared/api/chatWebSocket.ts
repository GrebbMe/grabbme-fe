import { io } from 'socket.io-client';

const channelId = 4;
const socket = io('http://localhost:3005', {
  transports: ['websocket'],
  query: {
    channelId: channelId,
    userId: 3,
  },
});

export const sendMessage = () => {
  socket.emit('sendMessage', { channelId: channelId, content: '3번이 1번에게', senderId: 3 });
};

socket.on('sendMessage', (message) => {
  console.log('New message:', message);
});
socket.on('joinedRoom', (roomId) => {
  console.log(`Joined room: ${roomId}`);
});
