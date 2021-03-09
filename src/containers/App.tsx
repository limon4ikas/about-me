import { FunctionComponent, SyntheticEvent } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import Articles from './Articles';
import Contact from './Contact';
import { Container } from './styles';

export type handleNavFunction = (
  e: SyntheticEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => void;

const App: FunctionComponent = () => {
  const handleNavClick: handleNavFunction = (e, id) => {
    e.preventDefault();

    const goToElement = document.getElementById(`${id}`);
    if (!goToElement) return;

    goToElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <GlobalStyles />
      <Header handleNavClick={handleNavClick} />
      <AboutMe />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
