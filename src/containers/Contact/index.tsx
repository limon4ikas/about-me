import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import Form from '../Form';
import Heading from '../../components/Heading';
import Highlight from 'react-highlight';

const Content = styled.div`
  grid-area: hero;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  & > * {
    padding: 2rem 0;
  }
`;

const CodeBox = styled.div``;

//TODO: #8 Create hero component to the left of form component
const Contact: FunctionComponent = () => {
  const codeString = `
  let cache = new Map();

  function loadCached(url) {
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url)); // (*)
    }
  
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        cache.set(url,text);
        return text;
      });
  }
  `;

  return (
    <Container id="contact">
      <Content>
        <Heading as="h3">Wanna build something new or have an idea?</Heading>
        <CodeBox>
          <Highlight>{codeString}</Highlight>
        </CodeBox>
      </Content>
      <Form />
    </Container>
  );
};

export default Contact;
