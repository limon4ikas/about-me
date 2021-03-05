import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2rem;
  background-color: #2a2c3c;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: #81f59b;
    height: 100%;
    width: 5px;
    left: 0rem;
    top: 0rem;
  }
`;

const Name = styled.h3``;

const Description = styled.p``;

const TagsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Language = styled.p`
  color: #b2e2ff;
`;

const Stars = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #b2e2ff;
`;

const Card = () => {
  return (
    <Container>
      <Name>Drain.js</Name>
      <Description>
        It allows you to simply view the icons in the selection.json file
        provided by Icomoon. bla bla bla
      </Description>
      <TagsBox>
        <Language>Javascript</Language>
        <Stars>
          <AiOutlineStar />
          32
        </Stars>
      </TagsBox>
    </Container>
  );
};

export default Card;
