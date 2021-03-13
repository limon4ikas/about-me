import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import profilePhoto from '../../assets/img/profile-photo.png';
import {
  Container,
  AboutMeContentBox,
  HeadingBox,
  HeadingTop,
  HeadingBottom,
  Text,
  SocialBox,
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
          <SocialIconsBox />
        </SocialBox>
      </AboutMeContentBox>

      <PhotoBox>
        <Photo src={profilePhoto} alt="My Photo" />
      </PhotoBox>
    </Container>
  );
};

export default AboutMe;
