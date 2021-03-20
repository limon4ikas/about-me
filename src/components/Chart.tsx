import { FunctionComponent, PureComponent } from 'react';
import Heading from './Heading';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Container = styled.section``;

const ChartBox = styled.div`
  height: 40rem;
`;

const data = [
  {
    skill: 'HTML',
    value: 100,
  },
  {
    skill: 'CSS',
    value: 78,
  },
  {
    skill: 'Javascript',
    value: 75,
  },
  {
    skill: 'Typescript',
    value: 55,
  },
  {
    skill: 'React',
    value: 65,
  },
  {
    skill: 'Redux',
    value: 45,
  },
];

const customTick = (_: number, index: number) => {
  switch (index) {
    case 0:
      return 'Basic';
    case 1:
      return 'Medium';
    case 2:
      return 'Good';
    case 3:
      return 'High';
    case 4:
      return 'Master';
    default:
      return 'Not Found';
  }
};

const Chart: FunctionComponent = () => {
  return (
    <Container>
      <Heading as="h2">My Skills</Heading>
      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis tickFormatter={customTick} />
            <Radar
              name="Mike"
              dataKey="value"
              stroke="#a6e22e"
              fill="#a6e22e"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartBox>
    </Container>
  );
};

export default Chart;
