import styled, { keyframes } from 'styled-components';

const moveRight = keyframes`
  0% { transform: translate(0, 0);  }
  100% { transform: translate(80%, 0); }
`;

const moveLittleRight = keyframes`
  0% { transform: translate(0, 0);  }
  100% { transform: translate(25%, 0); }
`;

const moveLeft = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-75%, 0); }
`;

const moveLittleLeft = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-25%, 0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DamoText = styled.img`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin-right: 1rem;

  &:nth-child(1) {
    animation: ${moveRight} 1s forwards;
  }

  &:nth-child(2) {
    animation: ${moveLittleRight} 1s forwards;
  }

  &:nth-child(3) {
    animation: ${moveLittleLeft} 1s forwards;
  }

  &:nth-child(4) {
    animation: ${moveLeft} 1s forwards;
  }
`;

export const DamoTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`;

export const BounceHeading = styled.h1`
  margin: 1rem 0 0 0;
  font-size: 3rem;
  font-weight: 800;
  animation: ${bounce} 1s 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const FadeInText = styled.h3`
  font-size: 2rem;
  animation: ${fadeIn} 1500ms 800ms both;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const HomePageContainer = styled.div`
  @media all and (max-width: 1024px) {
    font-size: 85%;
  }
  @media all and (max-width: 768px) {
    font-size: 70%;
  }
  @media all and (max-width: 500px) {
    font-size: 55%;
  }
  @media all and (max-width: 400px) {
    font-size: 45%;
  }
`;
