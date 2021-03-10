import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Link from './Link';

export const FollowMe = styled.div`
  color: #4e5169;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconBox = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
    transition: fill 0.2s ease-out;
  }
`;

const InstagramIcon = styled(AiFillInstagram)`
  &:hover {
    fill: #d6249f;
  }
`;

const TwitterIcon = styled(AiFillTwitterSquare)`
  &:hover {
    fill: #00acee;
  }
`;

const GitHubIcon = styled(AiFillGithub)`
  &:hover {
    fill: #f9826c;
  }
`;

const SocialIconsBox: FunctionComponent = () => {
  return (
    <>
      <FollowMe>Follow me</FollowMe>
      <SocialBox>
        <SocialIconBox>
          <Link goTo="https://www.instagram.com/limon4ikas/">
            <InstagramIcon />
          </Link>
        </SocialIconBox>
        <SocialIconBox>
          <Link goTo="https://twitter.com/Cat_and_Paws">
            <TwitterIcon />
          </Link>
        </SocialIconBox>
        <SocialIconBox>
          <Link goTo="https://github.com/limon4ikas">
            <GitHubIcon />
          </Link>
        </SocialIconBox>
      </SocialBox>
    </>
  );
};

export default SocialIconsBox;
