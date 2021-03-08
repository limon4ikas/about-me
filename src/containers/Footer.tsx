import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Container = styled.section`
  padding: 0 4rem;
  padding: 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FollowMe = styled.div`
  color: #4e5169;
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <FollowMe>Follow me</FollowMe>
        <SocialBox>
          <SocialIconBox>
            <AiFillInstagram />
          </SocialIconBox>
          <SocialIconBox>
            <AiFillTwitterSquare />
          </SocialIconBox>
          <SocialIconBox>
            <AiFillGithub />
          </SocialIconBox>
        </SocialBox>
      </Content>
    </Container>
  );
};

export default Footer;
