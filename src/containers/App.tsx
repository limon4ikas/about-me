import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import Articles from './Articles';
import Contact from './Contact';

const Container = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  font-size: 1.6rem;
  border-radius: 2rem;

  background-color: #1f1f2f;

  @media only screen and (max-width: 75em) {
    border-radius: 0;
    margin: 0;
  }
`;

const App: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <AboutMe />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
