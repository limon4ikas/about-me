import { FunctionComponent, useEffect, useState } from 'react';
import github from '../../api/github';
import SectionHeading from '../../components/SectionHeading';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { Container, SectionNameContainer, CardsContainer } from './styles';
import { Languages } from '../../components/ProjectCard/styles';

export interface Repo {
  id: number;
  name: string;
  language: Languages;
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

  const renderRepos = repos.map((repo: Repo) => {
    return <ProjectCard repo={repo} key={repo.id} />;
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
