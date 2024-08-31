import React, { useState } from 'react';
import styled from 'styled-components';
import { Minus, Plus } from 'lucide-react';
import img1 from '../../assets/hostel/profile.jpg';

const FAQSection = styled.section`
  padding: 50px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    margin: 40px auto;
    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    margin: 50px auto;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 0.9rem;
  color: #ff4500;
  margin-bottom: 10px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Question = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #0c2e1c;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 15px 0;
    font-size: 1rem;
  }
`;

const Answer = styled.div`
  padding: 0 0 12px 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 0 0 15px 0;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.isOpen ? '#ff4500' : '#f0f0f0'};
  border-radius: 4px;
  color: ${props => props.isOpen ? 'white' : '#0c2e1c'};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
    max-height: 500px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;
const FAQList = [
  {
    question: "What are the accommodation options available at the hostel?",
    answer: "We offer single, double, and triple occupancy rooms. All rooms are furnished with beds, desks, chairs, and wardrobes. We also have a limited number of en-suite rooms available on a first-come, first-served basis."
  },
  {
    question: "What study facilities are provided in the hostel?",
    answer: "Our hostel features a large study hall open 24/7, multiple group discussion rooms, a well-stocked medical library, and high-speed Wi-Fi throughout the building. We also have dedicated quiet zones for individual study."
  },
  {
    question: "Are meals provided at the hostel?",
    answer: "Yes, we provide three meals a day (breakfast, lunch, and dinner) in our cafeteria. Our menu includes a mix of Nepali and international cuisines, with vegetarian options always available. We can also cater to specific dietary requirements upon request."
  },
  {
    question: "What security measures are in place at the hostel?",
    answer: "We have 24/7 security personnel, CCTV coverage of all common areas, and a biometric entry system for resident access. All visitors must sign in at the reception desk, and we have a strict curfew policy for non-residents."
  },
  {
    question: "Are there any recreational facilities available?",
    answer: "Yes, we have a fitness center, a TV room, indoor game facilities (carrom, chess, table tennis), and a small outdoor garden area. We also organize regular social events and stress-relief activities for our residents."
  }
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <LeftColumn>
        <Title>Have Any Questions?</Title>
        <Subtitle>Frequently Asked Questions</Subtitle>
        {FAQList.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              {faq.question}
              <IconWrapper isOpen={openIndex === index}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </IconWrapper>
            </Question>
            {openIndex === index && (
              <Answer>{faq.answer}</Answer>
            )}
          </FAQItem>
        ))}
      </LeftColumn>
      <RightColumn>
        <Image src={img1} alt="Rise Institute Study Room" />
      </RightColumn>
    </FAQSection>
  );
};

export default FAQComponent;