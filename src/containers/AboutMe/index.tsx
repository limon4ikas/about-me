import { FunctionComponent } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import myPhoto from '../../assets/img/profile-photo.png';
import {
  Container,
  AboutMeContentBox,
  HeadingBox,
  HeadingTop,
  HeadingBottom,
  Text,
  SocialBox,
  FollowMeText,
  SocialIconBox,
  PhotoBox,
  Photo,
} from './styles';

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
