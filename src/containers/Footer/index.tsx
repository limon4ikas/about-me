import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import {
  Container,
  Content,
  FollowMe,
  SocialBox,
  SocialIconBox,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <FollowMe>Follow me</FollowMe>
        <SocialBox>
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
      </Content>
    </Container>
  );
};

export default Footer;
