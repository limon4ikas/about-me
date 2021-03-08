import { FunctionComponent } from 'react';
import SectionHeading from '../../components/SectionHeading';
import Article from '../../components/Article';
import article1 from '../../assets/img/article-1.jpg';
import article2 from '../../assets/img/article-2.jpg';
import article3 from '../../assets/img/article-3.jpg';
import { Container, ArticlesBox } from './styles';

const Articles: FunctionComponent = () => {
  return (
    <Container id="articles">
      <SectionHeading>Articles</SectionHeading>
      <ArticlesBox>
        <Article imgSrc={article1} />
        <Article imgSrc={article2} />
        <Article imgSrc={article3} />
      </ArticlesBox>
    </Container>
  );
};

export default Articles;
