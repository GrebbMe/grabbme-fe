import styled from 'styled-components';

export const ChatPreviewContainer = styled.div<{ isRead: boolean }>`
  display: flex;
  padding: 1.6rem 2.4rem;
  align-items: flex-start;
  cursor: pointer;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.BLUE_30};
  transition: background-color 0.2s ease;
  ${({ isRead, theme }) =>
    isRead
      ? `
        color: ${theme.color.GRAY_50} !important;

        & * {
          color: ${theme.color.GRAY_50} !important;
        }
      `
      : `
        color: ${theme.color.BLACK_100};
      `}

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_10};
  }
`;

export const ChatPreivewWrapepr = styled.div`
  display: flex;
  width: 29.2rem;
  align-items: center;
  gap: 0.8rem;
`;

export const ProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const DefaultProfileIcon = styled.div`
  width: 4.8rem;
  height: 4.8rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const NameLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${({ theme }) => theme.typo.SUBTITLE_14};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const TitleLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${({ theme }) => theme.typo.CAPTION_10};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export const MessageLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const TimeLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${({ theme }) => theme.typo.CAPTION_10};
  color: ${({ theme }) => theme.color.GRAY_50};
  text-align: right;
`;

export const Dot = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.color.BLUE_50};
  line-height: 1rem;
`;
