import { FunctionComponent } from 'react';
import SectionHeading from '../../components/SectionHeading';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { Container, SectionNameContainer, CardsContainer } from './styles';

const Projects: FunctionComponent = () => {
  return (
    <Container>
      <SectionNameContainer>
        <SectionHeading>Projects</SectionHeading>
        <Button>
          <Link goTo="https://github.com/limon4ikas">
            Learn more <span>&#8594;</span>
          </Link>
        </Button>
      </SectionNameContainer>

      <CardsContainer>
        <Card /> <Card />
        <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </Container>
  );
};

<span></span>;

export default Projects;
