import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Home, Book, Users, Shield } from 'lucide-react';
import imga from '../../assets/gallary/5.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding-right: 3rem;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const SubTitle = styled.h3`
  color: #FF6B52;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  color: #0E4721;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
  line-height: 1.2;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #FF6B52;
  }

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledIcon = styled.div`
  color: #FF6B52;
  margin-right: 0.75rem;
  background-color: rgba(255, 107, 82, 0.1);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #FF6B52;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 107, 82, 0.3);

  &:hover {
    background-color: #e55a41;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 82, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 4;
  }
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <ContentArea>
        <SubTitle>Why Choose Us</SubTitle>
        <Title>Why Students Choose Our Hostel?</Title>
        <Description>
          We offer a safe, comfortable, and supportive environment for female students in Nepal. Our hostel combines modern amenities with a nurturing atmosphere to create a true home away from home.
        </Description>
        <FeatureList>
          {[
            { text: 'Safe and secure environment', icon: Shield },
            { text: 'Comfortable living spaces', icon: Home },
            { text: 'Study-friendly atmosphere', icon: Book },
            { text: 'Cultural diversity', icon: Users },
            { text: 'Nutritious meals provided', icon: Home },
            { text: 'Close to educational institutions', icon: Book },
          ].map((feature, index) => (
            <FeatureItem key={index}>
              <StyledIcon>
                <feature.icon size={18} />
              </StyledIcon>
              {feature.text}
            </FeatureItem>
          ))}
        </FeatureList>
      </ContentArea>
      <ImageArea>
        <Image src={imga} alt="Students in comfortable hostel environment" />
      </ImageArea>
    </Section>
  );
};

export default WhyChooseUs;