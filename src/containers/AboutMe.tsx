import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Container = styled.section`
  padding: 0 4rem;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutMeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;

const HeadingBox = styled.h1`
  display: flex;
  flex-direction: column;
`;

const HeadingTop = styled.span`
  font-size: 4rem;
`;

const HeadingBottom = styled.span`
  font-size: 4rem;
  color: #448fff;
`;

const PhotoBox = styled.div``;

const Photo = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 50%;
  border: 1rem solid #2a2c3c;

  &:hover {
    border: 0rem transparent #2a2c3c;
  }
`;

const Text = styled.p`
  font-size: 2rem;
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
  opacity: 0.3;
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

const AboutMe = () => {
  return (
    <Container>
      <AboutMeContentBox>
        <HeadingBox>
          <HeadingTop>Hi, I am Danil,</HeadingTop>
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
        <Photo src="./profile-photo.png" />
      </PhotoBox>
    </Container>
  );
};

export default AboutMe;
