import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import Form from '../Form';

const TextBox = styled.div``;

//TODO: #8 Create hero component to the left of form component
const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <TextBox></TextBox>
      <Form />
    </Container>
  );
};

export default Contact;
