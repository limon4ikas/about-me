import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  scroll-margin-top: 10rem;

  @media ${device.tablet} {
    padding: 0 2rem;
    height: auto;
  }

  @media ${device.mobileL} {
    padding: 0 2rem;
    height: 60vh;
  }
`;

export const AboutMeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;

  @media ${device.mobileL} {
    flex-grow: 1;
  }
`;

export const HeadingBox = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 300;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;

export const HeadingTop = styled.span`
  font-size: 4rem;

  @media ${device.mobileL} {
    font-size: 3rem;
  }
`;

export const HeadingBottom = styled.span`
  font-size: 4rem;
  color: #448fff;

  @media ${device.mobileL} {
    font-size: 3rem;
  }
`;

export const PhotoBox = styled.div`
  width: 20rem;
  height: 20rem;

  @media ${device.mobileL} {
    display: none;
  }
`;

export const Photo = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 50%;
  border: 1rem solid #2a2c3c;

  @media ${device.mobileL} {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 2rem;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const FollowMeText = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: #4e5169;

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
`;

export const SocialIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
