import React from 'react';
import styled from 'styled-components';
import { Headset, Home, Users, Wifi } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  // font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;

  @media (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 35px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
    grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  // background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 25px;
  }

  @media (min-width: 1024px) {
    padding: 30px 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const FeatureIcon = styled.div`
  color: #A17A0B;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 13px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 15px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 13px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 13.5px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const HotelFeaturesComponent = () => {
  return (
    <Container>
      <Title>Echo Adventure Resort Excellent Choice For Vacation.</Title>
      <Subtitle>
        Continually productize compelling quality for packed in business consulting elated
        Setting up to website and creating pages.
      </Subtitle>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>Customer Support</FeatureTitle>
          <FeatureIcon>
            <Headset size={36} />
          </FeatureIcon>
          <FeatureDescription>24 Hours Support</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Family Size Room</FeatureTitle>
          <FeatureIcon>
            <Home size={36} />
          </FeatureIcon>
          <FeatureDescription>Available Room</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Conference Room</FeatureTitle>
          <FeatureIcon>
            <Users size={36} />
          </FeatureIcon>
          <FeatureDescription>Conference Room Available</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Free Wifi Corner</FeatureTitle>
          <FeatureIcon>
            <Wifi size={36} />
          </FeatureIcon>
          <FeatureDescription>Free Wifi</FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </Container>
  );
};

export default HotelFeaturesComponent;