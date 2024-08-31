import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BookOpen, Wifi, Coffee, Users, Bed, Utensils } from 'lucide-react';
import img1 from "../../assets/facility/1.jpg";
import img2 from "../../assets/facility/garden.PNG";
import img3 from "../../assets/facility/garden.PNG";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  padding: 40px 20px;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 80px 40px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;

  @media (min-width: 992px) {
    flex: 3;
    padding: 0 40px 0 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  margin-top: 40px;

  @media (min-width: 992px) {
    flex: 2;
    margin-top: 0;
  }
`;

const Header = styled.h6`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;

  @media (min-width: 992px) {
    font-size: 42px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  color: #ff6b6b;
  background-color: #fff0f0;
  padding: 10px;
  border-radius: 50%;
`;

const FacilityContent = styled.div`
  flex: 1;
`;

const FacilityTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FacilityDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 20px;

  @media (min-width: 992px) {
    grid-template-rows: 250px 250px;
    height: 520px;
  }
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StudentHostelFacilities = () => {
  const facilities = [
    { icon: Bed, title: 'Comfortable Rooms', description: 'Well-furnished rooms with individual study spaces for focused preparation.' },
    { icon: BookOpen, title: 'Study Areas', description: 'Quiet, well-lit study rooms available 24/7 for uninterrupted exam preparation.' },
    { icon: Wifi, title: 'High-Speed Internet', description: 'Reliable Wi-Fi throughout the hostel for online resources and mock tests.' },
    { icon: Users, title: 'Group Study Rooms', description: 'Dedicated spaces for collaborative learning and peer discussions.' },
  ];

  return (
    <Container>
      <LeftSection>
        <Header>Hostel Amenities</Header>
        <Title>Comfortable Living for Focused Study</Title>
        <FacilitiesGrid>
          {facilities.map((facility, index) => (
            <FacilityItem key={index}>
              <IconWrapper>
                <facility.icon size={24} />
              </IconWrapper>
              <FacilityContent>
                <FacilityTitle>{facility.title}</FacilityTitle>
                <FacilityDescription>
                  {facility.description}
                </FacilityDescription>
              </FacilityContent>
            </FacilityItem>
          ))}
        </FacilitiesGrid>
      </LeftSection>
      <RightSection>
        <ImageContainer>
          <LargeImage src={img1} alt="Spacious Study Room" />
          <SmallImage src={img2} alt="Comfortable Bedroom" />
          <SmallImage src={img3} alt="Clean Dining Area" />
        </ImageContainer>
      </RightSection>
    </Container>
  );
};

export default StudentHostelFacilities;