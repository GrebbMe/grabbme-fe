import CheckOneIcon from '@/shared/assets/svg/IcCheckOne.svg?react';
import { useToastStore } from '@/shared/stores/toastStore';
import * as S from '@/shared/ui/toast/Toast.style';

export const Toast = () => {
  const { toast } = useToastStore();

  return (
    <S.ToastContainer>
      {toast && (
        <S.ToastMessage size={toast.size}>
          <CheckOneIcon />
          {toast.content}
        </S.ToastMessage>
      )}
    </S.ToastContainer>
  );
};
