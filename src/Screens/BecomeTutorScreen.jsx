import TopBar from '../Components/Shared/TopBar'
import Footer from '../Components/Shared/Footer'
import Reasons from '../Components/Shared/Reasons'
import { becomeTutor } from '../Static/ReasonsData'
import Steps from '../Components/Shared/Steps'
import { stepperData2 } from '../Static/StepperData'
import Tour from '../Components/Shared/Tour'
import Testimonials from '../Components/Shared/Testimonials'
import { TestimonialData2 } from '../Static/TestimonialData'
import { CustomButton } from '../Components/ui/CustomButton'
const BecomeTutorScreen = () => {
  return (
    <>
      <TopBar />
      {/* START - Hero Section */}
      <section>
        <div className='become-tutor-bg-main'>
          <div className='become-tutor  contain px-16px md:px-[60px] flex flex-col justify-center items-center md:items-start min-h-[550px] gap-[24px] leading-[60px]'>
            <div className='title [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-start w-[85%] md:w-[50%]'>
              カフェ、自宅、オンラインで日本語を教えませんか。
            </div>
            <CustomButton
              text={'日本語の先生になる'}
              className={
                'text-[#5183F4]! bg-[#FFFFFF]! h-[50px]! w-max rounded-[50px]! py-[15px] px-[32px] font-medium! text-base!'
              }
            />
          </div>
        </div>
      </section>
      {/* END - Hero Section */}

      {/* START - Tutor Section */}
      <section className='reasons-section pb-[15px] pt-[15px] lg:pb-[60px] lg:pt-[120px]'>
        <div className='reason-main px-0 sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px] contain'>
          <div className='reason-inner flex justify-between flex-col-reverse lg:flex-row-reverse  px-[12px]'>
            <div className='images w-full lg:w-[40%] relative mb-[100px] lg:mb-0 '>
              <img src='/tutor-1.svg' alt='reasons' className='relative z-2 ' />
            </div>
            <div className='content [font-family:var(--font-jakarta)] w-full lg:w-[50%] flex flex-col gap-[16px]'>
              <div className='title font-extrabold text-3xl md:text-4xl lg:text-5xl max-w-full lg:max-w-[100%] 2xl:max-w-[80%] text-[#5183F4]'>
                Nihongo Talkersで 日本語講師になるメリット
              </div>
              <div className='points flex flex-col gap-[16px] [font-family:var(--font-league)]'>
                <Reasons
                  data={becomeTutor}
                  TitleClassName={'text-xl flex items-center gap-[10px] md:gap-[24px]'}
                  descClassName={'text-base md:pl-[58px] pt-[19px]'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END - Tutor Section */}

      <Steps data={stepperData2} />
      <Tour
        heading={'日本語の先生になって収入を増やしませんか'}
        headingClass={'text-center w-[80%]'}
        desc={'ぜひご応募ください！'}
        btnText={'日本語の先生になる'}
        bgImage={'/tutor-bg-1.jpg'}
      />
      <Testimonials heading={'​日本語講師の声・体験談'} data={TestimonialData2} />

      <Footer />
    </>
  )
}

export default BecomeTutorScreen
