import * as S from './ContentTag.style';

interface StackItemProps {
  label: string;
}

const ContentTag = ({ label }: StackItemProps) => {
  return <S.StackItemContainer>{label}</S.StackItemContainer>;
};

export default ContentTag;
