import React from 'react';
import * as S from './ContentCard.style';
import { IcBookmarkSmall, IcChatSmall, IcViewSmall } from '@/shared/assets';
import { CountLabel } from '@/shared/ui';

export type ContentCardType = 'A' | 'B' | 'C';

interface ContentCardProps {
  title: string;
  content: string;
  viewCount: number;
  bookmarkCount: number;
  commentCount: number;
  name?: string;
  role?: string;
  type: ContentCardType;
}

const ContentCard = ({
  title,
  content,
  viewCount,
  bookmarkCount,
  commentCount,
  name,
  role,
  type,
}: ContentCardProps) => {
  const hasBorder = type !== 'C';

  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.TitleWrapper>
          <S.TitleBox>{title}</S.TitleBox>
          {type === 'A' && name && role && (
            <S.InfoWrapper>
              <S.InfoBox>{name}</S.InfoBox>
              <S.DotBox>•</S.DotBox>
              <S.InfoBox>{role}</S.InfoBox>
            </S.InfoWrapper>
          )}
        </S.TitleWrapper>
        <S.ContentBox type={type}>{content}</S.ContentBox>
        <S.CountWrapper>
          <CountLabel icon={<IcViewSmall />} count={viewCount} hasBorder={hasBorder} />
          <CountLabel icon={<IcBookmarkSmall />} count={bookmarkCount} hasBorder={hasBorder} />
          <CountLabel icon={<IcChatSmall />} count={commentCount} hasBorder={hasBorder} />
        </S.CountWrapper>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

export default ContentCard;
