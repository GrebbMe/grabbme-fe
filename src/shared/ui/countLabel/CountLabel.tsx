import React from 'react';
import * as S from './CountLabel.style';

interface CountLabelProps {
  icon: React.ReactElement;
  count: number;
}

const CountLabel = ({ icon, count }: CountLabelProps) => {
  return (
    <S.Container>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Text>{count}명</S.Text>
    </S.Container>
  );
};

export default CountLabel;
