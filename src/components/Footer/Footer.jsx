import { Container } from "../Layout/LayoutStyled";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FooterStyled } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <SocialIcons />
      </Container>
    </FooterStyled>
  );
};

export default Footer;
