import { FunctionComponent, SyntheticEvent } from 'react';
import {
  Container,
  LogoBox,
  Logo,
  NavBox,
  NavList,
  NavItem,
  NavLink,
} from './styles';

const Header: FunctionComponent = () => {
  const handleNavClick = (
    e: SyntheticEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ): void => {
    e.preventDefault();

    const goToElement = document.getElementById(`${id}`);
    if (!goToElement) return;

    goToElement.scrollIntoView({ behavior: 'smooth' });
  };

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
