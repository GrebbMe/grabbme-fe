import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: flex;
  width: 36rem;
  height: 48.4rem;
  padding: 2.4rem 0;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.color.LIGHT_BLUE};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.BLUE_30} 0%,
    ${({ theme }) => theme.color.WHITE} 11.35%
  );
  box-shadow: 0 0 2.4rem 2rem rgba(29, 49, 82, 0.1);
`;

export const ChatRoomWrapper = styled.div`
  display: flex;
  width: 36rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 31.2rem;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TitleLabel = styled.span`
  text-align: center;
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
`;

export const MessageLabel = styled.span`
  text-align: center;
  ${({ theme }) => theme.typo.CAPTION_10};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: 40rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
