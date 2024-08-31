import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { X, Menu, Phone, Mail, MapPin } from 'lucide-react';
// import logo from '../assets/logo.jpg'; // Ensure this path is correct

const HeaderContainer = styled.header`
  font-family: 'Poppins', sans-serif;
  background-color: #f4f1e8;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: ${props => props.isScrolled ? 'sticky' : 'relative'};
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  background-color: #000000;
  color: #fff;
  padding: 5px 5%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  margin-right: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 0;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff9800;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ff9800;
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #1a4d2e;
  z-index: 1001;
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    display: block;
  }

  ${props => props.isOpen && `
    transform: rotate(90deg);
  `}
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'block' : 'none'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 999;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 90%;
  max-width: 350px;
  height: 100vh;
  background-color: #f4f1e8;
  padding: 20px;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MobileLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const MobileLogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  padding: 5px;
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MobileNavItem = styled(NavItem)`
  display: block;
  padding: 15px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:after {
    display: none;
  }

  &:hover, &:focus {
    background-color: rgba(255, 152, 0, 0.1);
  }
`;

const MobileContactInfo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <TopBar>
        <ContactInfo>
          <span>📞 +977 985-5057182</span>
          <span>✉️ info@riseinstitute.edu.np</span>
        </ContactInfo>
        <span>🎓 Empowering Future Medical Professionals</span>
      </TopBar>
      <HeaderContent>
        <Logo href="/">
          {/* <LogoImage src={logo} alt="Rise Institute Logo" /> */}
          Rise Institute
        </Logo>
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/service">Services</NavItem>
          <NavItem href="/gallary">Gallery</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </Nav>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen? (<></>):(<Menu size={24} />)}
        </MobileMenuIcon>
      </HeaderContent>
  
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <MobileLogo>
            {/* <MobileLogoImage src={logo} alt="Rise Institute Logo" /> */}
            Rise Institute
          </MobileLogo>
          <CloseButton onClick={toggleMobileMenu}>
            <X size={24} />
          </CloseButton>
        </MobileMenuHeader>
        
        <MobileNavItems>
          <MobileNavItem href="/" onClick={toggleMobileMenu}>Home</MobileNavItem>
          <MobileNavItem href="/about" onClick={toggleMobileMenu}>About</MobileNavItem>
          <MobileNavItem href="/service" onClick={toggleMobileMenu}>Services</MobileNavItem>
          <MobileNavItem href="/gallary" onClick={toggleMobileMenu}>Gallery</MobileNavItem>
          <MobileNavItem href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavItem>
        </MobileNavItems>

        <MobileContactInfo>
          <ContactItem>
            <Phone size={18} />
            +977 985-5057182
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            info@riseinstitute.edu.np
          </ContactItem>
          <ContactItem>
            <MapPin size={18} />
            Kathmandu, Nepal
          </ContactItem>
        </MobileContactInfo>

        <SocialLinks>
          <SocialLink href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </SocialLink>
          <SocialLink href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </SocialLink>
        </SocialLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;