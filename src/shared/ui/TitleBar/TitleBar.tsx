import * as S from '@/shared/ui/TitleBar/TitleBar.style';

export type TitleBarSize = 'sm' | 'lg';

export interface TitleBarProps {
  label: string;
  description?: string;
  limit?: number;
  count?: number;
  size?: TitleBarSize;
}

const TitleBar = ({ label, description, limit, count, size = 'lg' }: TitleBarProps) => {
  return (
    <>
      <S.Header $size={size}>
        <S.Text>
          {label}
          <S.StarWrapper>*</S.StarWrapper>
          {description && <S.Description>{description}</S.Description>}
        </S.Text>
        {limit && (
          <S.Count>
            {count} / {limit}
          </S.Count>
        )}
      </S.Header>
    </>
  );
};

export default TitleBar;
