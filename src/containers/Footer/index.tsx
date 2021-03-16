import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import { Container, Content } from './styles';

// TODO: #10 Add copyright and designed by box
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
