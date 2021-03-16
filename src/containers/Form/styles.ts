import styled from 'styled-components';
import Heading from '../../components/Heading';

export const Container = styled.form`
  width: 30rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const FieldSet = styled.fieldset`
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

export const FormField = styled.div``;

export const Label = styled.label`
  font-weight: 400;
  color: #b2e2ff;
`;

interface InputProps {
  type?: any;
}

export const Input = styled.input<InputProps>`
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

export const FormName = styled(Heading)`
  font-weight: 500;
`;
