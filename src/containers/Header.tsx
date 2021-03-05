import styled from 'styled-components';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;
  padding: 0 4rem;

  font-size: 2rem;
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

const NavItem = styled.li`
  box-sizing: content-box;
  border-bottom: 3px transparent #448fff;

  &:hover {
    border-bottom: 3px solid #448fff;
  }
`;

const NavLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: currentColor;
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <NavBox>
        <NavList>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavBox>
    </Container>
  );
};

export default Header;
