import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import { Container, Content, Copyrightbox, DesignedText } from './styles';
import Text from '../../components/Text';
import Link from '../../components/Link';

// TODO: #10 Add copyright and designed by box
const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <SocialIconsBox />
        <Copyrightbox>
          <Text>&copy; Copyright 2021 by Danil Kostromin</Text>
          <DesignedText>
            <Link goTo="https://dribbble.com/ahsenpelit">
              Designed by Ahsen Pelit
            </Link>
          </DesignedText>
        </Copyrightbox>
      </Content>
    </Container>
  );
};

export default Footer;
