import { FunctionComponent } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import Articles from './Articles';
import Contact from './Contact';
import { Container } from './styles';

// TODO: Rework all general styled components for better reuse
const App: FunctionComponent = () => {
  return (
    <Container id="app-container">
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
