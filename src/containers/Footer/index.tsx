import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import { Container, Content } from './styles';

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <SocialIconsBox />
      </Content>
    </Container>
  );
};

export default Footer;
