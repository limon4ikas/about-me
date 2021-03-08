import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem 2rem;

  background-color: #2a2c3c;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: ${({ color }) => color};
    height: 100%;
    width: 5px;
    left: 0rem;
    top: 0rem;
  }

  @media ${device.mobileL} {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }
`;

export const Name = styled.h3`
  color: ${({ color }) => color};
  transition: all 0.2s;
  font-weight: 400;

  &:hover {
    color: #fff;
  }
`;

export const Description = styled.p``;

export const TagsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Language = styled.p`
  color: #b2e2ff;
`;

export const Stars = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #b2e2ff;
`;
