import styled from 'styled-components';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div``;

const Logo = styled(AiOutlineCodeSandbox)`
  width: 2rem;
  height: 2rem;
`;

const NavBox = styled.nav``;

const NavList = styled.ul``;

const NavItem = styled.li``;

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <NavBox>
        <NavList>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
        </NavList>
      </NavBox>
    </Container>
  );
};

export default Header;
