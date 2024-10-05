import React, { useRef } from 'react';
import { useModalStore } from '@/shared/stores/modalStore';
import { Button } from '@/shared/ui/button/Button';
import {
  ButtonWrapper,
  Content,
  ModalBackground,
  ModalContainer,
} from '@/shared/ui/modal/Modal.style';

export const Modal = () => {
  const { isModalOpen, handleModal, content, type, onConfirm } = useModalStore();
  const modalBackground: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <div>
      {isModalOpen && (
        <ModalBackground
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) handleModal(false);
          }}
        >
          <ModalContainer>
            <Content>{content}</Content>
            <ButtonWrapper type={type}>
              {type === 'confirm' ? (
                <>
                  <Button onClick={() => handleModal(false)}>취소</Button>
                  <Button
                    onClick={() => {
                      if (onConfirm) onConfirm();
                      handleModal(false);
                    }}
                  >
                    확인
                  </Button>
                </>
              ) : (
                <Button onClick={() => handleModal(false)}>확인</Button>
              )}
            </ButtonWrapper>
          </ModalContainer>
        </ModalBackground>
      )}
    </div>
  );
};
