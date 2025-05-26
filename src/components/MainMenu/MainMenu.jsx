import { Container } from "../Layout/LayoutStyled";
import { MainMenuStyle, MenuList, MenuItem } from "./MainMenuStyled";

const MainMenu = () => {
  return (
    <MainMenuStyle>
      <Container>
        <MenuList>
          <MenuItem>Информация</MenuItem>
          {/* <MenuItem>Статьи</MenuItem>
          <MenuItem>Отзывы</MenuItem>
          <MenuItem>Контакты</MenuItem> */}
        </MenuList>
      </Container>
    </MainMenuStyle>
  );
};

export default MainMenu;
