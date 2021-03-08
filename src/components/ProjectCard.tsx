import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { FunctionComponent } from 'react';
import { device } from '../styles/responsive';
import { Repo } from '../containers/Projects';
import Link from '../components/Link';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem 2rem;

  background-color: #2a2c3c;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: #81f59b;
    height: 100%;
    width: 5px;
    left: 0rem;
    top: 0rem;
  }

  @media ${device.mobileL} {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }
`;

const Name = styled.h3`
  color: #81f59b;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

const Description = styled.p``;

const TagsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Language = styled.p`
  color: #b2e2ff;
`;

const Stars = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #b2e2ff;
`;

const languageColors = {};

interface ProjectCardsProps {
  repo: Repo;
}

const ProjectCard: FunctionComponent<ProjectCardsProps> = ({ repo }) => {
  return (
    <Container>
      <Link goTo={repo.html_url}>
        <Name>{repo.name}</Name>
      </Link>
      <Description>{repo.description}</Description>
      <TagsBox>
        <Language>{repo.language}</Language>
        <Stars>
          <AiOutlineStar />
          {repo.stargazers_count}
        </Stars>
      </TagsBox>
    </Container>
  );
};

export default ProjectCard;
