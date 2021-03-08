import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FollowMe = styled.div`
  color: #4e5169;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
