import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { sendEmail } from '../../utility/index';
import Button from '../Button';
import Heading from '../Heading';
import {
  Container,
  FormName,
  FormField,
  FieldSet,
  Input,
  Label,
} from './styles';

type FormStatus = 'sending' | 'ok' | 'error' | '';

// TODO: #9 Export Form and Input components as isolated components
// TODO: #17 Add custom error messages for form inputs
const Form: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<FormStatus>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setStatus('sending');
      await sendEmail(e.currentTarget);
      setStatus('ok');
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  if (status === 'sending') return <Heading>SENDING</Heading>;

  if (status === 'ok') return <Heading>SEND</Heading>;

  if (status === 'error') return <Heading>ERROR</Heading>;

  return (
    <Container onSubmit={handleSubmit}>
      <FormName as="h3">I'd love to hear from you!</FormName>
      <FormField>
        <FieldSet>
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            name="name"
            type="text"
            required
          />
          <Label htmlFor="name">Name</Label>
        </FieldSet>
      </FormField>

      <FormField>
        <FieldSet>
          <Input
            id="email"
            placeholder="E-mail"
            value={mail}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMail(e.target.value)
            }
            name="reply_to"
            type="text"
            required
          />
          <Label htmlFor="email">E-mail</Label>
        </FieldSet>
      </FormField>

      <FormField>
        <FieldSet>
          <Input
            as="textarea"
            id="message"
            placeholder="Message..."
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(e.target.value);
            }}
            name="message"
            type="text"
            required
          />
          <Label htmlFor="message">Message</Label>
        </FieldSet>
      </FormField>
      <Button primary type="submit">
        Send Message
      </Button>
    </Container>
  );
};

export default Form;
