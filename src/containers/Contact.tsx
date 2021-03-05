import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 8rem;
  background-color: #181827;
  padding: 0 4rem;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Heading = styled.h2``;

const Text = styled.p``;

const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  border: none;

  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  background-color: #217aff;
  border-radius: 1rem;
  color: #fff;
  text-align: center;

  padding: 1rem 1.6rem;

  transition: all 0.2s;

  &:hover {
    background-color: #448fff;
  }
`;

// background-color: #217aff;

const Contact: FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <Heading>Let's meet</Heading>
        <Text>
          You can use one of the methods below to get in touch with me!
        </Text>
        <ButtonsBox>
          <Button>E-mail</Button> <Button>Phone</Button>
        </ButtonsBox>
      </Content>
    </Container>
  );
};

export default Contact;
