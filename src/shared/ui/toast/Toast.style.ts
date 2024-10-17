import { styled } from 'styled-components';
import { ToastSize } from '@/shared/stores/toastStore';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 16rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;

export const ToastMessage = styled.div<{ size: ToastSize }>`
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  width: ${({ size }) => (size === 'lg' ? '80.8rem' : '49.6rem')};
  height: 4.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  gap: 0.8rem;
  border: 0.1375rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD}
`;
