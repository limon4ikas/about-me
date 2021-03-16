import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import Form from '../Form';

const TextBox = styled.div``;

const Contact: FunctionComponent = () => {
  return (
    <Container id="contact">
      <TextBox></TextBox>
      <Form />
    </Container>
  );
};

export default Contact;
