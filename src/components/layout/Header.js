import styled from 'styled-components';
import Container from '../common/Container';
import Logo from '../../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

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
  width: 30%;
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

const Header = () => {
  const location = useLocation();

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
      </StyledHeaderSection>
    </HeaderContent>
  );
};

export default Header;
