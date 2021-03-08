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
  console.log(repos);

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

  const renderRepos = repos.map((repo: Repo) => {
    const calcColor = (language: string) => {
      console.log(language);
      switch (language) {
        case 'TypeScript':
          return '#2b7489';
        case 'JavaScript':
          return '#f1e05a';
        case 'HTML':
          return '#e34c26';
        case 'CSS':
          return '#563d7c';
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
