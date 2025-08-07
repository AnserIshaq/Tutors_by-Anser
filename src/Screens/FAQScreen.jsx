import React from 'react'
import TopBar from '../Components/Shared/TopBar'
import Footer from '../Components/Shared/Footer'
import FormSection from '../Components/Shared/FormSection'
import { faqScreenData } from '../Static/FAQData'
import CustomCollapse from '../Components/ui/CustomCollapse'
const FAQScreen = () => {
  return (
    <>
      <FormSection
        inputs={false}
        title={'Frequently Asked Questions  '}
        desc={
          'Explore our Frequently Asked Questions section to find answers to common queries and get detailed information about our products/services.'
        }
        showBtn={false}
        showImage={true}
        imageClass={'top-0 right-0 z-1 h-full'}
        image={'/formSectionImg.svg'}
        btnText={'Register Now'}
      />
      <section className=' md:py-[60px]'>
        <div className='contain custom-tutor-faq px-[16px] sm:[px-[24px] md:px-[60px]'>
          <CustomCollapse
            data={faqScreenData}
            className={''}
            block={false}
            size={'small'}
            collapseWrapperClass={'custom-faq-collapse'}
            contentClass={'text-xl font-normal text-[#717171]'}
            headerClass={'text-2xl font-medium text-[#181A20]'}
          />
        </div>
      </section>
    </>
  )
}

export default FAQScreen
