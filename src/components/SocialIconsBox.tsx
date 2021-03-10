import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

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

const SocialIconsBox: FunctionComponent = () => {
  return (
    <>
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
    </>
  );
};

export default SocialIconsBox;
