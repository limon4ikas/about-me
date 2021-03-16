import { FunctionComponent } from 'react';
import SocialIconsBox from '../../components/SocialIconsBox';
import { Container, Content } from './styles';
import styled from 'styled-components';
import Text from '../../components/Text';
import Link from '../../components/Link';

const Copyrightbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #4c4f67;
`;

const DesignedText = styled(Text)`
  display: flex;
  transition: all 0.2s ease-out;

  &:hover {
    color: #b2e2ff;
  }
`;

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
