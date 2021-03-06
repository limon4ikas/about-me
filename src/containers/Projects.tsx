import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;
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

const SectionName = styled.h2``;

const LearnMore = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  font-family: inherit;
  background: transparent;
  color: currentColor;
  font-size: inherit;
  display: inline-block;
  cursor: pointer;

  color: #b2e2ff;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

const Projects: FunctionComponent = () => {
  return (
    <Container>
      <SectionNameContainer>
        <SectionName>Projects</SectionName>
        <LearnMore>
          <a href="https://github.com/limon4ikas">
            Learn more <span>&#8594;</span>
          </a>
        </LearnMore>
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
