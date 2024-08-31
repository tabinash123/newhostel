import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import imag from '../../assets/gallary/11.jpg';

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 80px 20px;
  font-family: 'Poppins', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
`;

const Header = styled.header`
  height: 250px;
  background-image: url(${imag});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
`;

const FormTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 25px;
  font-size: 1.8rem;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 150px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #ff5252;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const InfoTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 25px;
  font-size: 1.8rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const InfoIcon = styled.div`
  margin-right: 15px;
  color: #ff6b6b;
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: #333;
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ff6b6b;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
`;

const SocialIcon = styled.a`
  color: #ff6b6b;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5252;
  }
`;

const FAQSection = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const FAQTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 25px;
  font-size: 1.8rem;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const FAQAnswer = styled.p`
  color: #666;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageWrapper>
      <ContentWrapper>
     
        <Content>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Get in Touch</FormTitle>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <SubmitButton type="submit">
              <Send size={18} />
              Send Message
            </SubmitButton>
          </ContactForm>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <InfoIcon><MapPin size={24} /></InfoIcon>
              <InfoText>Kamalpokhari, Kathmandu, Nepal</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Phone size={24} /></InfoIcon>
              <InfoText>+977 01-4541165</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Mail size={24} /></InfoIcon>
              <InfoText>risedoctors@gmail.com</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Clock size={24} /></InfoIcon>
              <InfoText>
                Office Hours: Sunday - Friday<br />
                9:00 AM - 5:00 PM
              </InfoText>
            </InfoItem>
            <SocialLinks>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </SocialIcon>
            </SocialLinks>
            <Map>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9962669620993!2d85.32496431503138!3d27.711248920998237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzQwLjUiTiA4NcKwMTknMzcuOCJF!5e0!3m2!1sen!2sus!4v1660434910562!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Map>
          </ContactInfo>
          {/* <FAQSection>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            <FAQItem>
              <FAQQuestion>What programs do you offer?</FAQQuestion>
              <FAQAnswer>We offer a range of medical education programs including MBBS preparation, nursing courses, and specialized medical training. Visit our Programs page for more details.</FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>How can I apply for a course?</FAQQuestion>
              <FAQAnswer>To apply for a course, visit our Admissions page and follow the application process. If you need assistance, you can contact our admissions office directly.</FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Do you offer scholarships?</FAQQuestion>
              <FAQAnswer>Yes, we offer various scholarships based on merit and need. Check our Scholarships page for more information on eligibility and how to apply.</FAQAnswer>
            </FAQItem>
          </FAQSection> */}
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ContactPage;