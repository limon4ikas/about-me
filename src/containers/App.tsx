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
  max-width: 140rem;
  margin: 8rem auto;
  font-size: 1.6rem;
  border-radius: 2rem;

  background-color: #1f1f2f;

  /* display: grid;
  grid-template-columns: minmax(6rem, 1fr) repeat(
      10,
      minmax(min-content, 14rem)
    ) minmax(6rem, 1fr); */

  @media only screen and (max-width: 87.5em) {
    border-radius: 0;
    margin: 0;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 1.4rem;
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
