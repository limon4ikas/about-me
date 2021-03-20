import { FunctionComponent } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import Articles from './Articles';
import Contact from './Contact';
import { Container } from './styles';
import Chart from '../components/Chart';

// TODO: #19 Show spinner when loading app
const App: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <AboutMe />
      <Chart />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
