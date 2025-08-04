import TopBar from '../Components/Shared/TopBar'
import Tour from '../Components/Shared/Tour'
import Footer from '../Components/Shared/Footer'
import Testimonials from '../Components/Shared/Testimonials'
import Reasons from '../Components/Shared/Reasons'
import { LearningData } from '../Static/ReasonsData'
import { TestimonialData } from '../Static/TestimonialData'

const AboutScreen = () => {
  return (
    <>
      <TopBar />
      <section className='hero-section about-bg-main '>
        <h1 className='text-white flex h-full w-full justify-center items-center'>About Us</h1>
      </section>
      {/* START - Learning Section */}
      <section className=' pt-[15px] lg:pt-[120px]'>
        <div className=' px-0 sm:pr-[24px] md:pr-[60px] pl-0 sm:pl-[24px] md:pl-[60px] lg:pl-0  container mx-auto lg:mx-0 lg:mr-auto'>
          <div className='flex justify-between flex-col lg:flex-row  px-[16px] lg:px-0 gap-[24px] '>
            <div className='images w-full lg:w-[50%] relative lg:mb-0'>
              <video
                className='relative z-2 w-full h-auto'
                src='/file.mp4'
                poster='/about-2.svg'
                controls
                muted
                playsInline
                loop
              />
            </div>
            <div className='content [font-family:var(--font-jakarta)] flex flex-col gap-[16px] w-full lg:w-[40%] max-w-full 2xl:max-w-[40%]'>
              <div className='points flex flex-col gap-[16px] [font-family:var(--font-league)]'>
                <Reasons
                  data={LearningData}
                  TitleClassName={'text-xl lg:text-2xl'}
                  descClassName={'text-base md:text-xl'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END - Learning Section */}
      <Testimonials heading={'Student Testimonials.'} data={TestimonialData} />
      <Tour
        desc={
          'Unlock Your Language Potential with Nihongo Talkers Discover Your Perfect Tutor Today and Speak with Confidence'
        }
        btnText={'Find Tutors'}
        descClass={'font-extrabold text-xl md:text-3xl lg:text-4xl w-[90%] md:w-[60%]'}
        bgImage={'/tutor-bg.jpg'}
      />
      <Footer />
    </>
  )
}

export default AboutScreen
