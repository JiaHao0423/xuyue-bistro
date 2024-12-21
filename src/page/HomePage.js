import DefaultLayout from '../components/layout/DefaultLayout';
import ParallaxContainer from '../components/common/ParallaxContainer';
import ParallaxImage from '../images/footer_img2.jpg';
import styled from 'styled-components';
import { animated, useTransition } from '@react-spring/web';
import FoodImage1 from '../images/footer_img3.jpg';

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

const items = ['給你一個懷舊復古放鬆的空間，', '分享著你的故事，', '我們敘於月下，談於你我。'];

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
`;

const MenuSection = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const CategoryTitle = styled.div`
  font-size: 20px;
`;

const MenuList = styled.div`
  margin-top: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 20px;
  justify-content: space-between;
`;

const ItemDivider = styled.div`
  border-style: dotted;
  border-bottom-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-color: #000000;
  height: 0;
  width: 30px;
  margin: 10px 0;
  flex-grow: 1;
`;

const MenuImage = styled.div`
  background-image: url(${FoodImage1});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  margin-left: 50px;
`;

const HomePage = () => {
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    delay: 500, // 每行淡入的延遲時間
    trail: 1000, // trail屬性讓動畫依序進行
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
      <MenuTitle>精選菜單</MenuTitle>
      <MenuContainer>
        <MenuSection>
          <CategoryTitle>Pasta | 義大利麵</CategoryTitle>
          <MenuList>
            <MenuItem>
              <div>上天給的禮物</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>敘月招牌烤雞腿義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>不被炒魷魚義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>真的很蝦ㄟ義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>彈牙豬(松阪豬)義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>鮭魚義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>非常牛(牛板腱)義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>海派(綜合海鮮)義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
            <MenuItem>
              <div>鮮嫩巴沙魚義大利麵</div>
              <ItemDivider />
              <div>$230</div>
            </MenuItem>
          </MenuList>
        </MenuSection>
        <MenuImage />
      </MenuContainer>
    </DefaultLayout>
  );
};

export default HomePage;
