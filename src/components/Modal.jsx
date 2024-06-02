import React, { useState, useEffect } from 'react';
import { ModalBackground, ModalContainer } from "../styles/ModalStyle";

const Modal = ({ children, isClosing, onClose }) => {
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 300); // 애니메이션 시간이 0.3초이므로 300ms 후에 onClose 호출
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return (
    <ModalBackground>
      <ModalContainer $isClosing={isClosing}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
