import { FunctionComponent } from 'react';
import Text from './Text';
import { device } from '../styles/responsive';
import { FaGitAlt } from 'react-icons/fa';
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';
import styled from 'styled-components';

const SkillsBox = styled.div`
  grid-area: skills;
`;

const SkillList = styled.ul`
  list-style: none;
  font-size: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 8rem;
  align-items: center;

  @media ${device.mobileM} {
    grid-column-gap: 4rem;
    font-size: 1.6rem;
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;

const Skills: FunctionComponent = () => {
  return (
    <SkillsBox>
      <SkillList>
        <SkillItem>
          <SiHtml5 />
          <Text>HTML</Text>
        </SkillItem>
        <SkillItem>
          <SiCss3 />
          <Text>CSS</Text>
        </SkillItem>
        <SkillItem>
          <SiSass />
          <Text>SASS</Text>
        </SkillItem>
        <SkillItem>
          <SiTypescript />
          <Text>Typescript</Text>
        </SkillItem>
        <SkillItem>
          <SiJavascript />
          <Text>Javascript</Text>
        </SkillItem>
        <SkillItem>
          <SiReact />
          <Text>React</Text>
        </SkillItem>
        <SkillItem>
          <SiRedux />
          <Text>Redux</Text>
        </SkillItem>
        <SkillItem>
          <FaGitAlt />
          <Text>Git</Text>
        </SkillItem>
      </SkillList>
    </SkillsBox>
  );
};

export default Skills;
