import styled from 'styled-components';
import { device } from '../../styles/responsive';

export enum Languages {
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  HTML = 'HTML',
  CSS = 'CSS',
}

export enum LanguagesColors {
  TypeScript = '#3A7BCC',
  JavaScript = '#f1e05a',
  HTML = '#e34c26',
  CSS = '#563d7c',
  defaultWhite = '#fff',
}

export const calcColor = (language: Languages): LanguagesColors => {
  switch (language) {
    case Languages.TypeScript:
      return LanguagesColors.TypeScript;
    case Languages.JavaScript:
      return LanguagesColors.JavaScript;
    case Languages.HTML:
      return LanguagesColors.HTML;
    case Languages.CSS:
      return LanguagesColors.CSS;
    default:
      return LanguagesColors.defaultWhite;
  }
};

interface cardStyleProps {
  language: Languages;
}

export const Container = styled.div<cardStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem 2rem;

  background-color: #2a2c3c;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  }

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: ${({ language }) => calcColor(language)};
    height: 100%;
    width: 5px;
    left: 0rem;
    top: 0rem;
  }

  @media ${device.mobileL} {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }
`;

export const Name = styled.h3<cardStyleProps>`
  color: ${({ language }) => calcColor(language)};
  transition: all 0.2s;
  font-weight: 400;

  &:hover {
    color: #fff;
  }
`;

export const Description = styled.p``;

export const TagsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Language = styled.p`
  color: #b2e2ff;
`;

export const Stars = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #b2e2ff;
`;
