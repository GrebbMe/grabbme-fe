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
                <Button variant="primary" size="sm" onClick={() => closeModal()}>
                  취소
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    onConfirm?.();
                    closeModal();
                  }}
                >
                  확인
                </Button>
              </>
            ) : (
              <Button variant="primary" size="lg" onClick={() => closeModal()}>
                확인
              </Button>
            )}
          </S.ButtonWrapper>
        </S.ModalContainer>
      )}
    </>
  );
};
