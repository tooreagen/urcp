import { MainMenuStyle, MenuList, MenuItem } from "./MainMenuStyled";

const MainMenu = () => {
  return (
    <MainMenuStyle>
      <MenuList>
        <MenuItem>Информация</MenuItem>
        <MenuItem>Статьи</MenuItem>
        <MenuItem>Отзывы</MenuItem>
        <MenuItem>Контакты</MenuItem>
      </MenuList>
    </MainMenuStyle>
  );
};

export default MainMenu;
