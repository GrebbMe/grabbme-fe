import * as S from './StatusTag.style';
import { statusLabelMap } from '@/entities/myPage/consts/statusLabelMap';

type Status = keyof typeof statusLabelMap;

export interface StatusTagProps {
  status: Status;
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
