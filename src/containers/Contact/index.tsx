import { FunctionComponent } from 'react';
import Button from '../../components/Button';
import { Container, Content, Heading, Text, ButtonsBox } from './styles';

const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <Content>
        <Heading>Let's meet</Heading>
        <Text>
          You can use one of the methods below to get in touch with me!
        </Text>
        <ButtonsBox>
          <Button>E-mail</Button> <Button>Phone</Button>
        </ButtonsBox>
      </Content>
    </Container>
  );
};

export default Contact;
