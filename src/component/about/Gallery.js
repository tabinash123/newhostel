import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Image as ImageIcon, X } from 'lucide-react';

// import img1 from "../../assets/resort/garden1.jpg";
// import img2 from "../../assets/resort/garden2.jpg";
// import img3 from "../../assets/resort/garden3.jpg";
// import img4 from "../../assets/resort/garden4.jpg";
import img5 from "../../assets/resort/reception.jpg";
import img6 from "../../assets/resort/hotel1.jpg";
import img7 from "../../assets/resort/hotel2.jpg";
import img8 from "../../assets/resort/hotel3.jpg";
import img9 from "../../assets/resort/hotel4.jpg";
import img10 from "../../assets/resort/hotel5.jpg";
// import img6 from "../../assets/resort/6.jpg";

const GallerySection = styled.section`
  padding: 1rem;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryTitle = styled.h2`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 4 / 3;

`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  // object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryImageWrapper}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.span`
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
`;

const galleryImages = [
  { src: img3, alt: 'Swimming pool at night' },
  { src: img8, alt: 'Hotel pathway' },
  { src: img7, alt: 'Hotel pathway' },
  { src: img4, alt: 'Garden gazebo' },
  { src: img10, alt: 'Hotel pathway' },
  { src: img2, alt: 'Luxurious bedroom' },
  { src: img5, alt: 'Hotel pathway' },
  { src: img6, alt: 'Hotel pathway' },
  { src: img1, alt: 'Hotel exterior at night' },
  { src: img9, alt: 'Hotel pathway' },
//   { src: img6, alt: 'Hotel building at night' },
];

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = useCallback((image) => {
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <GallerySection>
      <GalleryContainer>
        <GalleryTitle>
          <ImageIcon size={24} color="#8B4513" style={{ marginRight: '0.5rem' }} />
          Gallery
        </GalleryTitle>
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryImageWrapper 
              key={index}
              onClick={() => openLightbox(image)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(image)}
              tabIndex={0}
              role="button"
              aria-label={`View larger image of ${image.alt}`}
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
              />
              <ImageOverlay>
                <OverlayText>Click to enlarge</OverlayText>
              </ImageOverlay>
            </GalleryImageWrapper>
          ))}
        </GalleryGrid>
        {lightboxImage && (
          <LightboxOverlay onClick={closeLightbox}>
            <LightboxImage src={lightboxImage.src} alt={lightboxImage.alt} onClick={(e) => e.stopPropagation()} />
            <CloseButton onClick={closeLightbox} aria-label="Close lightbox">
              <X size={32} />
            </CloseButton>
          </LightboxOverlay>
        )}
      </GalleryContainer>
    </GallerySection>
  );
};

export default Gallery;