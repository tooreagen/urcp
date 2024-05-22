import Header from '../Header/Header';
import { Container } from './LayoutStyled';
import { Outlet } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainMenu/>
      <Outlet />
    </Container>
  );
};

export default Layout;
