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
import { TutorCardData } from '../Static/TutorCard'
import CustomCollapse from '../Components/ui/CustomCollapse'
import { tutorFaqData } from '../Static/FAQData'
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

      {/* START - Card Section */}
      <section className='bg-[#F7F7F7]'>
        <div className=' contain px-[16px] sm:[px-[24px] md:px-[60px]'>
          <div className='py-[60px]'>
            <div className='content text-center mb-[24px]'>
              <h1 className='title text-[#5183F4] mb-[16px]'>日本語講師募集中!</h1>
              <p className='desc'>以下の条件に当てはまる方、大歓迎！</p>
            </div>
            <div className='card flex flex-wrap xl:flex-nowrap gap-[24px]'>
              {TutorCardData.map((item, idx) => (
                <div
                  key={idx}
                  className='card--inner p-[24px] rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[16px] justify-center items-center basis-full md:basis-[48%] xl:basis-[25%]'>
                  <div className='img'>
                    <img src={item.image} alt='message' />
                  </div>
                  <p className='title  text-[#5183F4] text-center text-xl font-normal w-[80%]'>{item.title}</p>
                  <p className='desc text-center text-base font-normal text-[#717171]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* end - Card Section */}

      <Steps data={stepperData2} />
      <Tour
        heading={'日本語の先生になって収入を増やしませんか'}
        headingClass={'text-center w-[80%]'}
        desc={'ぜひご応募ください！'}
        btnText={'日本語の先生になる'}
        bgImage={'/tutor-bg-1.jpg'}
      />
      <section className='pt-[60px] md:pt-[120px]'>
        <div className='contain custom-tutor-faq px-[16px] sm:[px-[24px] md:px-[60px]'>
          <div className=''>
            <h1 className='title text-[#5183F4] mb-[40px] text-center'>FAQs: 日本語講師申込に関するよくある質問</h1>
          </div>
          <CustomCollapse
            data={tutorFaqData}
            className={''}
            block={false}
            size={'small'}
            collapseWrapperClass={'custom-faq-collapse'}
            contentClass={'text-xl font-normal text-[#717171]'}
            headerClass={'text-2xl font-medium text-[#181A20]'}
          />
        </div>
      </section>
      <Testimonials heading={'​日本語講師の声・体験談'} data={TestimonialData2} />

      <Footer />
    </>
  )
}

export default BecomeTutorScreen
