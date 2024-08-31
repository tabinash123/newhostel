import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 70px 20px 30px;
  font-family: 'Poppins', Arial, sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 30px;
  min-width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  color: #ff6b6b;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #ff6b6b;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 12px;
`;

const FooterLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover {
    color: #ff6b6b;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ContactIcon = styled.span`
  margin-right: 12px;
  color: #ff6b6b;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #e0e0e0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff6b6b;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
`;

const NewsletterButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8787;
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Rise Institute</FooterTitle>
          <p>Empowering future medical professionals with quality education and comprehensive training.</p>
          <SocialIcons>
            <SocialIcon href="https://facebook.com/rise.edu.np" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/rise.edu.np" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialIcon>
  
      
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink to="/">Home</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/service">Services</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/about">About Us</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/contact">Contact</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <ContactIcon><MapPin size={16} /></ContactIcon>
            Kamalpokhari, Kathmandu, Nepal
          </ContactItem>
          <ContactItem>
            <ContactIcon><Phone size={16} /></ContactIcon>
            +977 01-4541165
          </ContactItem>
          <ContactItem>
            <ContactIcon><Mail size={16} /></ContactIcon>
            risedoctors@gmail.com
          </ContactItem>
          <ContactItem>
            <ContactIcon><Clock size={16} /></ContactIcon>
            Mon - Fri: 9:00 AM - 5:00 PM
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Newsletter</FooterTitle>
          <p>Stay updated with our latest news and offers.</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">
              <Send size={16} />
            </NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Rise Institute For Medical Education. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;