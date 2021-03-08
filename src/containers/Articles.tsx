import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import Article from '../components/Article';
import article1 from '../assets/img/article-1.jpg';
import article2 from '../assets/img/article-2.jpg';
import article3 from '../assets/img/article-3.jpg';

const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 0 2rem;
  }
`;

const ArticlesBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Articles: FunctionComponent = () => {
  return (
    <Container id="articles">
      <SectionHeading text="Articles" />
      <ArticlesBox>
        <Article imgSrc={article1} />
        <Article imgSrc={article2} />
        <Article imgSrc={article3} />
      </ArticlesBox>
    </Container>
  );
};

export default Articles;
