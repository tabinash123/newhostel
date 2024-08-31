import React from 'react';
import styled from 'styled-components';

import library from '../../assets/facility/library.PNG';
import canteen from '../../assets/facility/canteen.PNG';
import garden from '../../assets/facility/garden.PNG';
import room from '../../assets/facility/room.PNG';
import recreational from '../../assets/facility/recreational.PNG';

const SectionContainer = styled.section`
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.8rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const services = [
  {
    title: "Affordable Rooms",
    description: "Comfortable and budget-friendly accommodation options. Choose from single, double, or triple occupancy rooms, all fully furnished with study essentials.",
    image: room
  },
  {
    title: "Library",
    description: "24/7 access to a well-stocked medical library with current textbooks and journals. Quiet study areas and group discussion rooms available.",
    image: library
  },
  {
    title: "Hygienic Canteen",
    description: "Fresh, balanced meals served daily with options for various dietary needs. A clean and social space for refueling and quick study breaks.",
    image: canteen
  },
  {
    title: "Peaceful Garden",
    description: "Serene outdoor space for relaxation and fresh air. Perfect for unwinding after long study sessions or enjoying quiet reading time.",
    image: garden
  },
  {
    title: "Fun Activities",
    description: "Regular social events and recreational facilities to maintain work-life balance. Includes indoor games, fitness area, and stress-relief programs.",
    image: recreational
  }
];

const facilityServices = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>Our Services</Title>
        <Subtitle>Designed to support your medical preparation journey</Subtitle>
      </TitleContainer>
      <CardContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default facilityServices;