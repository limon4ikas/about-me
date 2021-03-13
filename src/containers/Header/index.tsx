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

type SectionName = 'about' | 'articles' | 'contact';

const Header: FunctionComponent = () => {
  const handleNavClick = (
    e: SyntheticEvent<HTMLAnchorElement, MouseEvent>,
    id: SectionName
  ): void => {
    e.preventDefault();
    const goToElement = document.getElementById(`${id}`);
    if (!goToElement) return;

    goToElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <Container id="header">
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
