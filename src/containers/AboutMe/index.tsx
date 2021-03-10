import { FunctionComponent, useEffect, useState } from 'react';
import github from '../../api/github';
import SocialIconsBox from '../../components/SocialIconsBox';
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
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getPhoto = async () => {
      const {
        data: { avatar_url: avatarUrl },
      } = await github.get('/users/limon4ikas');

      setPhotoUrl(avatarUrl);
    };

    getPhoto();
  });

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
        <Photo src={photoUrl} alt="My Photo" />
      </PhotoBox>
    </Container>
  );
};

export default AboutMe;
