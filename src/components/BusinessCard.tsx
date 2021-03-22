import { FunctionComponent } from 'react';
import Text from './Text';
import Link from './Link';
import Heading from './Heading';
import Highlight from 'react-highlight';
import styled from 'styled-components';
import { device } from '../styles/responsive';

const Container = styled.div`
  grid-area: hero;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${device.tablet} {
    padding: 0;
    height: 50vh;
    justify-content: center;
  }

  @media ${device.mobileM} {
    margin-top: 2rem;
  }
`;

const CodeBox = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const HighlightBox = styled(Highlight)`
  border-radius: 0.6rem;
  background-color: #292c3c;
  font-size: 1.6rem;
`;

const Business = styled(Heading)`
  color: #438fff;
  font-weight: 500;
  font-size: 3rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const MakeWork = styled(Heading)`
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const Box = styled.div``;

const BottomText = styled(Text)`
  font-size: 2rem;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

const LinkedWithMe = styled(Link)`
  &:link,
  &visited {
    font-size: 2rem;
    color: #4e5169;
    font-weight: 400;
    transition: all 0.2s ease-out;

    &:hover {
      color: #448fff;
    }

    @media ${device.tablet} {
      font-size: 1.4rem;
    }
  }
`;

const BusinessCard: FunctionComponent = () => {
  const codeString = `
    let cache = new Map();
  
    function loadCached(url) {
      if (cache.has(url)) {
        return Promise.resolve(cache.get(url)); // (*)
      }
    }
    `;

  return (
    <Container>
      <Business as="h3">Wanna build something new or have an idea?</Business>
      <CodeBox>
        <HighlightBox>{codeString}</HighlightBox>
      </CodeBox>
      <BottomText>
        Have a startling idea, but don't know where to begin? Now is the time to
        put all those crazy ideas into action.
      </BottomText>
      <MakeWork as="h3">Let's make it work</MakeWork>
      <Box>
        <LinkedWithMe goTo="tel:+79995285910">+7 (999) 999-99-99</LinkedWithMe>
        <LinkedWithMe goTo="mailto:kostromindv.work@gmail.com">
          kostromindv.work@gmail.com
        </LinkedWithMe>
      </Box>
    </Container>
  );
};

export default BusinessCard;
