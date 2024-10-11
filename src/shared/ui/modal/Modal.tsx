import { useRef } from 'react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { useModalStore } from '@/shared/stores/modalStore';
import { Button } from '@/shared/ui';
import * as S from '@/shared/ui/modal/Modal.style';

export const Modal = () => {
  const { isOpen, closeModal, content, type, onConfirm } = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: modalRef,
    handler: () => closeModal(),
  });

  return (
    <>
      {isOpen && (
        <S.ModalContainer ref={modalRef}>
          <S.Content>{content}</S.Content>
          <S.ButtonWrapper type={type}>
            {type === 'confirm' ? (
              <>
                <Button onClick={() => closeModal()}>취소</Button>
                <Button
                  onClick={() => {
                    onConfirm?.();
                    closeModal();
                  }}
                >
                  확인
                </Button>
              </>
            ) : (
              <S.AlertButton onClick={() => closeModal()}>확인</S.AlertButton>
            )}
          </S.ButtonWrapper>
        </S.ModalContainer>
      )}
    </>
  );
};
