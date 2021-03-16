import { FunctionComponent } from 'react';
import Heading from '../../components/Heading';
import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  display: inline-block;
  border: none;
  font-size: inherit;
  font-family: inherit;
  background-color: #217aff;
  border-radius: 1rem;
  color: #fff;
  text-align: center;
  cursor: pointer;

  padding: 1rem 1.6rem;

  transition: all 0.2s;

  &:hover {
    background-color: #448fff;
  }
`;

const Container = styled.form`
  width: 30rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const FieldSet = styled.fieldset`
  position: relative;
  border: 0;

  & label {
    left: 1rem;
    position: absolute;
    top: 0;

    opacity: 0;
    transition: all 0.2s;
  }

  & input:not(:placeholder-shown) + label,
  textarea:not(:placeholder-shown) + label {
    background: transparent;
    transform: translate(0, -50%);
    opacity: 1;
  }

  & textarea {
    resize: none;
    height: 15rem;
  }
`;

const FormField = styled.div``;

const Label = styled.label`
  font-weight: 400;
  color: #b2e2ff;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  background-color: #1f1f2f;
  width: 100%;

  padding: 1rem 1.6rem;

  transition: all 0.2s;

  &:focus {
    background-color: #2a2c3c;
  }
`;

const FormName = styled(Heading)`
  font-weight: 500;
`;

const Form: FunctionComponent = () => {
  return (
    <Container>
      <FormName as="h3">I'd love to hear from you!</FormName>
      <FormField>
        <FieldSet>
          <Input id="name" placeholder="Name" />
          <Label htmlFor="name">Name</Label>
        </FieldSet>
      </FormField>

      <FormField>
        <FieldSet>
          <Input id="email" placeholder="E-mail Address" />
          <Label htmlFor="email">E-mail Address</Label>
        </FieldSet>
      </FormField>

      <FormField>
        <FieldSet>
          <Input as="textarea" id="message" placeholder="Message..." />
          <Label htmlFor="message">Message</Label>
        </FieldSet>
      </FormField>
      <Button>Send Message</Button>
    </Container>
  );
};

export default Form;
