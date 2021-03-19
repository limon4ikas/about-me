import { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export enum SkillColors {
  TypeScript = '#3178c6',
  JavaScript = '#f1e05a',
  HTML = '#ff4f47',
  CSS = '#a95fff',
  React = '#61dafb',
}

const data = [
  { name: 'HTML', value: 95, color: SkillColors.HTML },
  { name: 'CSS', value: 80, color: SkillColors.CSS },
  { name: 'JavaScript', value: 75, color: SkillColors.JavaScript },
  { name: 'TypeScript', value: 60, color: SkillColors.TypeScript },
  { name: 'React', value: 55, color: SkillColors.React },
];

class SkillsChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Legend />
          <Tooltip />
          {data.map((skill) => (
            <Bar dataKey="value" fill={skill.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default SkillsChart;
