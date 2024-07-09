import {
  HeaderStyled,
  HeaderTelephoneBlock,
  HeaderTelephone,
  HeaderSiteName,
} from "./HeaderStyled";
import logo from "./logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={logo} alt="logo" width={80} />
      </div>
      <HeaderSiteName>
        Украинский реабилитационный центр психотерапии детей и взрослых МЗУ
      </HeaderSiteName>
      <HeaderTelephoneBlock>
        <HeaderTelephone href="tel:+380502840598">+38(050) 284-05-98</HeaderTelephone>
        <HeaderTelephone href="tel:+380684778944">+38(068) 477-89-44</HeaderTelephone>
      </HeaderTelephoneBlock>
    </HeaderStyled>
  );
};

export default Header;
