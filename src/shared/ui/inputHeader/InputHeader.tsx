import * as S from '@/shared/ui/inputHeader/InputHeader.style';

export type InputHeaderSize = 'sm' | 'lg';

export interface InputHeaderProps {
  text: string;
  description?: string;
  limit?: number;
  count?: number;
  isDetail?: boolean;
  isCountable?: boolean;
  size?: InputHeaderSize;
}

const InputHeader = ({
  text,
  description,
  limit,
  count,
  isDetail = true,
  isCountable,
  size = 'lg',
}: InputHeaderProps) => {
  return (
    <>
      <S.Header $size={size}>
        <S.Text>
          {text}
          {isDetail && (
            <>
              <S.StarWrapper>*</S.StarWrapper>
              <S.Description>{description}</S.Description>
            </>
          )}
        </S.Text>
        {isCountable && (
          <S.Count>
            {count} / {limit}
          </S.Count>
        )}
      </S.Header>
    </>
  );
};

export default InputHeader;
