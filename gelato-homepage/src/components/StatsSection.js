import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StatItem = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #eaeaea;
`;

const StatsSection = () => {
  return (
    <StatsContainer>
      <StatItem>
        <h2>90%</h2>
        <p>of all orders are produced locally</p>
      </StatItem>
      <StatItem>
        <h2>90%</h2>
        <p>of orders arrive within 5 days of ordering</p>
      </StatItem>
      <StatItem>
        <h2>140+</h2>
        <p>print providers across 32 countries</p>
      </StatItem>
    </StatsContainer>
  );
};

export default StatsSection;
