import { FC, SVGProps } from 'react';
import * as S from './stackBadge.style';

export interface StackBadgeProps {
  stackName: string;
  stackImg: string;
  onClick: () => void;
}

export const StackBadge = ({ stackName, stackImg, onClick }: StackBadgeProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.StackImg src={stackImg} alt="stack-button" />
      <S.StackName>{stackName}</S.StackName>
    </S.Container>
  );
};
