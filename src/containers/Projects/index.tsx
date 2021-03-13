import { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  NotificationColor,
  NotificationItem,
  NotificationType,
} from '../NotificationContainer/types';
import github from '../../api/github';
// COMPONENTS
import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Link from '../../components/Link';
import NotificationContainer from '../NotificationContainer';
// Styles
import {
  Container,
  SectionNameContainer,
  CardsContainer,
  ProjectCardPlaceholder,
} from './styles';
import { Languages } from '../../components/ProjectCard/styles';
import { randomId } from '../../utility';

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
  const [error, setError] = useState<string>('');
  const notificationList = useRef<NotificationItem[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await github.get<Repo[]>('/users/limon4ikas/repos');
        setRepos(data);
      } catch (error) {
        console.error(`ERROR: ${error.message}`);
        // TODO: Improve random id or use index as an id?
        const notificationError = {
          id: randomId(),
          type: NotificationType.Error,
          description: error.message,
          color: NotificationColor.Danger,
        };
        notificationList.current = [
          ...notificationList.current,
          notificationError,
        ];
        setError(error.message);
      }
    };

    getProjects();
  }, []);

  if (!repos)
    return (
      <>
        {error ? (
          <NotificationContainer notificationList={notificationList.current} />
        ) : null}
        <Container>
          <SectionNameContainer>
            <Heading type="h2">Projects</Heading>
            <Button>
              <Link goTo="https://github.com/limon4ikas">
                Learn more <span>&#8594;</span>
              </Link>
            </Button>
          </SectionNameContainer>

          <CardsContainer>
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
            <ProjectCardPlaceholder />
          </CardsContainer>
        </Container>
      </>
    );

  const renderRepos = repos.map((repo: Repo) => {
    return <ProjectCard repo={repo} key={repo.id} />;
  });

  return (
    <Container>
      <SectionNameContainer>
        <Heading type="h2">Projects</Heading>
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

export default Projects;
