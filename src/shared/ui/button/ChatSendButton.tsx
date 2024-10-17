import { sendMessage } from '@/shared/api/chatWebSocket';

const ChatSendButton = () => {
  const handleMessage = () => {
    console.log('in handleMessage');
    sendMessage();
  };
  return <button onClick={handleMessage}>Send Chat</button>;
};

export default ChatSendButton;
