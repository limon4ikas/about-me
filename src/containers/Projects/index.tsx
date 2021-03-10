import { FunctionComponent, useEffect, useState } from 'react';
import {
  NotificationColor,
  NotificationItem,
  NotificationType,
} from '../NotificationContainer/types';
import github from '../../api/github';
import SectionHeading from '../../components/SectionHeading';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Link from '../../components/Link';
import {
  Container,
  SectionNameContainer,
  CardsContainer,
  ProjectCardPlaceholder,
} from './styles';
import { Languages } from '../../components/ProjectCard/styles';
import NotificationContainer from '../NotificationContainer';

export interface Repo {
  id: number;
  name: string;
  language: Languages;
  description: string;
  stargazers_count: number;
  html_url: string;
}

const Projects: FunctionComponent = () => {
  const [repos, setRepos] = useState<Repo[] | []>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await github.get<Repo[]>('/users/limon4ikas/repos');
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProjects();
  }, []);

  if (!repos)
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
    );

  const renderRepos = repos.map((repo: Repo) => {
    return <ProjectCard repo={repo} key={repo.id} />;
  });

  const testList: NotificationItem[] = [
    {
      id: 1,
      title: NotificationType.Success,
      description: 'This is a success toast component',
      backgroundColor: NotificationColor.Success,
      icon: '',
    },
    {
      id: 2,
      title: NotificationType.Danger,
      description: 'This is an error toast component',
      backgroundColor: NotificationColor.Danger,
      icon: '',
    },

    {
      id: 3,
      title: NotificationType.Info,
      description: 'This is an info toast component',
      backgroundColor: NotificationColor.Info,
      icon: '',
    },
    {
      id: 4,
      title: NotificationType.Warning,
      description: 'This is a warning toast component',
      backgroundColor: NotificationColor.Warning,
      icon: '',
    },
  ];

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

      <CardsContainer>
        <NotificationContainer notificationList={testList} />
        {renderRepos}
      </CardsContainer>
    </Container>
  );
};

export default Projects;
