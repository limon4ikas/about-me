import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import { Container, Content, CopyrightBox, DesignedText } from './styles';
import Text from '../../components/Text';
import Link from '../../components/Link';
// BUG: #13 Change color only of the name on hover
const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <SocialIconsBox />
        <CopyrightBox>
          <Text>&copy; Copyright 2021 by Danil Kostromin</Text>
          <DesignedText>
            <Link goTo="https://dribbble.com/ahsenpelit">
              Designed by Ahsen Pelit
            </Link>
          </DesignedText>
        </CopyrightBox>
      </Content>
    </Container>
  );
};

export default Footer;
