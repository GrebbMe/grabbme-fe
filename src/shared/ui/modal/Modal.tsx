import React, { useRef } from 'react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { useModalStore } from '@/shared/stores/modalStore';
import { Button } from '@/shared/ui/button/Button';
import { ButtonWrapper, Content, ModalContainer } from '@/shared/ui/modal/Modal.style';

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
        <ModalContainer ref={modalRef}>
          <Content>{content}</Content>
          <ButtonWrapper type={type}>
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
              <Button onClick={() => closeModal()}>확인</Button>
            )}
          </ButtonWrapper>
        </ModalContainer>
      )}
    </>
  );
};
