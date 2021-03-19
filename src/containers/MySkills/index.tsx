import { FunctionComponent } from 'react';
import Heading from '../../components/Heading';
import BarChart from '../../components/BarChart';
import { Container, ChartBox } from './styles';

export enum SkillColors {
  TypeScript = '#3178c6',
  JavaScript = '#f1e05a',
  HTML = '#ff4f47',
  CSS = '#a95fff',
  React = '#61dafb',
}

const data = [
  { name: 'HTML', value: 100, color: SkillColors.HTML },
  { name: 'CSS', value: 100, color: SkillColors.CSS },
  { name: 'JavaScript', value: 75, color: SkillColors.JavaScript },
  { name: 'TypeScript', value: 100, color: SkillColors.TypeScript },
  { name: 'React', value: 100, color: SkillColors.React },
];

const MySkills: FunctionComponent = () => {
  return (
    <Container>
      <Heading as="h2">My Skills</Heading>
      <ChartBox>
        <BarChart />
      </ChartBox>
    </Container>
  );
};

export default MySkills;
