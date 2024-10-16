import * as S from './StatusTag.style';
import { statusLabelMap } from '@/features/myPage/consts/statusLabelMap.ts';

export interface StatusTagProps {
  status: keyof typeof statusLabelMap;
}

const StatusTag = ({ status }: StatusTagProps) => {
  const label = statusLabelMap[status];

  return (
    <S.TagContainer status={status}>
      <S.Circle status={status} />
      <S.TagLabel status={status}>{label}</S.TagLabel>
    </S.TagContainer>
  );
};

export default StatusTag;
