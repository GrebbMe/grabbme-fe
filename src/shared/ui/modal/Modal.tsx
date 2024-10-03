import React, { useRef } from 'react';
import { Button } from '@/shared/ui/button/Button';
import {
  ButtonWrapper,
  Description,
  ModalBackground,
  ModalContainer,
} from '@/shared/ui/modal/Modal.style';
import { ModalProps } from '@/shared/ui/modal/Modal.types';

const Modal = ({ isModalOpen, handleModal, description, type, onConfirm }: ModalProps) => {
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
            <Description>{description}</Description>
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

export default Modal;
