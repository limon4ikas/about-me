import styled from 'styled-components';
import { device } from '../../styles/responsive';
import Text from '../../components/Text';
import Link from '../../components/Link';

export const Container = styled.section`
  padding: 4rem;

  @media ${device.mobileL} {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CopyrightBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #4c4f67;
`;

export const DesignedText = styled(Text)`
  display: flex;
  transition: all 0.2s ease-out;

  &:hover {
    color: #b2e2ff;
  }
`;
