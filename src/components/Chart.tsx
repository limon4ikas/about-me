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
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    skill: 'CSS',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    skill: 'Javascript',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    skill: 'Typescript',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    skill: 'React',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    skill: 'Redux',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Chart: FunctionComponent = () => {
  return (
    <Container>
      <Heading as="h2">My Skills</Heading>
      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartBox>
    </Container>
  );
};

export default Chart;
