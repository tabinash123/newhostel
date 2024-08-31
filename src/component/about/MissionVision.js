import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  text-align: center;
  color: #333;
  margin-bottom: 50px;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #ff6b6b;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  position: relative;
`;

const SubTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: #ff6b6b;
  margin-bottom: 25px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff6b6b;
  }
`;

const Content = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #ff6b6b;
  font-weight: 600;
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #666;
  border-left: 3px solid #ff6b6b;
  padding-left: 20px;
  margin-top: 30px;
`;

const MissionVisionSection = () => {
  return (
    <Section>
      <Title>Our Mission and Vision</Title>
      <ContentWrapper>
        <ContentBox>
          <SubTitle>Our Mission</SubTitle>
          <Content>
            At Rise Institute, our mission is to provide a <Highlight>safe, supportive, and empowering</Highlight> living environment for medical students in Nepal. We are committed to:
          </Content>
          <ul>
            <li>Fostering academic excellence through dedicated study spaces and resources</li>
            <li>Promoting personal growth and cultural understanding</li>
            <li>Creating a community that nurtures future healthcare professionals</li>
          </ul>
          <Content>
            By focusing on these key areas, we enable our residents to thrive in their educational journey and become confident, well-rounded individuals ready to make a positive impact in the medical field.
          </Content>
          <Quote>
            "Empowering the next generation of medical professionals through a nurturing living and learning environment."
          </Quote>
        </ContentBox>
        <ContentBox>
          <SubTitle>Our Vision</SubTitle>
          <Content>
            We envision a future where every medical student in Nepal has access to <Highlight>quality education and a nurturing living environment</Highlight>. Our hostel aims to be:
          </Content>
          <ul>
            <li>A beacon of excellence in student accommodation</li>
            <li>A hub for academic and personal development</li>
            <li>A diverse community fostering lifelong connections</li>
          </ul>
          <Content>
            By setting new standards for student housing, we strive to blend modern amenities with a culture of respect, diversity, and continuous improvement. Our goal is to create an environment that not only supports academic success but also nurtures the holistic development of future medical professionals.
          </Content>
          <Quote>
            "Shaping the future of medical education, one student at a time."
          </Quote>
        </ContentBox>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVisionSection;