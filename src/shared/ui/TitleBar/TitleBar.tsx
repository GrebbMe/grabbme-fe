import * as S from '@/shared/ui/TitleBar/TitleBar.style';

export type TitleBarSize = 'sm' | 'lg';

export interface TitleBarProps {
  label: string;
  description?: string;
  limit?: number;
  count?: number;
  isDetail: boolean;
  size: TitleBarSize;
}

const TitleBar = ({
  label,
  description,
  limit,
  count,
  isDetail = true,

  size = 'lg',
}: TitleBarProps) => {
  return (
    <>
      <S.Header $size={size}>
        <S.Text>
          {label}
          {isDetail && (
            <>
              <S.StarWrapper>*</S.StarWrapper>
              <S.Description>{description}</S.Description>
            </>
          )}
        </S.Text>
        {limit && count && (
          <S.Count>
            {count} / {limit}
          </S.Count>
        )}
      </S.Header>
    </>
  );
};

export default TitleBar;
