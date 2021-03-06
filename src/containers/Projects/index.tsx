import { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  NotificationColor,
  NotificationItem,
  NotificationType,
} from '../NotificationContainer/types';
import github from '../../api/github';
import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Link from '../../components/Link';
import NotificationContainer from '../NotificationContainer';
import {
  Container,
  SectionNameContainer,
  CardsContainer,
  ProjectCardPlaceholder,
} from './styles';
import { randomId } from '../../utility';
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
  const [error, setError] = useState<string>('');
  const notificationList = useRef<NotificationItem[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await github.get<Repo[]>('/users/limon4ikas/repos');
        setRepos(data);
      } catch (error) {
        console.error(`ERROR: ${error.message}`);
        // TODO: #16 Improve random id or use index as an id?
        const notificationError: NotificationItem = {
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
            <Heading as="h2">Projects</Heading>
            <Button stripped>
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

  const renderRepos = repos
    .filter((repo) => repo.name !== 'limon4ikas')
    .map((repo: Repo) => {
      return <ProjectCard repo={repo} key={repo.id} />;
    });

  return (
    <Container>
      <SectionNameContainer>
        <Heading as="h2">Projects</Heading>
        <Button stripped>
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
