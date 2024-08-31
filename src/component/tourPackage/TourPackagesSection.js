import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

import jungleSafari from '../../assets/activities/jungleSafari.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';
import trekking from '../../assets/activities/trekkig.jpg';
import towerNightStay from '../../assets/activities/towerNightStay.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: #FFFFFF;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #B8860B;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 50px;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: #FFF5E6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PackageImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PackageInfo = styled.div`
  padding: 20px;
`;

const PackageName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const PackageDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 600;
  color: #B8860B;
`;

const BookNowButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #B8860B;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A17A0B;
  }
`;

const TourPackagesSection = () => {
  const tourPackages = [
    {
      name: 'Jeep Safari Adventure',
      image: jungleSafari,
      price: '$60',
      duration: '4 Hours',
      maxGuests: 8,
    },
    {
      name: 'Canoe Ride & Jungle Walk',
      image: bishajariLake,
      price: '$40',
      duration: '3 Hours',
      maxGuests: 10,
    },
    {
      name: 'Elephant Bathing Experience',
      image: elephantBath,
      price: '$25',
      duration: '1 Hour',
      maxGuests: 6,
    },
    {
      name: 'Tharu Village Cultural Tour',
      image: culturalProgram,
      price: '$30',
      duration: '3 Hours',
      maxGuests: 12,
    },
    {
      name: 'Bird Watching Expedition',
      image: trekking,
      price: '$35',
      duration: '4 Hours',
      maxGuests: 8,
    },
    {
      name: 'Sunset River Safari',
      image: towerNightStay,
      price: '$50',
      duration: '2 Hours',
      maxGuests: 10,
    },
  ];

  return (
    <Section>
      <Subtitle>EXPLORE SAURAHA</Subtitle>
      <Title>Our Tour Packages</Title>
      <Description>
        Immerse yourself in the breathtaking beauty of Chitwan National Park through our carefully curated tour packages. 
       
      </Description>
      <PackageGrid>
        {tourPackages.map((pkg, index) => (
          <PackageCard key={index}>
            <PackageImage src={pkg.image} alt={pkg.name} />
            <PackageInfo>
              <PackageName>{pkg.name}</PackageName>
              <PackageDetails>
                <span><Clock size={16} style={{marginRight: '8px', verticalAlign: 'middle'}} />{pkg.duration}</span>
                <span><Users size={16} style={{marginRight: '8px', verticalAlign: 'middle'}} />Max {pkg.maxGuests}</span>
                <Price>{pkg.price}/person</Price>
              </PackageDetails>
              <BookNowButton to="/book-tour">BOOK NOW</BookNowButton>
            </PackageInfo>
          </PackageCard>
        ))}
      </PackageGrid>
    </Section>
  );
};

export default TourPackagesSection;