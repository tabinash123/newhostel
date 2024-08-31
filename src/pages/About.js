import React from 'react'
import Hero from '../component/about/Hero'
import HotelInfoComponent from '../component/about/HotelInfoComponent'
import RoomFacilities from '../component/about/RoomFacilities'
import MissionVisionSection from './../component/about/MissionVision';
import Services from '../component/hompage/Services '
import Review from '../component/about/Review';


const About = () => {
  return (
    <div>
      <Hero />
      <HotelInfoComponent />
      <MissionVisionSection />
      <Services />
      <RoomFacilities />
      <Review />
    </div>
  )
}

export default About
