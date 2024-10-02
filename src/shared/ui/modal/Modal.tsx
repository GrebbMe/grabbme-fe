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
                  <Button
                    state="default"
                    content="취소"
                    size="7.6rem"
                    onClick={() => handleModal(false)}
                  />

                  <Button
                    state="default"
                    content="확인"
                    size="7.6rem"
                    onClick={() => {
                      if (onConfirm) onConfirm();
                      handleModal(false);
                    }}
                  />
                </>
              ) : (
                <Button
                  state="default"
                  content="확인"
                  size="7.6rem"
                  onClick={() => handleModal(false)}
                />
              )}
            </ButtonWrapper>
          </ModalContainer>
        </ModalBackground>
      )}
    </div>
  );
};

export default Modal;
