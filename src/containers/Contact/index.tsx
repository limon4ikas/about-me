import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from '../../components/Link';
import Heading from '../../components/Heading';
import { Container, Content, Text, ButtonsBox, Button } from './styles';

const StyledHeading = styled(Heading)`
  font-weight: 400;
`;

const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <Content>
        <StyledHeading as="h2">Let's meet</StyledHeading>
        <Text>
          You can use one of the methods below to get in touch with me!
        </Text>
        <ButtonsBox>
          <Link goTo="mailto:limon4ikas@gmail.com?subject=Meet me!&body=Greetings">
            <Button>E-mail</Button>
          </Link>
          <Link goTo="tel:+7(999) 999-99-99">
            <Button>Phone</Button>
          </Link>
        </ButtonsBox>
      </Content>
    </Container>
  );
};

export default Contact;
