import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import myPhoto from '../assets/img/profile-photo.png';
import { FunctionComponent } from 'react';

const Container = styled.section`
  padding: 0 4rem;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 31.25em) {
    height: auto;
    padding: 0 2rem;
  }
`;

const AboutMeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  @media only screen and (max-width: 31.25em) {
    flex-grow: 1;
  }
`;

const HeadingBox = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 300;

  @media only screen and (max-width: 31.25em) {
    font-size: 1.6rem;
  }
`;

const HeadingTop = styled.span`
  font-size: 4rem;

  @media only screen and (max-width: 31.25em) {
    font-size: 3rem;
  }
`;

const HeadingBottom = styled.span`
  font-size: 4rem;
  color: #448fff;

  @media only screen and (max-width: 31.25em) {
    font-size: 3rem;
  }
`;

const PhotoBox = styled.div`
  @media only screen and (max-width: 31.25em) {
    display: none;
  }
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 50%;
  border: 1rem solid #2a2c3c;

  @media only screen and (max-width: 31.25) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 2rem;

  @media only screen and (max-width: 31.25em) {
    font-size: 1.6rem;
  }
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FollowMeText = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: #4e5169;

  @media only screen and (max-width: 31.25em) {
    font-size: 1.4rem;
  }
`;

const SocialIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const AboutMe: FunctionComponent = () => {
  return (
    <Container id="about">
      <AboutMeContentBox>
        <HeadingBox>
          <HeadingTop>Hi, I am Cat,</HeadingTop>
          <HeadingBottom>Front-End Developer</HeadingBottom>
        </HeadingBox>

        <Text>
          I enjoy learning new things, constantly improving myself, producing
          open source projects and contributing to them. I am also intrested in
          reading books.
        </Text>

        <SocialBox>
          <FollowMeText>Follow me</FollowMeText>

          <SocialIconBox>
            <AiFillInstagram />
          </SocialIconBox>
          <SocialIconBox>
            <AiFillTwitterSquare />
          </SocialIconBox>
          <SocialIconBox>
            <AiFillGithub />
          </SocialIconBox>
        </SocialBox>
      </AboutMeContentBox>

      <PhotoBox>
        <Photo src={myPhoto} alt="My Photo" />
      </PhotoBox>
    </Container>
  );
};

export default AboutMe;
