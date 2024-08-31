import React from 'react';
import styled from 'styled-components';
import { Check, ChevronRight } from 'lucide-react';
import img1 from '../../assets/gallary/studentgroup1.jpg';

const SectionContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; // Changed from flex-start to center
    min-height: 600px; // Added to ensure enough vertical space
  }

  @media (min-width: 1024px) {
    padding: 60px 40px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    flex: 1;
    min-width: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 0.9rem;
  color: #ff6b35;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MainTitle = styled.h3`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 30px;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #1a3c34;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckIcon = styled(Check)`
  color: #ff6b35;
  margin-right: 10px;
`;

const ReadMoreButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #e55a2b;
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin-top: 30px;

  @media (max-width: 1440px) { // Large desktop
    width: 450px;
    height: 450px;
  }

  @media (max-width: 1024px) { // Small desktop/laptop
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) { // Tablet
    width: 350px;
    height: 350px;
    margin: 30px auto 0;
  }

  @media (max-width: 480px) { // Mobile
  
    width: 300px;
    height: 300px;
    margin: 30px auto 0;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: #1a3c34;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    padding: 15px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle>Why Choose Us</SectionTitle>
        <MainTitle>Why Students Love Rise Institute For Medical Education?</MainTitle>
        <Description>
          Experience the perfect blend of academic support, comfort, and a nurturing environment.
          Our prime location and exceptional services make us the ideal choice for medical students in Kathmandu.
        </Description>
        <FeatureList>
          <FeatureItem><CheckIcon size={20} /> Prime location near medical institutions</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> 24/7 study areas and library</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Mentorship programs</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> High-speed internet</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Comfortable accommodations</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Nutritious meal plans</FeatureItem>
        </FeatureList>
      </ContentContainer>
      <ImageContainer>
        <MainImage src={img1} alt="Rise Institute study area" />
        
      </ImageContainer>
    </SectionContainer>
  );
};

export default WhyChooseUs;