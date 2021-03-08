import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
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
    background-color: ${({ color }) => color};
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
  color: ${({ color }) => color};
  transition: all 0.2s;
  font-weight: 400;

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

interface ProjectCardsProps {
  repo: Repo;
  color: string;
}

const ProjectCard: FunctionComponent<ProjectCardsProps> = ({
  repo: { name, description, language, html_url, stargazers_count },
  color,
}) => {
  console.log(color);
  return (
    <Container color={color}>
      <Link goTo={html_url}>
        <Name color={color}>{name}</Name>
      </Link>
      <Description>{description}</Description>
      <TagsBox>
        <Language>{language}</Language>
        <Stars>
          <AiOutlineStar />
          {stargazers_count}
        </Stars>
      </TagsBox>
    </Container>
  );
};

export default ProjectCard;
