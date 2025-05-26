import React from "react";
import { FaViber, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IconsWrapper, IconLink } from "./SocialIconsStyled";

function SocialIcons() {
  return (
    <IconsWrapper>
      <IconLink href="viber://chat?number=%2B380991234567" target="_blank" rel="noopener noreferrer">
        <FaViber />
      </IconLink>
      <IconLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </IconLink>
      <IconLink
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </IconLink>
    </IconsWrapper>
  );
}

export default SocialIcons;
