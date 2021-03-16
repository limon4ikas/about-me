import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../../components/Button';
import {
  Container,
  FormName,
  FormField,
  FieldSet,
  Input,
  Label,
} from './styles';

const Form: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const USER_ID = 'user_qc6OtIgYEpURMlU4xHwUr';
    const TEMPLATE_ID = 'template_j9hqmjq';

    emailjs.sendForm('gmail', TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
