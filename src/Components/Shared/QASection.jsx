import { faqData } from '../../Static/FAQData'
import CustomCollapse from '../ui/CustomCollapse'

const QASection = () => {
  return (
    <section className='reasons-section py-[30px] lg:py-[120px]'>
      <div className='reason-main px-0 sm:px-[24px] md:px-[60px] contain '>
        <div className='images w-full lg:w-[40%] xl:w-[40%]  mb-[100px] lg:mb-0 relative lg:absolute lg:right-0 hidden lg:block'>
          <img src='/faq.svg' alt='reasons' className=' z-2 absolute right-0' />
        </div>
        <div className='reason-inner flex justify-between flex-col lg:flex-row  px-[12px] relative gap-[24px]'>
          <div className='content  w-full xl:w-[50%] flex flex-col gap-[16px]'>
            <div className='title [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl  xl:text-5xl max-w-full lg:max-w-[60%] 2xl:max-w-[100%]'>
              Recent<span className='text-[#5183F4]'> Announcements</span>
            </div>
            <div className='desc [font-family:var(--font-league)] text-base font-normal text-[#717171] lg:max-w-[50%] xl:max-w-full'>
              Delve into the rich expertise and enthusiasm of our newest mentorship team members. Whether they're
              experienced experts or up-and-coming talents, our team is committed to supporting and empowering learners
              on their path to success.
            </div>
            <div className='points flex flex-col gap-[16px] [font-family:var(--font-league)] lg:w-[50%] xl:w-full '>
              <CustomCollapse data={faqData} className={''} block={true} size={'large'} collapseWrapperClass={'custom-announcement-collapse'}/>
            </div>
          </div>
          <div className='images w-[100%] self-center lg:w-[40%] xl:w-[50%]  lg:mb-[100px] block lg:hidden'>
            <img src='/faq.svg' alt='reasons' className=' z-2 rounded-[20px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default QASection
