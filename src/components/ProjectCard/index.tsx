import { FunctionComponent } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Repo } from '../../containers/Projects';
import Link from '../Link';
import {
  Container,
  Name,
  Description,
  TagsBox,
  Language,
  Stars,
} from './styles';

interface ProjectCardsProps {
  repo: Repo;
}

const ProjectCard: FunctionComponent<ProjectCardsProps> = ({
  repo: { name, description, language, html_url, stargazers_count },
}) => {
  return (
    <Container language={language}>
      <Link goTo={html_url}>
        <Name language={language}>{name}</Name>
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
