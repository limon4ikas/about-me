import { FunctionComponent, SyntheticEvent } from 'react';
import { handleNavFunction } from '../App';
import {
  Container,
  LogoBox,
  Logo,
  NavBox,
  NavList,
  NavItem,
  NavLink,
} from './styles';

interface HeaderProps {
  handleNavClick: handleNavFunction;
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
