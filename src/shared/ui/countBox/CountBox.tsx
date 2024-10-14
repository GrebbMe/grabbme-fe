import { IcSmallChat, IcBookmark, IcView } from '@/shared/assets';
import { Container } from '@/shared/ui/countBox/CountBox.style';

type CountVariant = 'view' | 'bookmark' | 'chat';
export interface CountBoxProps {
  variant: CountVariant;
  count: number;
}

const CountBox = ({ variant, count }: CountBoxProps) => {
  return (
    <Container>
      <>
        {variant === 'view' ? (
          <IcView />
        ) : variant === 'bookmark' ? (
          <IcBookmark />
        ) : (
          <IcSmallChat />
        )}
        <span>{count}명</span>
      </>
    </Container>
  );
};

export default CountBox;
