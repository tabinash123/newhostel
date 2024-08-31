import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Users, Book, Home, Heart } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IntroSection = styled.section`
  background-color: #faf7f2;
  padding: 60px 0;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  @media (min-width: 1024px) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #ff6b6b;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  color: #ff6b6b;
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Highlight = styled.span`
  color: #ff6b6b;
  font-weight: 600;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const FeatureItem = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.div`
  color: #ff6b6b;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const QuoteSection = styled.blockquote`
  font-style: italic;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #555;
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
  position: relative;

  &::before, &::after {
    content: '"';
    font-size: 4rem;
    color: #ff6b6b;
    opacity: 0.3;
    position: absolute;
  }

  &::before {
    top: -20px;
    left: -20px;
  }

  &::after {
    bottom: -40px;
    right: -20px;
  }
`;

const AboutUsIntro = () => {
  return (
    <IntroSection>
      <Container>
        <Content>
          <Title>Welcome to Rise Institute For Medical Education</Title>
          <Subtitle>Your Home Away From Home in Kathmandu</Subtitle>
          <Description>
            At Rise Institute For Medical Education, we believe in providing <Highlight>more than just accommodation</Highlight>.
            We offer a nurturing environment where students can thrive academically,
            personally, and socially. Our state-of-the-art facilities, coupled with a
            supportive community, create the perfect setting for aspiring medical professionals to pursue their
            dreams and build lifelong connections.
          </Description>
          <Description>
            Founded with a vision to support medical education, Rise Institute has become a <Highlight>cornerstone of academic excellence</Highlight> in
            Kathmandu. We foster an atmosphere of growth, independence, and mutual respect,
            ensuring that every resident feels safe, comfortable, and inspired throughout their educational journey.
          </Description>
          
          <QuoteSection>
            "Rise Institute is not just a place to stay; it's a launchpad for your medical career, 
            a community that supports your dreams, and a home that nurtures your growth."
          </QuoteSection>
          
          <FeaturesGrid>
            <FeatureItem>
              <FeatureIcon><Users size={40} /></FeatureIcon>
              <FeatureTitle>Supportive Community</FeatureTitle>
              <FeatureDescription>Build lasting friendships and study partnerships</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon><Book size={40} /></FeatureIcon>
              <FeatureTitle>Academic Focus</FeatureTitle>
              <FeatureDescription>Dedicated study areas and resources for success</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon><Home size={40} /></FeatureIcon>
              <FeatureTitle>Modern Facilities</FeatureTitle>
              <FeatureDescription>Comfortable living spaces with all amenities</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon><Heart size={40} /></FeatureIcon>
              <FeatureTitle>Holistic Care</FeatureTitle>
              <FeatureDescription>Support for physical and mental well-being</FeatureDescription>
            </FeatureItem>
          </FeaturesGrid>
        </Content>
      </Container>
    </IntroSection>
  );
};

export default AboutUsIntro;