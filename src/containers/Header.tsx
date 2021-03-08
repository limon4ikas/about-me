import styled from 'styled-components';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { FunctionComponent } from 'react';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  height: 10rem;

  font-size: 2rem;

  @media only screen and (max-width: 31.25em) {
    padding: 0 2rem;

    font-size: 1.6rem;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(AiOutlineCodeSandbox)`
  width: 6rem;
  height: 6rem;

  fill: #448fff;
`;

const NavBox = styled.nav``;

const NavList = styled.ul`
  list-style: none;

  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
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

interface HeaderProps {
  handleNavClick: Function;
}

const Header: FunctionComponent<HeaderProps> = ({ handleNavClick }) => {
  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <NavBox>
        <NavList>
          <NavItem>
            <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#articles"
              onClick={(e) => handleNavClick(e, 'articles')}
            >
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </NavBox>
    </Container>
  );
};

export default Header;
