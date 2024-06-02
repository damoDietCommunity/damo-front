import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.2);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : 'none')} 0.3s ease;
  animation-fill-mode: forwards; /* 애니메이션이 끝난 후 상태를 유지하여 깜박임 방지 */
`;

const ModalContainer = styled.div`
  background: white;
  padding: 30px 40px;
  border-radius: 8px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.2);
  animation: ${({ $isClosing }) => ($isClosing ? scaleDown : scaleUp)} 0.3s ease;
  animation-fill-mode: forwards; /* 애니메이션이 끝난 후 상태를 유지하여 깜박임 방지 */
`;

export { ModalBackground, ModalContainer };
