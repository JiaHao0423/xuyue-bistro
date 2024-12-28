import DefaultLayout from '../components/layout/DefaultLayout';
import ParallaxContainer from '../components/common/ParallaxContainer';
import ParallaxImage from '../images/homePageImages/HomepageBanner.jpg';
import styled from 'styled-components';
import { animated, useTransition } from '@react-spring/web';
import FoodImage1 from '../images/homePageImages/Food_img1.jpg';
import FoodImage2 from '../images/homePageImages/Food_img2.jpg';
import MenuList from '../components/common/MenuList';
import PastaItems from '../components/item/PastaItem';
import OtherItems from '../components/item/OtherItems';
import { Link } from 'react-router-dom';
import MenuMotion from '../components/common/MenuMotion';

const ParallaxTextBox = styled.div`
  height: 60vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  p {
    text-align: center;
    color: white;
    font-size: 28px;
    font-weight: bold;
    line-height: 5px;
  }
`;

const MenuBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
const MenuTitle = styled.div`
  margin-top: 50px;
  font-size: 56px;
  text-align: center;
`;

const MenuContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const MenuImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: 100%;
  height: 440px;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 70%;
    height: 300px;
  }
`;

const MenuButton = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;
  padding: 10px 20px;
  border: 0.5px solid black;
  color: black;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  transition: color 0.3s ease;
  margin-top: 50px;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 0;
    transition: left 0.3s ease;
  }
  &:hover::before {
    left: 0;
  }
  &:hover {
    color: white;
  }
  span {
    position: relative;
    z-index: 1;
  }
`;

const HomePage = () => {
  const ParallaxText = ['給你一個懷舊復古放鬆的空間，', '分享著你的故事，', '我們敘於月下，談於你我。'];
  const transitions = useTransition(ParallaxText, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
    trail: 500,
    config: { duration: 500 },
  });

  return (
    <DefaultLayout>
      <ParallaxContainer url={ParallaxImage} strength={500}>
        <ParallaxTextBox>
          {transitions((style, item) => (
            <animated.p style={style}>{item}</animated.p>
          ))}
        </ParallaxTextBox>
      </ParallaxContainer>
      <MenuBox>
        <MenuTitle>精選菜單</MenuTitle>
        <MenuContainer>
          <MenuMotion direction={'left'}>
            <MenuList MenuItems={PastaItems} MenuTitle={'PASTA、RISOTTO | 義大利麵、燉飯'} Sauce={true} />
          </MenuMotion>
          <MenuMotion direction={'right'}>
            <MenuImage src={FoodImage1} />
          </MenuMotion>
        </MenuContainer>
        <MenuContainer>
          <MenuMotion direction={'left'} reverseOrder={true}>
            <MenuImage src={FoodImage2} />
          </MenuMotion>
          <MenuMotion direction={'right'}>
            <MenuList MenuItems={OtherItems} MenuTitle={'À LA CARTE | 單點'} />
          </MenuMotion>
        </MenuContainer>
        <Link to="/menu">
          <MenuButton>
            <span>瀏覽全部菜單</span>
          </MenuButton>
        </Link>
      </MenuBox>
    </DefaultLayout>
  );
};

export default HomePage;
