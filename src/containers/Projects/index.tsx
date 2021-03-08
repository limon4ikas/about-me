import { FunctionComponent, useEffect, useState } from 'react';
import github from '../../api/github';
import SectionHeading from '../../components/SectionHeading';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { Container, SectionNameContainer, CardsContainer } from './styles';

export interface Repo {
  id: number;
  name: string;
  language: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

const Projects: FunctionComponent = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        if (repos) return;

        const { data } = await github.get('/users/limon4ikas/repos');
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, [repos]);

  if (!repos) return <h1>Loading...</h1>;

  enum Languages {
    TypeScript = 'TypeScript',
    JavaScript = 'JavaScript',
    HTML = 'HTML',
    CSS = 'CSS',
  }

  enum LanguagesColors {
    TypeScript = '#2b7489',
    JavaScript = '#f1e05a',
    HTML = '#e34c26',
    CSS = '#563d7c',
  }

  const renderRepos = repos.map((repo: Repo) => {
    const calcColor = (language: string) => {
      switch (language) {
        case Languages.TypeScript:
          return LanguagesColors.TypeScript;
        case Languages.JavaScript:
          return LanguagesColors.JavaScript;
        case Languages.HTML:
          return LanguagesColors.HTML;
        case Languages.CSS:
          return LanguagesColors.CSS;
        default:
          return '#fff';
      }
    };
    return (
      <ProjectCard repo={repo} key={repo.id} color={calcColor(repo.language)} />
    );
  });

  return (
    <Container>
      <SectionNameContainer>
        <SectionHeading>Projects</SectionHeading>
        <Button>
          <Link goTo="https://github.com/limon4ikas">
            Learn more <span>&#8594;</span>
          </Link>
        </Button>
      </SectionNameContainer>

      <CardsContainer>{renderRepos}</CardsContainer>
    </Container>
  );
};

<span></span>;

export default Projects;
