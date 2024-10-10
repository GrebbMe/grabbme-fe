import * as S from './stackBadge.style';

interface StackBadgeProps {
  children: string;
  src?: string;
  onClick?: () => void;
}

export const StackBadge = ({ children, src, onClick }: StackBadgeProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.StackImg src={src} alt="stack-button" />
      <S.StackName>{children}</S.StackName>
    </S.Container>
  );
};
