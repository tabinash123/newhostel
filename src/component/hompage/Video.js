import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Play, Pause } from 'lucide-react';
import video from '../../assets/hostel.mp4';


const VideoSection = styled.section`
  position: relative;
  width: 100%;
  height: 40vh; // Mobile default

  @media (min-width: 768px) {
    height: 50vh; // Tablet
  }

  @media (min-width: 1024px) {
    height: 70vh; // Desktop
  }

  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    font-size: 2.75rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 90%;
  margin-bottom: 1.5rem;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    max-width: 80%;
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const PlayButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoSection>
      <VideoBackground ref={videoRef} loop muted playsInline>
        <source src={video} type="video/mp4" />
      </VideoBackground>
      <Overlay />
      <Content>
        
        <PlayButton onClick={togglePlay}>
          {isPlaying ? <Pause size={24} color="white" /> : <Play size={24} color="white" />}
        </PlayButton>
      </Content>
    </VideoSection>
  );
};

export default Video;