import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from '../components/Link';

const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 0;
  }
`;

const SectionNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr;

  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

const SectionName = styled.h2`
  font-weight: 300;
`;

const Projects: FunctionComponent = () => {
  return (
    <Container>
      <SectionNameContainer>
        <SectionHeading text="Projects" />
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
