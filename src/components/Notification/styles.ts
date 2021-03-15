import styled from 'styled-components';
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineClose,
} from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 0.5rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  transition: transform 0.6s ease-in-out;
  animation: goInRight 0.7s;

  @keyframes goInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
export const IconBox = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

export const Text = styled.p``;

export const SuccessIcon = styled(AiFillCheckCircle)``;

export const InfoIcon = styled(AiFillInfoCircle)``;

export const WarningIcon = styled(AiFillWarning)``;

export const DangerIcon = styled(RiErrorWarningFill)``;

export const CloseIcon = styled(AiOutlineClose)`
  fill: #fff;
  width: 2rem !important;
  height: 2rem !important;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;

  border: none;
  outline: none;
  background-color: transparent;

  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
