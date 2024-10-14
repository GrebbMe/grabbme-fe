import * as S from './StatusTag.style';
import { statusLabels } from '@/features/myPage/consts/statusLabels.ts';

export interface StatusTagProps {
  status: keyof typeof statusLabels;
}

const StatusTag = ({ status }: StatusTagProps) => {
  const label = statusLabels[status];

  return (
    <S.TagContainer status={status}>
      <S.Circle status={status} />
      <S.TagLabel status={status}>{label}</S.TagLabel>
    </S.TagContainer>
  );
};

export default StatusTag;
