import { Tabs, Row, Col, Card } from 'antd';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import OtherItems from '../data/OtherItems';
import PastaItems from '../data/Pasta';
import SteakItems from '../data/Steak';
import FriedItems from '../data/Fried';
import PizzaItems from '../data/Pizza';
import DrinkItems from '../data/Drinks';
import SparklingDrinks from '../data/SparklingDrinks';
import HardDrink from '../data/HardDrink';

const { TabPane } = Tabs;

const MenuContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab:hover {
    color: #ff7f50; /* 修改文字颜色 */
    background: #f0f0f0; /* 添加背景颜色 */
    border-radius: 4px;
    transition: all 0.3s ease;
  }
`;

const TabContent = styled.div`
  opacity: 0;
  transform: translateY(40px);
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const menuData = {
  '義大利麵/燉飯': PastaItems,
  排餐: SteakItems,
  炸物: FriedItems,
  單點: OtherItems,
  烤餅: PizzaItems,
  無酒精飲品: DrinkItems,
  氣泡飲: SparklingDrinks,
  酒類: HardDrink,
};

const MenuPage = () => {
  return (
    <DefaultLayout>
      <MenuContainer>
        <h1>精緻菜單</h1>
        <CustomTabs defaultActiveKey="0" centered>
          {Object.keys(menuData).map((category, index) => (
            <TabPane tab={category} key={index}>
              <TabContent>
                <Row gutter={[16, 16]}>
                  {menuData[category].map((item) => (
                    <Col xs={24} sm={12} md={6} key={item.id}>
                      <Card
                        hoverable
                        cover={<img alt={item.name} src={item.image} style={{ height: 200, objectFit: 'cover' }} />}
                      >
                        <Card.Meta title={`${item.name} - $${item.price}`} description={item.description} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabContent>
            </TabPane>
          ))}
        </CustomTabs>
      </MenuContainer>
    </DefaultLayout>
  );
};

export default MenuPage;
