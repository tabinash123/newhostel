import React from 'react';
import styled from 'styled-components';
import { Star, Book } from 'lucide-react';

const TestimonialSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
  font-family: 'Poppins', Arial, sans-serif;

  @media (min-width: 576px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #ff6b6b;
  }

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 2.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }

  @media (min-width: 576px) {
    padding: 1.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6b6b;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 576px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }

  @media (min-width: 992px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  @media (min-width: 576px) {
    font-size: 1.05rem;
  }

  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

const ReviewMeta = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 576px) {
    font-size: 0.85rem;
  }

  @media (min-width: 992px) {
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  @media (min-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const ReviewText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;

  @media (min-width: 576px) {
    font-size: 0.95rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      course: "MBBS Prep",
      rating: 5,
      text: "Rise Institute has been a game-changer for my MBBS preparation. The study environment and support are incredible."
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "MD Entrance",
      rating: 4,
      text: "Great academic support for MD aspirants. The mock tests and group study sessions are particularly helpful."
    },
    {
      id: 3,
      name: "Rohan Gupta",
      course: "MBBS Prep",
      rating: 5,
      text: "Rise Institute made my transition to Kathmandu smooth. Excellent facilities and resources for medical studies."
    },
    {
      id: 4,
      name: "Anita Thapa",
      course: "Nursing",
      rating: 4,
      text: "As a nursing student, I've found the environment here extremely conducive to my studies. Top-notch facilities."
    },
    {
      id: 5,
      name: "Rajesh KC",
      course: "MBBS Prep",
      rating: 5,
      text: "The structured study programs and motivational sessions have been crucial to my success in MBBS preparation."
    }
  ];
const TestimonialComponent = () => {
  return (
    <TestimonialSection>
      <SectionTitle>What Our Students Say</SectionTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <UserInfo>
              <Avatar>{testimonial.name[0]}</Avatar>
              <div>
                <UserName>{testimonial.name}</UserName>
                <ReviewMeta>
                  <Book size={14} /> {testimonial.course}
                </ReviewMeta>
              </div>
            </UserInfo>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < testimonial.rating ? "#ff6b6b" : "none"} color="#ff6b6b" />
              ))}
            </Rating>
            <ReviewText>
              {testimonial.text}
            </ReviewText>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default TestimonialComponent;