import React from 'react';
import styled, { keyframes } from 'styled-components';
import hostelImage from '../../assets/hostel/profile.jpg'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IntroductionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  margin-top:20px;
  background-color: #f9f9f9;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1024px) {
    // padding: 60px 5%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 5%;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  margin-right: 40px;
  animation: ${fadeIn} 0.8s ease-out;
  @media (max-width: 1024px) {
    max-width: 55%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  // letter-spacing: -0.5px;
  line-height: 1.2;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 20px;
  font-weight: 400;
  // letter-spacing: 0.5px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #ff6b6b;
  margin-bottom: 30px;
  transition: width 0.3s ease;
  &:hover {
    width: 150px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.3;
  margin-bottom: 25px;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightText = styled.span`
  color: #ff6b6b;
  font-weight: 600;
  transition: color 0.3s ease;
  &:hover {
    color: #ff4757;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  width: 500px;
  height: 500px;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  
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
  }
  
  @media (max-width: 480px) { // Mobile
    width: 300px;
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const IntroductionComponent = () => {
  return (
    <IntroductionSection>
      <ContentWrapper>
        <Title>Best Hostel in Kathmandu</Title>
        <Subtitle>A Home Away From Home that Makes A Difference</Subtitle>
        <Underline />
        <Description>
         Rise Institute For Medical Education is the premier accommodation for students in Kathmandu. Our residents have confidence in us because we provide a safe, comfortable, and nurturing environment along with transparency. Our hostel management strategy is unique and student-oriented.
        </Description>
        <Description>
          We offer a range of amenities, including <HighlightText>comfortable rooms</HighlightText>, <HighlightText>nutritious meals</HighlightText>, <HighlightText>study areas</HighlightText>, and <HighlightText>recreational facilities</HighlightText>. Our expert staff helps students thrive academically and personally.
        </Description>
        <Description>
          As a leading hostel in Kathmandu, our mission is to empower young students in their educational journey, fostering an environment where they can grow, learn, and achieve their goals.
        </Description>
      </ContentWrapper>
      <ImageWrapper>
        <Image src={hostelImage} alt="Creative Genius Girls Hostel Common Area" />
      </ImageWrapper>
    </IntroductionSection>
  );
};

export default IntroductionComponent;