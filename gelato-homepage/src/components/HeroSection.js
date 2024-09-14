import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroImage = styled.img`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const CTAButton = styled.button`
  padding: 15px 30px;
  background-color: #000;
  color: #fff;
  border: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Scale globally and sustainably with Gelato's local production</h1>
        <p>Sign up for free and only pay for what you sell.</p>
        <CTAButton>Get started for free</CTAButton>
      </HeroText>
      {/* Use the URL directly in the img src */}
      <HeroImage src="https://via.placeholder.com/500" alt="Gelato Products" />
    </HeroContainer>
  );
};

export default HeroSection;
