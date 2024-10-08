import * as S from './stackSelectButton.style';

interface ButtonProps {
  children: string;
  src?: string;
  onClick?: () => void;
}

export const StackSelectButton = ({ children, src, onClick }: ButtonProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.StackImg src={src} alt="stack-button" />
      <S.StackName>{children}</S.StackName>
    </S.Container>
  );
};
