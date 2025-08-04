import React from 'react'
import TopBar from '../Components/Shared/TopBar'
import Footer from '../Components/Shared/Footer'
import FormSection from '../Components/Shared/FormSection'
import CustomInput from '../Components/ui/CustomInput'
import { CustomButton } from '../Components/ui/CustomButton'
import CustomTextArea from '../Components/ui/CustomTextArea'
const ContactUsScreen = () => {
  return (
    <>
      <TopBar />
      {/* START - Contact hero section */}
      <section>
        <div className='contain px-[60px] py-[60px]'>
          <div className='bg-[#EBF5FE] rounded-[30px] flex'>
            <div className='image xl:w-[60%]'>
              <img src='/contact-1.svg' alt='contact01' />
            </div>
            <div className='content py-[50px] px-[15px]'>
              <div className='inner flex flex-col gap-[24px]'>
                <h1 className='title text-[#5183F4]'>Contact Us</h1>
                <p className='desc-1 text-xl font-normal'>
                  For immediate assistance, check out our FAQs where you’ll find answers to many frequently asked
                  questions.
                  <br />
                  Reach out to Nihongo Talkers Customer Support by email at info@nihongotalkers.comOur team can
                  typically respond to emails within 1-3 business days.
                </p>
                <div className='desc-2'></div>
              </div>
              <div className='flex flex-col gap-[24px]'>
                <div className='custom-inputs flex gap-[24px]'>
                  <CustomInput
                    className='w-full lg:w-[50%]'
                    inputClassName={'border-[#FFFFFF]! bg-white h-[60px]!'}
                    placeholder={'First Name'}
                    leftIcon={'/form-person.svg'}
                  />
                  <CustomInput
                    className='w-full lg:w-[50%]'
                    inputClassName={'border-[#FFFFFF]! bg-white h-[60px]!'}
                    placeholder={'First Name'}
                    leftIcon={'/form-person.svg'}
                  />
                </div>
                <div className='custom-inputs'>
                  <CustomInput
                    className='w-full'
                    inputClassName={'border-[#FFFFFF]! bg-white h-[60px]!'}
                    placeholder={'First Name'}
                    leftIcon={'/mail.svg'}
                  />
                </div>
                <div className='custom-inputs'>
                  <CustomTextArea
                    className={
                      'bg-[#FFFFFF] border-[#FFFFFF]! h-[200px] rounded-[10px] placeholder:text-[#B1B1B1] text-[#181A20] py-[15px] px-[15px]'
                    }
                  />
                </div>
                <div>
                  <CustomButton text={'Submit Request'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* START - Contact hero section */}
      <FormSection
        inputs={false}
        title={'Become a Tutor'}
        desc={
          'Connect with us to stay informed about our latest updates, collaborate with us on innovative ideas, and unlock a plethora of opportunities that await your engagement and exploration!'
        }
        btnText={'Register Now'}
      />
      <Footer />
    </>
  )
}

export default ContactUsScreen
