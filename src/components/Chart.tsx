import React, { FunctionComponent } from 'react';
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
import { device } from '../styles/responsive';
import Skills from './Skills';

const Container = styled.section`
  margin-top: 8rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-areas: 'skills chart';
  align-items: center;
  justify-items: center;

  @media ${device.laptop} {
    margin-top: 4rem;
    grid-template-areas: 'skills' 'chart';
    grid-row-gap: 4rem;
  }
`;

const ChartBox = styled.div`
  width: 40rem;
  height: 40rem;
  grid-area: chart;

  @media ${device.mobileL} {
    width: 30rem;
    height: 30rem;
  }
`;

const data = [
  {
    skill: 'Javascript',
    value: 80,
  },
  {
    skill: 'HTML',
    value: 90,
  },

  {
    skill: 'CSS',
    value: 90,
  },

  {
    skill: 'Typescript',
    value: 65,
  },
  {
    skill: 'React',
    value: 85,
  },
  {
    skill: 'Redux',
    value: 80,
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
      <Content>
        <Skills />
        <ChartBox>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: '#fff', fontFamily: 'Roboto' }}
              />
              <PolarRadiusAxis
                tickFormatter={customTick}
                domain={[0, 100]}
                tick={{ fill: '#fff', fontFamily: 'Roboto' }}
              />
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
      </Content>
    </Container>
  );
};

export default Chart;
