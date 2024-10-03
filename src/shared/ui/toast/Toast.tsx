import styled from 'styled-components';
import { CheckOneIcon } from '@/shared/assets';
import { ToastSize, useToastStore } from '@/shared/stores/toastStore';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 16rem;
  left: 50%;
  transform: translateX(-50%);
`;

const ToastMessage = styled.div<{ size: ToastSize }>`
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  width: ${({ size }) => (size === 'lg' ? '80.8rem' : size === 'md' ? '60rem' : '40rem')};
  height: 4.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  gap: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD}
`;

export const Toast = () => {
  const { toast } = useToastStore();

  return (
    <ToastContainer>
      {toast && (
        <ToastMessage size={toast.size}>
          <CheckOneIcon />
          {toast.content}
        </ToastMessage>
      )}
    </ToastContainer>
  );
};
