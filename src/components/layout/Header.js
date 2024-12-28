import styled from 'styled-components';
import Logo from '../../images/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  background-color: #fff;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`;

const HeaderLogo = styled.img`
  height: 40px;
  margin: 12px;
`;
const NavigationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 520px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavigateLink = styled(Link)`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? '#bfbfbf' : '#000000')};
  &:hover {
    color: #bfbfbf;
  }
`;
const BurgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 10px;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    height: 4px;
    background-color: #000;
    width: 100%;
  }
`;

const MobileNav = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MobileNavLink = styled(Link)`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: center;
  border-bottom: 1px solid #ddd;
  color: ${(props) => (props.isActive ? '#bfbfbf' : '#000000')};
  &:hover {
    color: #bfbfbf;
  }
`;

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/about', label: '關於我們' },
    { path: '/menu', label: '精緻菜單' },
    { path: '/contacts', label: '聯絡我們' },
    { path: '/parking', label: '停車資訊' },
    { path: '/index', label: 'Home' },
  ];
  return (
    <HeaderContent>
      <StyledHeaderSection>
        <Link to="/index">
          <HeaderLogo src={Logo} />
        </Link>
        <NavigationBox>
          {navItems.map((item) => (
            <NavigateLink key={item.path} to={item.path} isActive={item.path === location.pathname}>
              {item.label}
            </NavigateLink>
          ))}
        </NavigationBox>
        <BurgerIcon onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </BurgerIcon>
        <MobileNav isOpen={isOpen}>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              isActive={item.path === location.pathname}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileNav>
      </StyledHeaderSection>
    </HeaderContent>
  );
};

export default Header;
