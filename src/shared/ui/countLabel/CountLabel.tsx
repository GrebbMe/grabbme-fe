import React from 'react';
import * as S from './CountLabel.style';

export interface CountLabelProps {
  icon: React.ReactElement;
  count: number;
  hasBorder?: boolean;
}

const CountLabel = ({ icon, count, hasBorder = true }: CountLabelProps) => {
  return (
    <S.Container hasBorder={hasBorder}>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Text>{count}명</S.Text>
    </S.Container>
  );
};

export default CountLabel;
