import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: 48.4rem;
  padding-bottom: 2.4rem;
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
export const TitleWrapper = styled.div`
  display: flex;
  width: 36rem;
  height: 6.2rem;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 1.6rem 1.6rem 0 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.BLUE_30};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.BLUE_30} 0%,
    ${({ theme }) => theme.color.WHITE} 100%
  );
`;

export const TitleBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const IconBack = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`;

export const NameLabel = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  color: ${({ theme }) => theme.color.BLACK_100};
  vertical-align: middle;
`;

export const TitleLabel = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.GRAY_50};
  vertical-align: middle;
`;

export const Dot = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.color.BLUE_50};
  line-height: 1rem;
`;

export const ChatContent = styled.div`
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

export const InputContainer = styled.div`
  display: flex;
`;
