import styled from 'styled-components';

export const MessageContainer = styled.div<{ type: 'received' | 'sent' }>`
  display: inline-flex;
  align-items: flex-end;
  gap: 0.4rem;
  justify-content: ${({ type }) => (type === 'received' ? 'flex-start' : 'flex-end')};
  margin-bottom: 1.6rem;
  max-width: 60%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const DefaultProfileIcon = styled.div`
  width: 3em;
  height: 3rem;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ChatBubble = styled.div<{ type: 'received' | 'sent' }>`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.color.BLUE_30};
  color: ${({ theme }) => theme.color.BLACK_100};
  text-align: left;
  position: relative;
  white-space: normal;
  word-wrap: break-word;
`;

export const TextLabel = styled.p`
  margin: 0;
  ${({ theme }) => theme.typo.CAPTION_12};
  white-space: normal;
  word-wrap: break-word;
  text-align: left;
  display: inline;
`;

export const TimeLabel = styled.span`
  ${({ theme }) => theme.typo.CAPTION_10};
  color: ${({ theme }) => theme.color.GRAY_50};
  flex-shrink: 0;
`;
