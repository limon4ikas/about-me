import { AiOutlineCodeSandbox } from 'react-icons/ai';
import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;
  padding: 0 4rem;
  font-size: 2rem;

  @media ${device.mobileL} {
    padding: 0 2rem;
    font-size: 1.6rem;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(AiOutlineCodeSandbox)`
  width: 6rem;
  height: 6rem;

  fill: #448fff;
`;

export const NavBox = styled.nav``;

export const NavList = styled.ul`
  list-style: none;

  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: currentColor;
    border-bottom: 0px solid #448fff;
    transition: all 0.2s;
  }

  &:link:hover,
  &:visited:hover {
    border-bottom: 3px solid #448fff;
  }
`;