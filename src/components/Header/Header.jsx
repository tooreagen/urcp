import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src='../../images/logo.png' alt='logo'/>
      </div>
      <div>Телефон</div>
      <div>График</div>
    </HeaderStyled>
  );
};

export default Header;
