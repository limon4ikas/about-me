import { FunctionComponent } from 'react';
import Link from '../../components/Link';
import {
  Container,
  Content,
  Heading,
  Text,
  ButtonsBox,
  Button,
} from './styles';

const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <Content>
        <Heading>Let's meet</Heading>
        <Text>
          You can use one of the methods below to get in touch with me!
        </Text>
        <ButtonsBox>
          <Button>
            <Link goTo="mailto:limon4ikas@gmail.com?subject=Meet me!&body=Greetings">
              E-mail
            </Link>
          </Button>
          <Button>
            <Link goTo="tel:+7(999) 999-99-99">Phone</Link>
          </Button>
        </ButtonsBox>
      </Content>
    </Container>
  );
};

export default Contact;
