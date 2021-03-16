import { FunctionComponent } from 'react';
import Heading from '../../components/Heading';
import Article from '../../components/Article';
import article1 from '../../assets/img/article-1.jpg';
import article2 from '../../assets/img/article-2.jpg';
import article3 from '../../assets/img/article-3.jpg';
import { Container, ArticlesBox } from './styles';

// TODO: #11 Add or fetch articles from blog api
const Articles: FunctionComponent = () => {
  return (
    <Container id="articles">
      <Heading as="h2">Articles</Heading>
      <ArticlesBox>
        <Article
          title="Front End Tools"
          date="March 08, 2021"
          imgSrc={article1}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          impedit laborum cumque ipsam itaque, dolore eius delectus quaerat
          dolores quasi recusandae perferendis veritatis assumenda non. Eligendi
          ab velit aspernatur recusandae.
        </Article>

        <Article
          title="Front End Tools"
          date="March 08, 2021"
          imgSrc={article2}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          impedit laborum cumque ipsam itaque, dolore eius delectus quaerat
          dolores quasi recusandae perferendis veritatis assumenda non. Eligendi
          ab velit aspernatur recusandae.
        </Article>

        <Article
          title="Front End Tools"
          date="March 08, 2021"
          imgSrc={article3}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          impedit laborum cumque ipsam itaque, dolore eius delectus quaerat
          dolores quasi recusandae perferendis veritatis assumenda non. Eligendi
          ab velit aspernatur recusandae.
        </Article>
      </ArticlesBox>
    </Container>
  );
};

export default Articles;
