import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Link from '../components/Link';
import { device } from '../styles/responsive';

const Container = styled.article`
  display: grid;
  grid-template-areas: 'photo content';
  gap: 2rem;

  @media ${device.tablet} {
    grid-template-areas:
      'photo'
      'content';

    align-items: center;
    justify-items: center;
  }
`;

const Photo = styled.img`
  grid-area: photo;

  max-width: 20rem;
  max-height: 20rem;
  object-fit: cover;
  align-self: center;

  border-radius: 1rem;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const ContentBox = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Heading = styled.h3`
  color: #b2e2ff;
  font-weight: 300;
`;

const Date = styled.p`
  color: #4e5169;
`;

const Text = styled.p``;

const LinkBox = styled.div`
  align-self: flex-start;
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
        <LinkBox>
          <Button>
            <Link goTo="#">
              Read more <span>&#8594;</span>
            </Link>
          </Button>
        </LinkBox>
      </ContentBox>
    </Container>
  );
};

export default Article;
