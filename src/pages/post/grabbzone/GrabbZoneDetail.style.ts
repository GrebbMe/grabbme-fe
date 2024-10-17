import { css, styled } from 'styled-components';

export const HeaderContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 6.4rem;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BasicInfoContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  padding: 1.4rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
`;
export const InfoItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 2.4rem;

  margin-block: 0.6rem;
`;

export const ItemTitle = styled.div`
  ${({ theme }) => css`
    ${theme.typo.SUBTITLE_14};
    color: ${theme.color.GRAY_50};
  `};
  border-right: 0.1rem solid ${({ theme }) => theme.color.GRAY_50};
  height: 2rem;
  width: 6rem;
`;
export const ItemContent = styled.div`
  ${({ theme }) => css`
    ${theme.typo.SUBTITLE_14};
    color: ${theme.color.BLACK_80};
  `};
  margin-left: 1.6rem;
`;
export const TagList = styled.div`
  display: flex;
  justify-items: start;
  align-items: center;
  gap: 0.8rem;
`;
export const RecruitStatusContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
export const RSItemTitle = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: start;
  align-items: center;
  ${({ theme }) => css`
    ${theme.typo.BODY_SEMIBOLD};
    color: ${theme.color.BLACK_80};
  `};
`;

export const RSProgressBar = styled.div`
  grid-column: 3 / span 3;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const RSButton = styled.div`
  grid-column: 6 / 8;
`;

export const DetailInfoContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const FooterContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin-block: 8rem 24rem;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.typo.TITLE};
    color: ${theme.color.BLACK_100};
  `};
  margin-bottom: 1.6rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const TitleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nickname = styled.div`
  margin-right: 1.6rem;
  ${({ theme }) => css`
    ${theme.typo.BODY_SEMIBOLD};
    color: ${theme.color.GRAY_50};
  `};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const CreatedAt = styled.div`
  padding-left: 1.6rem;
  border-left: 0.1rem solid ${({ theme }) => theme.color.GRAY_50};
  height: 3.2rem;
  ${({ theme }) => css`
    ${theme.typo.CAPTION_12};
    color: ${theme.color.GRAY_50};
  `};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    ${theme.typo.SUBTITLE_20};
    color: ${theme.color.BLACK_100};
  `};
`;

export const RecruitStatusWrapper = styled.div`
  margin-top: 1.6rem;
`;

export const RecruitStatusItem = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 8rem);
  column-gap: 2.4rem;
  margin-bottom: 0.8rem;
`;

export const DetailInfoWrapper = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  padding: 1.4rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
`;
