import styled from 'styled-components';

const MenuSection = styled.div`
  margin-top: 30px;
  width: 100%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const CategoryTitle = styled.div`
  font-size: 20px;
`;

const MenuListBox = styled.div`
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

const SauceSelection = styled.div`
  margin-top: 10px;
`;

const MenuList = ({ MenuItems, MenuTitle, Sauce }) => {
  return (
    <MenuSection>
      <CategoryTitle>{MenuTitle}</CategoryTitle>
      <MenuListBox>
        {MenuItems.map((item, index) => (
          <MenuItem key={index}>
            <div>{item.name}</div>
            <ItemDivider />
            <div>${item.price}</div>
          </MenuItem>
        ))}
      </MenuListBox>
      {Sauce ? <SauceSelection>口味選擇:清炒(義大利麵限定)/青醬/奶油白醬/松露牛肝菌菇菇醬</SauceSelection> : null}
    </MenuSection>
  );
};

export default MenuList;
