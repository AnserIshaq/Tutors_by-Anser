import React from 'react'
import TopBar from '../Components/Shared/TopBar'
import CustomSelect from '../Components/ui/CustomSelect'
import { CustomButton, CustomButtonWithIcon } from '../Components/ui/CustomButton'
import { selectOptions } from '../Static/SelectOptions'
import TutorCard from '../Components/Shared/TutorCard'
import Slider from '../Components/Shared/Slider'
import Stepper from '../Components/Shared/Stepper'
import Reasons from '../Components/Shared/Reasons'
import CustomCollapse from '../Components/ui/CustomCollapse'
import { blogData, sliderData } from '../Static/SliderData'
import CustomInput from '../Components/ui/CustomInput'
import Footer from '../Components/Shared/Footer'
import Tour from '../Components/Shared/Tour'
import Steps from '../Components/Shared/Steps'
import { ReasonsData } from '../Static/ReasonsData'
import { stepperData } from '../Static/StepperData'
import QASection from '../Components/Shared/QASection'
import FormSection from '../Components/Shared/FormSection'

const LandingScreen = () => {
  return (
    <>
      <TopBar />
      {/* START - Hero Section */}
      <section className='hero-section pb-[15px] lg:pb-[60px]'>
        <div className='hero contain px-0 sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px]'>
          <div className='h-[406px] min-h-auto lg:min-h-[600px] bg-[#EBF5FE] rounded-[30px] relative mb-[200px] lg:mb-0'>
            <div className='content h-auto lg:h-[406px] min-h-auto lg:min-h-[600px] flex flex-row justify-between'>
              <div className='flex flex-col justify-between h-auto lg:h-[406px] min-h-auto lg:min-h-[600px] basis-[100%] lg:basis-[70%] shrink'>
                <div className='hero-content flex flex-col gap-4 p-[15px] sm:p-[30px]'>
                  <div className='top-content [font-family:var(--font-jakarta)] font-extrabold text-4xl md:text-5xl lg:text-6xl pt-[15px] lg:pt-[60px]'>
                    <p className=''>Need a Tutor?</p>
                    <p className=''>We can help.</p>
                  </div>
                  <div className='content-desc'>
                    <p className='text-base lg:text-xl [font-family:var(--font-jakarta)] font-normal text-[#717171]'>
                      Compare and find the best tutors to fit your needs.
                    </p>
                  </div>
                </div>
                <div className='pr-[0px] lg:pr-[24px] pl-[0px] py-[0px] lg:py-[24px] bg-white rounded-r-[30px] rounded-tl-[30px] rounded-bl-[30px] lg:rounded-tl-[0px] lg:rounded-br-[0px] flex lg:block self-center lg:self-start w-[90%] lg:w-full '>
                  <div className='selectors flex flex-col lg:flex-row py-[30px] px-[15px] gap-[15px] bg-[#FFFFFF] rounded-[30px] [font-family:var(--font-league)] text-base shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] lg:shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] w-full'>
                    <div className='flex flex-col gap-1.5 basis=[100%] lg:basis-[70%]'>
                      <p className='pl-[15px]'>Area</p>
                      <CustomSelect
                        options={selectOptions}
                        rightIcon={'/select-arrow.svg'}
                        selectClassName={'w-full  text-base! overflow-hidden'}
                        defaultValue={'Any'}
                        height={'h-[44px]!'}
                        paddingX={'px-[15px]!'}
                        paddingY={'px-[10px]! '}
                        border={'border border-[#B1B1B1]'}
                        rounded={'rounded-[100px]'}
                        textSize={'text-base!'}
                      />
                    </div>
                    <div className='flex flex-col gap-1.5 basis=[100%] lg:basis-[70%]'>
                      <p className='pl-[15px]'>Price</p>
                      <CustomSelect
                        options={selectOptions}
                        rightIcon={'/select-arrow.svg'}
                        selectClassName={'w-full overflow-hidden'}
                        defaultValue={'Any'}
                        height={'h-[44px]!'}
                        paddingX={'px-[15px]!'}
                        paddingY={'px-[10px]! '}
                        border={'border border-[#B1B1B1]'}
                        rounded={'rounded-[100px]'}
                        textSize={'text-base!'}
                      />
                    </div>
                    <div className='flex flex-col gap-1.5 basis=[100%] lg:basis-[70%]'>
                      <p className='pl-[15px]'>Gender</p>
                      <CustomSelect
                        options={selectOptions}
                        rightIcon={'/select-arrow.svg'}
                        defaultValue={'Any'}
                        height={'h-[44px]!'}
                        paddingX={'px-[15px]!'}
                        paddingY={'px-[10px]!'}
                        selectClassName={'w-full  overflow-hidden'}
                        border={'border border-[#B1B1B1]'}
                        rounded={'rounded-[100px]'}
                        textSize={'text-base!'}
                      />
                    </div>
                    <CustomButtonWithIcon
                      icon={'/Vector.svg'}
                      text={'Find Now'}
                      className='bg-[#5183F4]! text-white text-base! rounded-[100px] basis-[100%] lg:basis-[36%] xl:basis-[40%] px-[15px] py-[10px] self-end h-[44px]! lg:whitespace-nowrap'
                    />
                  </div>
                </div>
              </div>
              <div className='basis-0 lg:basis-[30%] hidden lg:block'>
                <img
                  src='/hero1.svg'
                  alt='image'
                  className='absolute top-[6%] xl:right-[27%] 2xl:right-[25%] lg:h-[40%] xl:h-[330px] hidden xl:block'
                />
                <img
                  src='/graph.svg'
                  alt='image'
                  className='absolute lg:top-[-2%] xl:top-[-2%] right-[0px] lg:right-[-1%] lg:h-[40%] xl:h-[274px]'
                />
                <img
                  src='/hero2.svg'
                  alt='image'
                  className='absolute lg:bottom-[17%] xl:bottom-[12%] right-[50px] lg:right-[3%] lg:h-[50%] xl:h-[314px]'
                />
                <TutorCard />
                <img
                  src='/hero_dots.svg'
                  alt='image'
                  className='absolute hidden xl:block bottom-[10%] right-[18%] z-1'
                />
              </div>
            </div>
            <div className='before-element_right absolute h-[40px] w-[40px] bg-white bottom-[0px] hidden lg:block  lg:right-[27%] xl:right-[27%] 2xl:right-[28%] z-1'></div>
            <div className='before-element_right absolute h-[40px] w-[40px] bg-[#EBF5FE] bottom-[0px] hidden lg:block lg:right-[25.5%] xl:right-[26.5%] 2xl:right-[27.2%] rounded-bl-[30px] z-1'></div>
            <div className='before-element_left absolute h-[80px] w-[40px] bg-[#EBF5FE] top-[56.3%] hidden lg:block  rounded-bl-[30px] z-2'></div>
            <div className='before-element_left absolute h-[80px] w-[40px] bg-white top-[56.3%] hidden lg:block  2xl:top-[56.4%] z-1'></div>
          </div>
        </div>
      </section>
      {/* END - Hero Section */}

      {/* START - Slider Section */}
      <section className='slider-section  my-[15px] lg:my-[60px]'>
        <div className='slider--inner contain px-0 sm:px-[24px] md:px-[60px]'>
          <div className='content flex flex-col gap-[16px] px-3 lg:pl-3 mb-[24px]'>
            <div className='title [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl '>
              Meet the most qualified <span className='text-[#5183F4]'>Tutors.</span>
            </div>
            <div className='desc [font-family:var(--font-league)] text-base lg:text-xl font-normal text-[#717171] max-w-full lg:max-w-[70%]'>
              Delve into the rich expertise and enthusiasm of our newest mentorship team members. Whether they're
              experienced experts or up-and-coming talents, our team is committed to supporting and empowering learners
              on their path to success.
            </div>
          </div>
          <div className='slider-main'></div>
        </div>
        <Slider showNavigation={false} showPagination={false} data={sliderData} sliderPerView={5} cardMode='profile' />
      </section>
      {/* END - Slider Section */}

      {/* START - Step Section */}
      <Steps data={stepperData} />
      {/* END - Step Section */}

      {/* START - Reasons Section */}
      <section className='reasons-section py-[15px] lg:py-[120px] bg-[#F7F7F7]'>
        <div className='reason-main px-0 sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px] contain'>
          <div className='reason-inner flex justify-between flex-col lg:flex-row  px-[12px]'>
            <div className='images w-full lg:w-[50%] relative mb-[100px] lg:mb-0 '>
              <img src='/reason1.svg' alt='reasons' className='relative z-2 ' />
              <img src='/Rblob.svg' alt='blob' className='absolute top-[-48px] left-[-67px] z-1' />
              <img src='/RDots.svg' alt='dots' className='absolute top-[-85px] lg:left-[-40px] z-1' />
              <img src='/RDots.svg' alt='dots' className='absolute bottom-[-20%] right-[45%] z-3' />
              <img src='/reason1.1.svg' alt='frame' className='absolute bottom-[-20%] right-0 lg:right-[23%] z-3' />
              <img src='/reason1.2.svg' alt='frame' className='absolute top-[-120px] right-0 lg:right-[12%] z-3' />
            </div>
            <div className='content [font-family:var(--font-jakarta)] w-full lg:w-[50%] flex flex-col gap-[16px]'>
              <div className='title font-extrabold text-3xl md:text-4xl lg:text-5xl max-w-full lg:max-w-[100%] 2xl:max-w-[80%]'>
                4 reasons to learn on <span className='text-[#5183F4]'>Nihongo Talkers</span>
              </div>
              <div className='points flex flex-col gap-[16px] [font-family:var(--font-league)]'>
                <Reasons data={ReasonsData} TitleClassName={'text-xl'} descClassName={'text-base'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END - Reasons Section */}

      {/* START - TOUR Section */}
      <Tour
        heading={'Become A Tutor'}
        desc={'Fuel learning journeys, become a mentor of creativity; ignite minds, foster brilliance, shape futures'}
        btnText={'Register Now'}
        descClass={'font-normal text-base lg:text-xl w-[90%]'}
        bgImage={'/tutor-bg.jpg'}
      />
      {/* end - TOUR Section */}

      {/* START - FAQ Section */}
      <QASection />
      {/* END - FAQ Section */}

      {/* START - Blog Section */}
      <section className='blog-section  my-[15px] lg:my-[60px] hidden lg:block'>
        <div className='blog--inner contain px-0 sm:px-[24px] md:px-[60px]'>
          <div className='content flex flex-col gap-[16px] px-3 lg:pl-3 mb-[24px]'>
            <div className='title [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl '>
              From Our <span className='text-[#5183F4]'>Blog</span>
            </div>
            <div className='desc [font-family:var(--font-league)] text-base font-normal text-[#717171] max-w-full lg:max-w-[70%]'>
              Aliquam lacinia diam quis lacus euismod
            </div>
          </div>
          <div className='blog-main '>
            <Slider
              showNavigation={true}
              showPagination={true}
              data={blogData}
              sliderPerView={3}
              cardMode='blog'
              prevBtnClass={'right-[8%] top-[-15%] -translate-y-1/2 z-10'}
              nextBtnClass={'top-[-15%] right-0 -translate-y-1/2 z-10  rotate-180'}
              paginationClass={'mt-4 text-center absolute top-[-20%] right-5'}
              wrapperClass={'slider-style-for-blog-section'}
            />
          </div>
        </div>
      </section>
      {/* END - Blog Section */}

      {/* START - Form Section */}
      <FormSection
        inputs={true}
        title={'Download the FREE Japanese PDF Resources'}
        desc={
          'Write your name and email address below and access to your free PDF worksheet! Once you complete the form    on the page and submit it, you will receive an email from us with the links to the PDF files. Please also check your spam or junk folder if you dont see the email in your inbox.'
        }
        btnText={'Submit'}
      />
      {/* END - Form Section */}
      <Footer />
    </>
  )
}

export default LandingScreen
