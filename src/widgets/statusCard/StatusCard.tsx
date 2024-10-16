import React from 'react';
import * as S from './StatusCard.style';
import { StatusTag } from '@/features/myPage';
import { StatusType } from '@/shared/types/status';

interface StatusCardProps {
  title: string;
  content: string;
  status?: StatusType | undefined;
}

const StatusCard = ({ title, content, status }: StatusCardProps) => {
  const activateButton = status === 'pending' || status === undefined;

  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.ContentWrapper>
          <S.TitleBox>{title}</S.TitleBox>
          <S.ContentBox>{content}</S.ContentBox>
        </S.ContentWrapper>
        <S.ButtonWrapper hasStatus={!!status}>
          {status && <StatusTag status={status} />}
          {activateButton && <S.CancelButton>신청 취소</S.CancelButton>}
        </S.ButtonWrapper>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

export default StatusCard;
