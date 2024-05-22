import Header from '../Header/Header';
import { Container } from './LayoutStyled';
import { Outlet } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainMenu/>
      <Outlet />
      <Footer/>
    </Container>
  );
};

export default Layout;
