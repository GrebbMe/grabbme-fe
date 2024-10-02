import { styled } from 'styled-components';
import { ModalType } from '@/shared/ui/modal/Modal.types';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 2.4rem 6.4rem;
  width: 29.6rem;
  height: 14rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.GRAY_30};
  box-shadow: 0px 2px 16px 2px rgba(142, 152, 169, 0.25);
  display: flex;
  flex-direction: column;
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_14};
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ButtonBox = styled.div<{ type: ModalType }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ type }) => (type === 'confirm' ? 'space-between' : 'center')};
`;
