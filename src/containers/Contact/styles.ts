import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
  margin-top: 8rem;
  padding: 0 4rem;

  background-color: #181827;

  @media ${device.mobileL} {
    height: 40vh;
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Text = styled.p``;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: inherit;
  font-family: inherit;
  background-color: #217aff;
  border-radius: 1rem;
  color: #fff;
  text-align: center;
  cursor: pointer;

  padding: 1rem 1.6rem;

  transition: all 0.2s;

  &:hover {
    background-color: #448fff;
  }
`;
