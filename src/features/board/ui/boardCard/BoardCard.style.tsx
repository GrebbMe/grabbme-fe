import { styled } from 'styled-components';

export const Container = styled.div`
  width: 80.8rem;
  height: 18.2rem;
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.8rem;

  &:hover {
    border-color: ${({ theme }) => theme.color.BLUE_50};
    box-shadow: 0rem 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleLayout = styled.div``;
export const Title = styled.span`
  ${({ theme }) => theme.typo.BODY_SEMIBOLD}
  color: ${({ theme }) => theme.color.BLACK_100};
  margin-right: 1.6rem;
`;
export const Information = styled.span`
  ${({ theme }) => theme.typo.SUBTITLE_14}
  color: ${({ theme }) => theme.color.BLACK_80};
  padding-left: 1.6rem;
  border-left: 0.1rem solid ${({ theme }) => theme.color.GRAY_50};
`;
export const CountLayout = styled.div`
  gap: 0.4rem;
  display: flex;
  flex-direction: row;
`;

export const StackLayout = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const StackName = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.CAPTION_14}
`;
export const Content = styled.p`
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.BLACK_80};
  margin-top: 1.2rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
export const BookmarkWrapper = styled.div`
  button {
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  }
  svg{
  fill: ${({ theme }) => theme.color.PRIMARY_BLUE};
`;
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 1.233rem;
    height: 1.233rem;
    fill: ${({ theme }) => theme.color.GRAY_50};
  }
`;
