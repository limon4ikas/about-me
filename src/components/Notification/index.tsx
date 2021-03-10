import { FunctionComponent } from 'react';
import { Container, Heading, Text } from './styles';

const Notification: FunctionComponent<any> = ({ children, title, color }) => {
  return (
    <Container color={color}>
      <Heading>{title}</Heading>
      <Text>{children}</Text>
    </Container>
  );
};

export default Notification;
