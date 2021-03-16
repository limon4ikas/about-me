import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  margin-top: 8rem;

  // TODO: #4 Fix padding cascade
  // #4
  // @limon4ikas
  @media ${device.mobileL} {
    padding: 0 !important;
  }
`;

export const SectionNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media ${device.mobileL} {
    padding: 0 2rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

  gap: 2rem;
`;

export const ProjectCardPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  height: 20rem;
  border-radius: 1rem;
  background-color: #2a2c3c;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #4e5169 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;

    @keyframes load {
      from {
        left: -150px;
      }
      to {
        left: 100%;
      }
    }
  }
`;
