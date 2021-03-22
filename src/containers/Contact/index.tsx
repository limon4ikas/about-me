import { FunctionComponent } from 'react';
import { Container } from './styles';
import BusinesCard from '../../components/BusinessCard';
import Form from '../../components/Form';

const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <BusinesCard />
      <Form />
    </Container>
  );
};

export default Contact;
