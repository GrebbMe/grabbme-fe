import React from 'react';
import * as S from './ChatInput.style';
import { IcSend, IcSendActive, IcPhoto, IcChatGithub } from '@/shared/assets';
import { Button } from '@/shared/ui';

export interface ChatInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhotoClick: () => void;
  onGithubClick: () => void;
  onSend: () => void;
}

const ChatInput = ({
  value,
  placeholder,
  onChange,
  onPhotoClick,
  onGithubClick,
  onSend,
}: ChatInputProps) => {
  const hasValue = value.trim().length > 0;

  return (
    <S.ChatContainer>
      <S.ChatWrapper>
        <Button variant="circle" size="sm" icon={<IcPhoto />} onClick={onPhotoClick} />
        <Button variant="circle" size="sm" icon={<IcChatGithub />} onClick={onGithubClick} />
        <S.InputField type="text" value={value} onChange={onChange} placeholder={placeholder} />
        <Button
          variant="circle"
          size="sm"
          icon={hasValue ? <IcSendActive /> : <IcSend />}
          onClick={onSend}
        />
      </S.ChatWrapper>
    </S.ChatContainer>
  );
};

export default ChatInput;
