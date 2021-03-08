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
  color: string;
}

const ProjectCard: FunctionComponent<ProjectCardsProps> = ({
  repo: { name, description, language, html_url, stargazers_count },
  color,
}) => {
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
