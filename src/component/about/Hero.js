import React from 'react';
import styled, { keyframes } from 'styled-components';
import ima from '../../assets/gallary/11.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  background-image: url(${ima});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;


  /* Mobile styles (default) */
  @media (max-width: 767px) {
    background-size: cover;
    background-position: center;
      height: 80vh;

  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 50px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    // padding: 80px;
    margin-bottom:0px; 
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 15px;
  max-width: 100%;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  animation: ${fadeIn} 1s ease-out 0.5s both;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    margin-top: 25px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>ABOUT US</Title>
      </Content>
    </HeroSection>
  );
};

export default Hero;