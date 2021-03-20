import styled from 'styled-components';
import { FaGitAlt } from 'react-icons/fa';
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledComponents,
  SiTypescript,
} from 'react-icons/si';
import Text from './Text';
import { FunctionComponent } from 'react';

const SkillsBox = styled.div`
  grid-area: skills;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
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
        <SkillItem>
          <SiStyledComponents />
          <Text>Styled Components</Text>
        </SkillItem>
      </SkillList>
    </SkillsBox>
  );
};

export default Skills;
