import styled from 'styled-components';
import Article from '../components/Article';
import article1 from '../assets/img/article-1.jpg';
import article2 from '../assets/img/article-2.jpg';
import article3 from '../assets/img/article-3.jpg';

const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;
`;

const SectionName = styled.h2`
  margin-bottom: 2rem;
`;

const ArticlesBox = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Articles = () => {
  return (
    <Container>
      <SectionName>Articles</SectionName>
      <ArticlesBox>
        <Article imgSrc={article1} />
        <Article imgSrc={article2} />
        <Article imgSrc={article3} />
      </ArticlesBox>
    </Container>
  );
};

export default Articles;
