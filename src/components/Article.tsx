import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: grid;
  grid-template-areas: 'photo content';
  gap: 2rem;

  margin: 2rem 0;

  @media only screen and (max-width: 46.875em) {
    grid-template-areas: 'photo' 'content';
  }
`;

const Photo = styled.img`
  grid-area: photo;
  border-radius: 1rem;
  max-width: 25rem;
  max-height: 25rem;
`;

const ContentBox = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Heading = styled.h3`
  color: #b2e2ff;
`;

const Date = styled.p`
  color: #4e5169;
`;

const Text = styled.p``;

const Button = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  font-family: inherit;
  background: transparent;
  color: currentColor;
  font-size: inherit;
  display: inline-block;
  align-self: flex-start;
  cursor: pointer;

  color: #b2e2ff;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }

  &span {
  }
`;
interface ArticleProps {
  imgSrc: string;
}

const Article: FunctionComponent<ArticleProps> = ({ imgSrc }) => {
  return (
    <Container>
      <Photo src={imgSrc} />
      <ContentBox>
        <HeadingBox>
          <Heading>Front End Tools</Heading>
          <Date>March 08, 2021</Date>
        </HeadingBox>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          impedit laborum cumque ipsam itaque, dolore eius delectus quaerat
          dolores quasi recusandae perferendis veritatis assumenda non. Eligendi
          ab velit aspernatur recusandae.
        </Text>
        <Button>
          Read more <span>&#8594;</span>
        </Button>
      </ContentBox>
    </Container>
  );
};

export default Article;
