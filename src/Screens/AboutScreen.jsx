import React from 'react'
import TopBar from '../Components/Shared/TopBar'
import Slider from '../Components/Shared/Slider'
import { TestimonialData } from '../Static/TestimonialData'
import Tour from '../Components/Shared/Tour'
import Footer from '../Components/Shared/Footer'
import Testimonials from '../Components/Shared/Testimonials'

const AboutScreen = () => {
  return (
    <>
      <TopBar />
      <section className='hero-section about-bg-main '>
        <h1 className='text-white flex h-full w-full justify-center items-center'>About Us</h1>
      </section>
      <Testimonials />
      <Tour
        desc={
          'Unlock Your Language Potential with Nihongo Talkers Discover Your Perfect Tutor Today and Speak with Confidence'
        }
        btnText={'Find Tutors'}
        descClass={'font-extrabold text-xl md:text-3xl lg:text-4xl w-[90%] md:w-[60%]'}
      />
      <Footer />
    </>
  )
}

export default AboutScreen
