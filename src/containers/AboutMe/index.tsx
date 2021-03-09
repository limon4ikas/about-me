import { FunctionComponent, useEffect, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import github from '../../api/github';
import Link from '../../components/Link';
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
          <FollowMeText>Follow me</FollowMeText>

          <SocialIconBox>
            <Link goTo="#">
              <AiFillInstagram />
            </Link>
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
        <Photo src={photoUrl} alt="My Photo" />
      </PhotoBox>
    </Container>
  );
};

export default AboutMe;
