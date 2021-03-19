import { FunctionComponent } from 'react';
import { Container } from './styles';
import BusinesCard from '../../components/BusinessCard';
import Form from '../../components/Form';

//TODO: #8 Create hero component to the left of form component
const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <BusinesCard />
      <Form />
    </Container>
  );
};

export default Contact;
