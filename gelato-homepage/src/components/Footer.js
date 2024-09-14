import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #222;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Gelato - All Rights Reserved</p>
    </FooterContainer>
  );
};

export default Footer;
